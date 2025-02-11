#
# Copyright The NOMAD Authors.
#
# This file is part of NOMAD. See https://nomad-lab.eu for further info.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import datetime
import enum
import fnmatch
import json
import re
from typing import Any, Dict, List, Mapping, Optional, Union

import pydantic
from fastapi import Body, HTTPException, Request
from fastapi import Query as FastApiQuery
from pydantic import (  # pylint: disable=unused-import
    BaseModel,
    Extra,
    Field,
    StrictBool,
    StrictFloat,
    StrictInt,
    root_validator,
    validator,
)
from pydantic.main import create_model

from nomad import datamodel, metainfo  # pylint: disable=unused-import
from nomad.app.v1.utils import parameter_dependency_from_model
from nomad.metainfo.elasticsearch_extension import (
    DocumentType,
    material_entry_type,
    material_type,
)
from nomad.utils import strip

from .pagination import Pagination, PaginationResponse

User: Any = datamodel.User.m_def.a_pydantic.model
# It is important that datetime.datetime comes last. Otherwise, number valued strings
# are interpreted as epoch dates by pydantic
Value = Union[StrictInt, StrictFloat, StrictBool, str, datetime.datetime]
ComparableValue = Union[StrictInt, StrictFloat, str, datetime.datetime]


owner_documentation = strip(
    """
    The `owner` allows to limit the scope of the search based on entry ownership.
    This is useful if you only want to search among all publicly downloadable
    entries or only among your own entries, etc.

    These are the possible owner values and their meaning:

    * `admin`: No restriction. Only usable by an admin user.
    * `all`: Published entries (with or without embargo), or entries that belong to you
        or are shared with you.
    * `public`: Published entries without embargo.
    * `shared`: Entries that belong to you or are shared with you.
    * `staging`: Unpublished entries that belong to you or are shared with you.
    * `user`: Entries that belong to you.
    * `visible`: Published entries without embargo, or unpublished entries that belong to
        you or are shared with you.
    """
)


class Owner(str, enum.Enum):
    __doc__ = owner_documentation

    # There seems to be a slight bug in fast API. When it creates the example in OpenAPI
    # it will ignore any given default or example and simply take the first enum value.
    # Therefore, we put public first, which is the most default and save in most contexts.
    public = 'public'
    all_ = 'all'
    visible = 'visible'
    shared = 'shared'
    user = 'user'
    staging = 'staging'
    admin = 'admin'


class HTTPExceptionModel(BaseModel):
    detail: str


class NoneEmptyBaseModel(BaseModel):
    @root_validator
    def check_exists(cls, values):  # pylint: disable=no-self-argument
        assert any(value is not None for value in values.values())
        return values


class All(NoneEmptyBaseModel, extra=Extra.forbid):
    op: List[Value] = Field(None, alias='all')


class None_(NoneEmptyBaseModel, extra=Extra.forbid):
    op: List[Value] = Field(None, alias='none')


class Any_(NoneEmptyBaseModel, extra=Extra.forbid):
    op: List[Value] = Field(None, alias='any')


class Range(BaseModel, extra=Extra.forbid):
    """
    Represents a finite range which can have open or closed ends. Supports
    several datatypes that have a well-defined comparison operator.
    """

    @root_validator
    def check_range_is_valid(cls, values):  # pylint: disable=no-self-argument
        lt = values.get('lt')
        lte = values.get('lte')
        gt = values.get('gt')
        gte = values.get('gte')

        # At least one value needs to be defined
        assert (
            (lt is not None)
            or (lte is not None)
            or (gt is not None)
            or (gte is not None)
        )

        # The start/end can only be either open or closed, not both
        if lt is not None:
            assert lte is None
        if lte is not None:
            assert lt is None
        if gt is not None:
            assert gte is None
        if gte is not None:
            assert gt is None

        return values

    lt: Optional[ComparableValue] = Field(None)
    lte: Optional[ComparableValue] = Field(None)
    gt: Optional[ComparableValue] = Field(None)
    gte: Optional[ComparableValue] = Field(None)


ops = {
    'lte': Range,
    'lt': Range,
    'gte': Range,
    'gt': Range,
    'all': All,
    'none': None_,
    'any': Any_,
}

CriteriaValue = Union[Value, List[Value], Range, Any_, All, None_, Dict[str, Any]]


class LogicalOperator(NoneEmptyBaseModel):
    @validator('op', check_fields=False)
    def validate_query(cls, query):  # pylint: disable=no-self-argument
        if isinstance(query, list):
            return [_validate_query(item) for item in query]

        return _validate_query(query)


