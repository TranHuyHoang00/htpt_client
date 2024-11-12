import { ObjectAny } from '@/features/common/misc/types/common'
import { FilterProps, PaginationProps, ParamProps, SearchJoinTypeEnum, SortsProps } from '@/lib/api-handler/type/api-query-types'

export abstract class BaseClient {
  filters: FilterProps[] = []
  sorts: { [key: string]: SortsProps } = {}
  pagination?: PaginationProps = {}
  relations?: string[] = []
  params: { [key: string]: ParamProps } = {}
  searchJoin: SearchJoinTypeEnum

  abstract getFilterQuery(): ObjectAny
  abstract getPaginationQuery(): ObjectAny
  abstract getSortQuery(): ObjectAny
  abstract getRelationQuery(): ObjectAny
  abstract getParamQuery(): ObjectAny

  protected constructor(
    filters: FilterProps[],
    sorts: { [key: string]: SortsProps },
    params: { [key: string]: ParamProps },
    pagination?: PaginationProps,
    relations?: string[],
    searchJoin: SearchJoinTypeEnum = SearchJoinTypeEnum.OR,
  ) {
    this.filters = filters
    this.sorts = sorts
    this.pagination = pagination
    this.relations = relations
    this.searchJoin = searchJoin
    this.params = params
  }
}
