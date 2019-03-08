# Copyright 2018 Markus Scheidgen
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an"AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
The repository API of the nomad@FAIRDI APIs. Currently allows to resolve repository
meta-data.
"""

from flask_restplus import Resource, abort, fields
from flask import request, g
from elasticsearch_dsl import Q

from nomad.files import UploadFiles, Restricted
from nomad import search

from .app import api
from .auth import login_if_available, create_authorization_predicate
from .common import pagination_model, pagination_request_parser, calc_route

ns = api.namespace('repo', description='Access repository metadata.')


@calc_route(ns)
class RepoCalcResource(Resource):
    @api.response(404, 'The upload or calculation does not exist')
    @api.response(401, 'Not authorized to access the calculation')
    @api.response(200, 'Metadata send', fields.Raw)
    @api.doc('get_repo_calc')
    @login_if_available
    def get(self, upload_id, calc_id):
        """
        Get calculation metadata in repository form.

        Repository metadata only entails the quanties shown in the repository.
        Calcs are references via *upload_id*, *calc_id* pairs.
        """
        # TODO use elastic search instead of the files
        # TODO add missing user metadata (from elastic or repo db)
        upload_files = UploadFiles.get(upload_id, create_authorization_predicate(upload_id, calc_id))
        if upload_files is None:
            abort(404, message='There is no upload %s' % upload_id)

        try:
            return upload_files.metadata.get(calc_id), 200
        except Restricted:
            abort(401, message='Not authorized to access %s/%s.' % (upload_id, calc_id))
        except KeyError:
            abort(404, message='There is no calculation for %s/%s' % (upload_id, calc_id))


repo_calcs_model = api.model('RepoCalculations', {
    'pagination': fields.Nested(pagination_model),
    'results': fields.List(fields.Raw, description=(
        'A list of search results. Each result is a dict with quantitie names as key and '
        'values as values')),
    'scroll_id': fields.String(description='Id of the current scroll view in scroll based search.'),
    'aggregations': fields.Raw(description=(
        'A dict with all aggregations. Each aggregation is dictionary with the amount as '
        'value and quantity value as key.'))
})

repo_request_parser = pagination_request_parser.copy()
repo_request_parser.add_argument(
    'owner', type=str,
    help='Specify which calcs to return: ``all``, ``user``, ``staging``, default is ``all``')
repo_request_parser.add_argument(
    'scroll', type=bool, help='Enable scrolling')
repo_request_parser.add_argument(
    'scroll_id', type=str, help='The id of the current scrolling window to use.')

for search_quantity in search.search_quantities.keys():
    _, _, description = search.search_quantities[search_quantity]
    repo_request_parser.add_argument(search_quantity, type=str, help=description)


@ns.route('/')
class RepoCalcsResource(Resource):
    @api.doc('search')
    @api.response(400, 'Invalid requests, e.g. wrong owner type or bad quantities')
    @api.expect(repo_request_parser, validate=True)
    @api.marshal_with(repo_calcs_model, skip_none=True, code=200, description='Metadata send')
    @login_if_available
    def get(self):
        """
        Search for calculations in the repository from, paginated.

        The ``owner`` parameter determines the overall entries to search through.
        You can use the various quantities to search/filter for. For some of the
        indexed quantities this endpoint returns aggregation information. This means
        you will be given a list of all possible values and the number of entries
        that have the certain value. You can also use these aggregations on an empty
        search to determine the possible values.

        The pagination parameters allows determine which page to return via the
        ``page`` and ``per_page`` parameters. Pagination however, is limited to the first
        100k (depending on ES configuration) hits. An alternative to pagination is to use
        ``scroll`` and ``scroll_id``. With ``scroll`` you will get a ``scroll_id`` on
        the first request. Each call with ``scroll`` and the respective ``scroll_id`` will
        return the next ``per_page`` (here the default is 1000) results. Scroll however,
        ignores ordering and does not return aggregations. The scroll view used in the
        background will stay alive for 1 minute between requests.

        The search will return aggregations on a predefined set of quantities. Aggregations
        will tell you what quantity values exist and how many entries match those values.

        Ordering is determined by ``order_by`` and ``order`` parameters.
        """

        try:
            scroll = bool(request.args.get('scroll', False))
            scroll_id = request.args.get('scroll_id', None)
            page = int(request.args.get('page', 1))
            per_page = int(request.args.get('per_page', 10 if not scroll else 1000))
            order = int(request.args.get('order', -1))
        except Exception:
            abort(400, message='bad parameter types')

        owner = request.args.get('owner', 'all')
        order_by = request.args.get('order_by', 'formula')

        try:
            assert page >= 1
            assert per_page > 0
        except AssertionError:
            abort(400, message='invalid pagination')

        if order not in [-1, 1]:
            abort(400, message='invalid pagination')

        if owner == 'all':
            if g.user is None:
                q = Q('term', published=True)
            else:
                q = Q('term', published=True) | Q('term', owners__user_id=g.user.user_id)
        elif owner == 'user':
            if g.user is None:
                abort(401, message='Authentication required for owner value user.')

            q = Q('term', owners__user_id=g.user.user_id)
        elif owner == 'staging':
            if g.user is None:
                abort(401, message='Authentication required for owner value user.')
            q = Q('term', published=False) & Q('term', owners__user_id=g.user.user_id)
        else:
            abort(400, message='Invalid owner value. Valid values are all|user|staging, default is all')

        data = dict(**request.args)
        data.pop('owner', None)
        data.pop('scroll', None)
        data.pop('scroll_id', None)
        data.pop('per_page', None)
        data.pop('page', None)
        data.pop('order', None)
        data.pop('order_by', None)

        if scroll:
            data.update(scroll_id=scroll_id, size=per_page)
        else:
            data.update(per_page=per_page, page=page, order=order, order_by=order_by)

        try:
            if scroll:
                page = -1
                scroll_id, total, results = search.scroll_search(q=q, **data)
                aggregations = None
            else:
                scroll_id = None
                total, results, aggregations = search.aggregate_search(q=q, **data)
        except KeyError as e:
            abort(400, str(e))

        return dict(
            pagination=dict(total=total, page=page, per_page=per_page),
            results=results,
            scroll_id=scroll_id,
            aggregations=aggregations), 200