class And(LogicalOperator):
    op: List['Query'] = Field(None, alias='and')


class Or(LogicalOperator):
    op: List['Query'] = Field(None, alias='or')


class Not(LogicalOperator):
    op: 'Query' = Field(None, alias='not')


class Nested(BaseModel):
    prefix: str
    query: 'Query'

    @validator('query')
    def validate_query(cls, query):  # pylint: disable=no-self-argument
        return _validate_query(query)


class Criteria(BaseModel, extra=Extra.forbid):
    name: str
    value: CriteriaValue

    @validator('value')
    def validate_query(cls, value, values):  # pylint: disable=no-self-argument
        name, value = _validate_criteria_value(values['name'], value)
        values['name'] = name
        return value


class Empty(BaseModel, extra=Extra.forbid):
    pass


Query = Union[And, Or, Not, Nested, Criteria, Empty, Mapping[str, CriteriaValue]]


And.update_forward_refs()
Or.update_forward_refs()
Not.update_forward_refs()
Nested.update_forward_refs()


query_documentation = strip(
    """
A query can be a very simple list of parameters. Different parameters or values of the same parameter are combined
with a logical **and**.
The following query would search for all entries that are VASP calculations,
contain *Na* **and** *Cl*, **and** are authored by *Stefano Curtarolo*
**and** *Chris Wolverton*.
```json
{
    "results.material.elements": ["Na", "Cl"],
    "results.method.simulation.program_name": "VASP",
    "authors": ["Stefano Curtarolo", "Chris Wolverton"]
}
```

A short cut to change the logical combination of values in a list, is to
add a suffix to the quantity `:any`:
```json
{
    "results.material.elements": ["Na", "Cl"],
    "results.method.simulation.program_name": "VASP",
    "authors:any": ["Stefano Curtarolo", "Chris Wolverton"]
}
```

Otherwise, you can also write complex logical combinations of parameters like this:
```json
{
    "and": [
        {
            "or": [
                {
                    "results.material.elements": ["Cl", "Na"]
                },
                {
                    "results.material.elements": ["H", "O"]
                }
            ]
        },
        {
            "not": {
                "results.material.symmetry.crystal_system": "cubic"
            }
        }
    ]
}
```
Other short-cut prefixes are `none:` and `any:` (the default).

By default all quantity values have to **equal** the given values to match. For
some values you can also use comparison operators like this:
```json
{
    "upload_create_time": {
        "gt": "2020-01-01",
        "lt": "2020-08-01"
    },
    "results.properties.geometry_optimization.final_energy_difference": {
        "lte": 1.23e-18
    }
}
```

or shorter with suffixes:
```json
{
    "upload_create_time:gt": "2020-01-01",
    "upload_create_time:lt": "2020-08-01",
    "results.properties.geometry_optimization.final_energy_difference:lte": 1.23e-18
}
```

The searchable quantities are a subset of the NOMAD Archive quantities defined
in the NOMAD Metainfo. The searchable quantities also depend on the API endpoint.

There is also an additional query parameter that you can use to formulate queries based
on the optimade filter language:
```json
{
    "optimade_filter": "nelements >= 2 AND elements HAS ALL 'Ti', 'O'"
}
```
"""
)


def restrict_query_to_upload(query: Query, upload_id: str):
    """Utility for restricting an arbitrary Query to a single upload."""
    if (
        isinstance(query, Mapping)
        and query.keys() == {'entry_id'}
        and isinstance(query['entry_id'], All)
    ):
        # Special case. We want to allow this type of queries, but for some reason, ES will
        # not find anything if we just "and" the query with an upload_id criteria as usual.
        # Instead, for it to work, the "All" must be changed to an "Any" operation.
        values = query['entry_id'].op
        return And(
            **{'and': [{'upload_id': upload_id}, {'entry_id': Any_(any=values)}]}
        )
    return And(**{'and': [{'upload_id': upload_id}, query]})


class WithQuery(BaseModel):
    owner: Optional[Owner] = Body('public')
    query: Optional[Query] = Body(
        None,
        embed=True,
        description=query_documentation,
        example={
            'upload_create_time:gt': '2020-01-01',
            'results.material.elements': ['Ti', 'O'],
            'results.method.simulation.program_name': 'VASP',
            'results.properties.geometry_optimization.final_energy_difference:lte': 1.23e-18,
            'results.properties.available_properties': 'section_dos',
            'results.material.type_structural:any': ['bulk', '2d'],
            'optimade_filter': 'nelements >= 2 AND elements HAS ALL "Ti", "O"',
        },
    )

    @validator('query')
    def validate_query(cls, query):  # pylint: disable=no-self-argument
        return _validate_query(query)

    class Config:
        use_enum_values = True


