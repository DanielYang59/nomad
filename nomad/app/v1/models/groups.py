from typing import List, Optional, Set

from pydantic import BaseModel, Field, root_validator, validator

from .pagination import Direction, Pagination, PaginationResponse

group_name_description = 'Name of the group.'
group_members_description = 'User ids of the group members.'


class UserGroupEdit(BaseModel):
    group_name: Optional[str] = Field(
        default=None,
        description=group_name_description,
        min_length=3,
        max_length=32,
        regex=r'^[a-zA-Z0-9][a-zA-Z0-9 ._\-]+[a-zA-Z0-9]$',
    )
    members: Optional[Set[str]] = Field(
        default=None, description=group_members_description
    )


class UserGroup(BaseModel):
    group_id: str = Field(description='Unique id of the group.')
    group_name: str = Field(
        default='Default Group Name', description=group_name_description
    )
    owner: str = Field(description='User id of the group owner.')
    members: List[str] = Field(
        default_factory=list, description=group_members_description
    )

    class Config:
        orm_mode = True


class UserGroupResponse(BaseModel):
    pagination: Optional[PaginationResponse] = Field(None)
    data: List[UserGroup]


class UserGroupQuery(BaseModel):
    group_id: Optional[List[str]] = Field(
        None, description='Search groups by their full id.'
    )
    user_id: Optional[str] = Field(
        None, description='Search groups by their owner or members ids.'
    )
    search_terms: Optional[str] = Field(
        None, description='Search groups by parts of their name.'
    )


class UserGroupPagination(Pagination):
    @validator('order_by')
    def validate_order_by(cls, order_by):  # pylint: disable=no-self-argument
        valid_fields = (None, 'group_id', 'group_name', 'owner')
        assert order_by in valid_fields, f'order_by must be one of {valid_fields}'
        return order_by

    def order_result(self, result):
        if self.order_by is None:
            return result

        prefix: str = '-' if self.order == Direction.desc else '+'
        order_list: list = [f'{prefix}{self.order_by}', 'group_id']

        return result.order_by(*order_list)