def _validate_criteria_value(name: str, value: CriteriaValue):
    if ':' in name:
        quantity, qualifier = name.rsplit(':', 1)
        if qualifier not in ops:
            quantity, qualifier = name, None
    else:
        quantity, qualifier = name, None

    if qualifier is not None:
        return quantity, ops[qualifier](**{qualifier: value})  # type: ignore
    elif isinstance(value, list):
        return quantity, All(all=value)
    else:
        return quantity, value


def _validate_query(query: Query):
    if isinstance(query, dict):
        for key, value in list(query.items()):
            quantity, value = _validate_criteria_value(key, value)
            if quantity != key:
                assert quantity not in query, (
                    'a quantity can only appear once in a query'
                )
                del query[key]
            query[quantity] = value

    return query


class QueryParameters:
    def __init__(self, doc_type: DocumentType):
        self.doc_type = doc_type

    def __call__(
        self,
        request: Request,
        owner: Optional[Owner] = FastApiQuery(
            'public', description=strip(Owner.__doc__)
        ),
        json_query: Optional[str] = FastApiQuery(
            None,
            description=strip(
                """
                To pass a query string in the format of JSON e.g. '{{"results.material.elements": ["H", "O"]}}'.
            """
            ),
        ),
        q: Optional[List[str]] = FastApiQuery(
            [],
            description=strip(
                """
                Since we cannot properly offer forms for all parameters in the OpenAPI dashboard,
                you can use the parameter `q` and encode a query parameter like this
                `atoms__H` or `n_atoms__gt__3`. Multiple usage of `q` will combine parameters with
                logical *and*.
            """
            ),
        ),
    ) -> WithQuery:
        # copy parameters from request
        query_params = {
            key: request.query_params.getlist(key) for key in request.query_params
        }

        # add the encoded parameters
        for parameter in q:
            fragments = parameter.split('__')
            if len(fragments) == 1 or len(fragments) > 3:
                raise HTTPException(
                    422,
                    detail=[
                        {
                            'loc': ['query', 'q'],
                            'msg': 'wrong format, use <quantity>[__<op>]__<value>',
                        }
                    ],
                )
            name_op, value = '__'.join(fragments[:-1]), fragments[-1]
            quantity_name = name_op.split('__', maxsplit=1)[0]

            doc_type = self.doc_type
            if quantity_name.startswith('entries.'):
                if self.doc_type == material_type:
                    doc_type = material_entry_type
                else:
                    raise HTTPException(
                        422,
                        detail=[
                            {
                                'loc': ['query', parameter],
                                'msg': f'entries can only be nested into material queries',
                            }
                        ],
                    )

            if quantity_name not in doc_type.quantities:
                raise HTTPException(
                    422,
                    detail=[
                        {
                            'loc': ['query', parameter],
                            'msg': f'{quantity_name} is not a {doc_type} quantity',
                        }
                    ],
                )

            query_params.setdefault(name_op, []).append(value)

        # transform query parameters to query
        query: Dict[str, Any] = {}
        for key, query_value in query_params.items():
            op = None
            if '__' in key:
                quantity_name, op = key.split('__')
            else:
                quantity_name = key

            if quantity_name.startswith('entries.'):
                quantity = material_entry_type.quantities.get(quantity_name[8:])
            else:
                quantity = self.doc_type.quantities.get(quantity_name)

            if quantity is None:
                continue

            standard_type = quantity.definition.type.standard_type()
            converter: Any = str
            if standard_type.startswith('int'):
                converter = int
            elif standard_type.startswith('float'):
                converter = float
            elif standard_type.startswith('bool'):
                converter = bool
            elif standard_type.startswith('datetime'):
                converter = datetime.datetime.fromisoformat

            values = [converter(value) for value in query_value]

            if op is None:
                op = 'all' if quantity.many_all else 'any'

            if op == 'all':
                query[quantity_name] = All(all=values)
            elif op == 'any':
                query[quantity_name] = Any_(any=values)
            elif op in ops:
                if len(values) > 1:
                    raise HTTPException(
                        status_code=422,
                        detail=[
                            {
                                'loc': ['query', key],
                                'msg': 'operator %s does not support multiple values'
                                % op,
                            }
                        ],
                    )
                query[quantity_name] = ops[op](**{op: values[0]})
            else:
                raise HTTPException(
                    422,
                    detail=[
                        {'loc': ['query', key], 'msg': 'operator %s is unknown' % op}
                    ],
                )

        # process the json_query
        if json_query is not None:
            try:
                query.update(**json.loads(json_query))
            except Exception:
                raise HTTPException(
                    422,
                    detail=[{'loc': ['json_query'], 'msg': 'cannot parse json_query'}],
                )

        return WithQuery(query=query, owner=owner)


class MetadataRequired(BaseModel):
    """Defines which metadata quantities are included or excluded in the response."""

    include: Optional[List[str]] = Field(
        None,
        description=strip("""
            Quantities to include for each result. Only those quantities will be
            returned. At least one id quantity (e.g. `entry_id`) will always be included.
        """),
    )
    exclude: Optional[List[str]] = Field(
        None,
        description=strip("""
            Quantities to exclude for each result. Only all other quantities will
            be returned. The entity's id quantity (e.g. `entry_id`) cannot be excluded.
        """),
    )


metadata_required_parameters = parameter_dependency_from_model(
    'metadata_required_parameters', MetadataRequired
)


class MetadataBasedPagination(Pagination):
    order_by: Optional[str] = Field(
        None,
        description=strip(
            """
            The results are ordered by the values of this field. You can order
            by any indexed scalar value, or one following two special fields:

             - `_score`: Sorts by relevance score.
             - `_doc`: Use when sorting does not matter, gives the best performance.

            If omitted, default ordering is applied.
        """
        ),
    )

    @validator('order_by')
    def validate_order_by(cls, order_by):  # pylint: disable=no-self-argument
        # No validation here – validation is done during search
        if order_by == 'mainfile_path':
            return 'mainfile'
        return order_by


class MetadataPagination(MetadataBasedPagination):
    page: Optional[int] = Field(
        None,
        description=strip(
            """
            For simple, index-based pagination, this should contain the number of the
            requested page (1-based). When provided in a request, this attribute can be
            used instead of `page_after_value` to jump to a particular results page.

            However, you can only retrieve up to the 10.000th entry with a page number.
            Only one, `page`, `page_offset` or `page_after_value`, can be used.
        """
        ),
    )

    page_offset: Optional[int] = Field(
        None,
        description=strip(
            """
            Return the page that follows the given number of entries. Overwrites
            `page` and `page_after_value`.

            However, you can only retrieve up to the 10.000th entry.
            Only one, `page`, `page_offset` or `page_after_value`, can be used.
        """
        ),
    )

    @validator('page')
    def validate_page(cls, page, values):  # pylint: disable=no-self-argument
        if page is not None:
            assert page > 0, 'Page has to be larger than 1.'
            assert page * values.get('page_size', 10) < 10000, (
                'Pagination by `page` is limited to 10.000 entries.'
            )

        return page

    @validator('page_offset')
    def validate_page_offset(cls, page_offset, values):  # pylint: disable=no-self-argument
        if page_offset is not None:
            assert page_offset >= 0, 'Page offset has to be larger than 0.'
            assert page_offset + values.get('page_size', 10) < 10000, (
                'Page offset plus page size has to be smaller thant 10.0000.'
            )

        return page_offset

    def order_result(self, result):
        return result


metadata_pagination_parameters = parameter_dependency_from_model(
    'metadata_pagination_parameters', MetadataPagination
)


class AggregationPagination(MetadataBasedPagination):
    order_by: Optional[str] = Field(
        None,  # type: ignore
        description=strip(
            """
            Either the string "count", "value", or the name of a quantity. If omitted the buckets
            will be ordered by the item "count".

            If you provide a quantity, all items
            in a bucket must have the same value for this quantity. For example, aggregating
            entries on `upload_id` and ordering with the buckets by `upload_create_time` is fine,
            because all entries in an upload have the same `upload_create_time`. The API cannot
            check this rule and the results will be unpredictable.

            If you want to order by the bucket values, you can either use "value" or use
            the aggregation quantity to `order_by`. The result will be the same, because
            the bucket values are the quantity values.
        """
        ),
    )

    @validator('page')
    def validate_page(cls, page, values):  # pylint: disable=no-self-argument
        assert page is None, (
            'Pagination by `page` is not possible for aggregations, use `page_after_value`'
        )
        return page

    @validator('page_size')
    def validate_page_size(cls, page_size, values):  # pylint: disable=no-self-argument
        assert page_size > 0, (
            '0 or smaller page sizes are not allowed for aggregations.'
        )
        return page_size


class AggregatedEntities(BaseModel):
    size: Optional[pydantic.conint(gt=0)] = Field(  # type: ignore
        1,
        description=strip(
            """
        The number of entries that should be returned for each value in the
        aggregation.
        """
        ),
    )
    required: Optional[MetadataRequired] = Field(
        None,
        description=strip(
            """
        This allows to determined what fields should be returned for each entry.
        """
        ),
    )


class AggregationBase(BaseModel):
    pass


class QuantityAggregation(AggregationBase):
    quantity: str = Field(
        ...,
        description=strip(
            """
        The mandatory name of the quantity for the aggregation. Aggregations
        can only be computed for those search metadata that have discrete values;
        an aggregation buckets entries that have the same value for this quantity."""
        ),
    )
    exclude_from_search: bool = Field(
        False,
        description=strip(
            """
        If set to true, top-level search criteria involving the aggregation quantity, will not
        be applied for this aggregation. Therefore, the aggregation will return all
        values for the quantity, even if the possible values where filtered by the query.

        There are two limitations. This is only supported with queries that start with a
        dictionary. It will not work for queries with a boolean operator. It can only
        exclude top-level criteria at the root of the query dictionary. Nested criteria,
        e.g. within complex and/or constructs, cannot be considered. Using this might also
        prohibit pagination with page_after_value on aggregations in the same request.
        """
        ),
    )


class BucketAggregation(QuantityAggregation):
    metrics: Optional[List[str]] = Field(
        [],
        description=strip(
            """
        By default the returned aggregations will provide the number of entries for each
        value. You can add more metrics. For each metric an additional number will be
        provided for each value. Metrics are also based on search metadata. Depending on
        the metric the number will represent either a sum (`calculations` for the number
        of individual calculation in each code run) or an amount of different values
        (i.e. `materials` for the amount of different material hashes)."""
        ),
    )


class TermsAggregation(BucketAggregation):
    pagination: Optional[AggregationPagination] = Field(
        None,
        description=strip(
            """
        Only the data few values are returned for each API call. Aggregation
        pagination allows to get all available values by pagination. It also allows to
        order values.

        You can only use pagination (to page through all available values) or size (to
        get the size number of values with the most available data).
        """
        ),
    )
    size: Optional[pydantic.conint(gt=0)] = Field(  # type: ignore
        None,
        description=strip(
            """
        The amount of aggregation values is limited. This allows you to configure the
        maximum number of aggregated values to return. If you need to exaust all
        possible value, use `pagination`.
        """
        ),
    )
    include: Optional[  # type: ignore
        Union[List[str], pydantic.constr(regex=r'^[a-zA-Z0-9_\-\s]+$')]
    ] = Field(
        None,
        description=strip(
            """
        An optional filter for aggregation values. You can either specify a
        single string which must be contained in the aggregation value or then
        provide an array of keywords for which the aggregation will be created.

        This is only available for non paginated aggregations.
        """
        ),
    )
    entries: Optional[AggregatedEntities] = Field(
        None,
        description=strip(
            """
        Optionally, a set of entries can be returned for each value. These are basically
        example entries that have the respective bucket value.
        """
        ),
    )


class Bounds(BaseModel):
    min: Optional[float] = Field(
        description=strip(
            """
        Start value for the histogram.
        """
        )
    )
    max: Optional[float] = Field(
        description=strip(
            """
        Ending value for the histogram.
        """
        )
    )

    @root_validator
    def check_order(cls, values):  # pylint: disable=no-self-argument
        min = values.get('min')
        max = values.get('max')
        if min is not None and max is not None:
            if min > max:
                raise ValueError(
                    'The maximum value should be greater than the minimum value.'
                )
        return values


class HistogramAggregation(BucketAggregation):
    interval: float = Field(
        None,
        gt=0,
        description=strip(
            """
            The histogram bucketing interval. Provide either this or the number
            of buckets.
        """
        ),
    )
    buckets: int = Field(
        None,
        gt=0,
        description=strip(
            """
            The number of buckets to use. Provide either this or the interval.
            The interval for the bucketing is automatically chosen to achieve
            the target number of buckets. Notice that for integer data types
            (int, long, date), the returned number of buckets may be smaller
            than the requested amount if the histogram range is smaller than
            the number of buckets. This setting will override the interval.
        """
        ),
    )
    offset: float = Field(None, gte=0)
    extended_bounds: Optional[Bounds]

    @root_validator
    def check_bucketing(cls, values):  # pylint: disable=no-self-argument
        interval = values.get('interval')
        buckets = values.get('buckets')
        if interval is None and buckets is None:
            raise ValueError('Provide either interval or the number of buckets.')
        return values


class DateHistogramAggregation(BucketAggregation):
    interval: str = Field('1M')  #  type: ignore


class AutoDateHistogramAggregation(BucketAggregation):
    buckets: int = Field(
        10,
        description=strip(
            """
        The target number of buckets. The interval of the buckets is
        automatically chosen to best achieve that target. The number of buckets
        returned will always be less than or equal to this target number.
        """
        ),
    )


class MinMaxAggregation(QuantityAggregation):
    pass


class StatisticsAggregation(AggregationBase):
    metrics: Optional[List[str]] = Field(
        [],
        description=strip(
            """
        A list of search quantities to act as metrics on all data. Depending on
        the metric the number will represent either a sum (`calculations` for the number
        of individual calculation in each code run) or an amount (cardinality) of
        different values (i.e. `materials` for the amount of different material hashes)."""
        ),
    )


class Aggregation(BaseModel):
    terms: Optional[TermsAggregation] = Body(
        None,
        description=strip(
            """
            A `terms` aggregation allows to get the values of a quantity that occur in
            the search query result data. For each value, a bucket is created with
            information about how many entries have the value (or additional metrics).
            For example to get all entries that use a certain code, you can use:
            ```json
            {
                "aggregations": {
                    "all_codes": {
                        "terms": {
                            "quantity": "results.method.simulation.program_name"
                        }
                    }
                }
            }
            ```

            Terms aggregations can also be used to paginate though all values of a certain
            quantities. Each page will be companied with a `page_after_value` that
            can be used to retrieve the next value. For example to go through all datasets
            available in the search query:
            ```json
            {
                "aggregations": {
                    "all_datasets": {
                        "terms": {
                            "quantity": "datasets",
                            "pagination": {
                                "page_size": 100
                            }
                        }
                    }
                }
            }
            ```
        """
        ),
    )

    histogram: Optional[HistogramAggregation] = Body(
        None,
        description=strip(
            """
            A `histogram` aggregation allows to get the ranges quantity values and
            how many (or another metrics) entries exhibit values in those ranges:

            ```json
            {
                "aggregations": {
                    "calculations_per_entry": {
                        "histogram": {
                            "quantity": "properties.n_calculations",
                            "interval": 10
                        }
                    }
                }
            }
            ```

            The used quantity must be a float or int typed quantity. An interval is
            mandatory and determines the bucket size.
        """
        ),
    )

    date_histogram: Optional[DateHistogramAggregation] = Body(
        None,
        description=strip(
            """
            A `date_histogram` aggregation is like a normal `histogram` but for date valued
            quantities.:

            ```json
            {
                "aggregations": {
                    "upload_create_times": {
                        "date_histogram": {
                            "quantity": "upload_create_time",
                            "interval": "1M"
                        }
                    }
                }
            }
            ```

            The used quantity must be a datetime typed quantity. Intervals are strings
            that determine a time period. The default is one month, `1M`.
        """
        ),
    )

    auto_date_histogram: Optional[AutoDateHistogramAggregation] = Body(
        None,
        description=strip(
            """
            A `auto_date_histogram` aggregation is like a normal
            `date_histogram` but instead of providing an explicit time step,
            you can provide a target number of buckets.:

            ```json
            {
                "aggregations": {
                    "upload_create_times": {
                        "auto_date_histogram": {
                            "quantity": "upload_create_time",
                            "buckets": "10"
                        }
                    }
                }
            }
            ```

            The used quantity must be a datetime typed quantity. Buckets are
            integer numbers that determine the targeted amount of buckets.
            Notice that number of buckets returned will always be less than or
            equal to this target number. The default is to target 10 buckets.
        """
        ),
    )

    min_max: Optional[MinMaxAggregation] = Body(
        None,
        description=strip(
            """
            A `min_max` aggregation allows to get the minumum and maximum quantity values:

            ```json
            {
                "aggregations": {
                    "calculations_per_entry": {
                        "min_max": {
                            "quantity": "results.properties.n_calculations"
                        }
                    }
                }
            }
            ```

            The used quantity must be a float or int typed quantity.
        """
        ),
    )

    statistics: Optional[StatisticsAggregation] = Body(
        None,
        description=strip(
            """
            A `statistics` aggregation allows to get metrics (sums or cardinalities) from all data
            that matches the search.

            ```json
            {
                "aggregations": {
                    "statistics": {
                        "global": {
                            "metrics": ["results.properties.n_calculations", "results.material.material_id"]
                        }
                    }
                }
            }
            ```
        """
        ),
    )


class WithQueryAndPagination(WithQuery):
    pagination: Optional[MetadataPagination] = Body(
        None, example={'page_size': 5, 'order_by': 'upload_create_time'}
    )


class Metadata(WithQueryAndPagination):
    required: Optional[MetadataRequired] = Body(
        None,
        example={
            'include': [
                'entry_id',
                'mainfile',
                'upload_id',
                'authors',
                'upload_create_time',
            ]
        },
    )
    aggregations: Optional[Dict[str, Aggregation]] = Body(
        {},
        example={
            'all_codes': {
                'terms': {
                    'quantity': 'results.method.simulation.program_name',
                    'entries': {'size': 1, 'required': {'include': ['mainfile']}},
                },
            },
            'all_datasets': {
                'terms': {
                    'quantity': 'datasets.dataset_name',
                    'pagination': {'page_size': 100},
                }
            },
            'system_size': {
                'min_max': {
                    'quantity': 'results.properties.structures.structure_conventional.n_sites'
                }
            },
            'upload_create_times': {
                'date_histogram': {'quantity': 'upload_create_time', 'interval': '1M'}
            },
            'calculations_per_entry': {
                'histogram': {
                    'quantity': 'results.properties.n_calculations',
                    'interval': 5,
                }
            },
        },
        description=strip(
            """
            Defines additional aggregations to return. There are different types of
            aggregations: `terms`, `histogram`, `data_histogram`, `min_max`.
        """
        ),
    )


class MetadataEditListAction(BaseModel):
    """
    Defines an action to perform on a list quantity. This enables users to add and remove values.
    """

    set: Optional[Union[str, List[str]]] = Field(
        description=strip(
            """
        Value(s) to set. Note, a set-operation overwrites the old list with the provided list.
        If a set-operation is specified, it is therefore not possible to also specify an
        add- or remove-operation."""
        )
    )
    add: Optional[Union[str, List[str]]] = Field(
        description=strip(
            """
        Value(s) to add to the list"""
        )
    )
    remove: Optional[Union[str, List[str]]] = Field(
        description=strip(
            """
        Value(s) to remove from the list"""
        )
    )


# Generate model for MetadataEditActions
_metadata_edit_actions_fields = {}
for quantity in datamodel.EditableUserMetadata.m_def.definitions:
    if quantity.is_scalar:
        pydantic_type = (
            quantity.type if quantity.type in (str, int, float, bool) else str
        )
    else:
        pydantic_type = Union[str, List[str], MetadataEditListAction]
    if getattr(quantity, 'a_auth_level', None) == datamodel.AuthLevel.admin:
        description = '**NOTE:** Only editable by admin user'
    else:
        description = None
    _metadata_edit_actions_fields[quantity.name] = (
        Optional[pydantic_type],
        Field(description=description),
    )

MetadataEditActions = create_model(
    'MetadataEditActions', **_metadata_edit_actions_fields
)  # type: ignore


class MetadataEditRequest(WithQuery):
    """Defines a request to edit metadata."""

    metadata: Optional[MetadataEditActions] = Field(  # type: ignore
        description=strip(
            """
            Metadata to set, on the upload and/or selected entries."""
        )
    )
    entries: Optional[Dict[str, MetadataEditActions]] = Field(  # type: ignore
        description=strip(
            """
            An optional dictionary, specifying metadata to set on individual entries. The field
            `entries_metadata_key` defines which type of key is used in the dictionary to identify
            the entries. Note, only quantities defined on the entry level can be set using this method."""
        )
    )
    entries_key: Optional[str] = Field(
        default='entry_id',
        description=strip(
            """
            Defines which type of key is used in `entries_metadata`. Default is `entry_id`."""
        ),
    )
    verify_only: Optional[bool] = Field(
        default=False,
        description=strip(
            """
            Do not execute the request, just verifies it and provides detailed feedback on
            encountered errors etc."""
        ),
    )


class Files(BaseModel):
    """Configures the download of files."""

    compress: Optional[bool] = Field(
        False,
        description=strip(
            """
        By default the returned zip file is not compressed. This allows to enable compression.
        Compression will reduce the rate at which data is provided, often below
        the rate of the compression. Therefore, compression is only sensible if the
        network connection is limited."""
        ),
    )
    glob_pattern: Optional[str] = Field(
        None,
        description=strip(
            """
        An optional *glob* (or unix style path) pattern that is used to filter the
        returned files. Only files matching the pattern are returned. The pattern is only
        applied to the end of the full path. Internally
        [fnmatch](https://docs.python.org/3/library/fnmatch.html) is used."""
        ),
    )
    re_pattern: Optional[str] = Field(
        None,
        description=strip(
            """
        An optional regexp that is used to filter the returned files. Only files matching
        the pattern are returned. The pattern is applied in search mode to the full
        path of the files. With `$` and `^` you can control if you want to match the
        whole path.

        A re pattern will replace a given glob pattern."""
        ),
    )
    include_files: Optional[List[str]] = Field(
        None,
        description=strip(
            """
        Optional list of file names. Only files with these names are included in the
        results. This will overwrite any given glob or re pattern."""
        ),
    )

    @validator('glob_pattern')
    def validate_glob_pattern(cls, glob_pattern):  # pylint: disable=no-self-argument
        # compile the glob pattern into re
        if glob_pattern is None:
            return None

        return re.compile(fnmatch.translate(glob_pattern) + r'$')

    @validator('re_pattern')
    def validate_re_pattern(cls, re_pattern):  # pylint: disable=no-self-argument
        # compile an re
        if re_pattern is None:
            return None
        try:
            return re.compile(re_pattern)
        except re.error as e:
            assert False, 'could not parse the re pattern: %s' % e

    @root_validator()
    def vaildate(cls, values):  # pylint: disable=no-self-argument
        # use the compiled glob pattern as re
        if values.get('re_pattern') is None:
            values['re_pattern'] = values.get('glob_pattern')

        if values.get('include_files') is not None:
            files = values['include_files']
            values['re_pattern'] = re.compile(
                f'({"|".join([re.escape(f) for f in files])})$'
            )

        return values


files_parameters = parameter_dependency_from_model('files_parameters', Files)


class Bucket(BaseModel):
    entries: Optional[List[Dict[str, Any]]] = Field(
        None, description=strip("""The entries that were requested for each value.""")
    )
    count: int = Field(
        None, description=strip("""The amount of entries with this value.""")
    )
    nested_count: int = Field(
        None,
        description=strip(
            """
            The amount of nested entries with this values. Is the same as count for
            aggregations on non nested quantities."""
        ),
    )
    metrics: Optional[Dict[str, int]]

    value: Union[StrictBool, float, str]


class BucketAggregationResponse(BaseModel):
    data: List[Bucket] = Field(
        None, description=strip("""The aggregation data as a list.""")
    )


class TermsAggregationResponse(BucketAggregationResponse, TermsAggregation):
    pagination: Optional[PaginationResponse]  # type: ignore


class HistogramAggregationResponse(BucketAggregationResponse, HistogramAggregation):
    pass


class DateHistogramAggregationResponse(
    BucketAggregationResponse, DateHistogramAggregation
):
    pass


class AutoDateHistogramAggregationResponse(
    BucketAggregationResponse, AutoDateHistogramAggregation
):
    interval: str = Field(
        None, description=strip("""The interval that was used for the bucketing.""")
    )


class MinMaxAggregationResponse(MinMaxAggregation):
    data: List[Union[float, None]]


class StatisticsAggregationResponse(StatisticsAggregation):
    data: Optional[Dict[str, int]]


class AggregationResponse(Aggregation):
    terms: Optional[TermsAggregationResponse]
    histogram: Optional[HistogramAggregationResponse]
    date_histogram: Optional[DateHistogramAggregationResponse]
    auto_date_histogram: Optional[AutoDateHistogramAggregationResponse]
    min_max: Optional[MinMaxAggregationResponse]
    statistics: Optional[StatisticsAggregationResponse]


class CodeResponse(BaseModel):
    curl: str
    requests: str
    nomad_lab: Optional[str]


class MetadataResponse(Metadata):
    pagination: PaginationResponse = None  # type: ignore
    aggregations: Optional[Dict[str, AggregationResponse]]  # type: ignore

    data: List[Dict[str, Any]] = Field(
        None,
        description=strip(
            """
        The entries data as a list. Each item is a dictionary with the metadata for each
        entry."""
        ),
    )

    code: Optional[CodeResponse]
    es_query: Any = Field(
        None,
        description=strip(
            """The elasticsearch query that was used to retrieve the results."""
        ),
    )
