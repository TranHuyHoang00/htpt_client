import { FilterProps, PaginationProps, ParamProps, SearchJoinTypeEnum, SortProps } from '@/lib/api-handler/type/api-query-types'
export type FilterStoreProps = { [key: string]: FilterProps[] }
export type SearchJoinStoreProps = { [key: string]: SearchJoinTypeEnum }
export type FiltersStore = {
  filters: FilterStoreProps
  searchJoins: SearchJoinStoreProps
  getFilters: (key: string) => FilterProps[]
  setFilters: (key: string, filters: FilterProps[]) => void
  setSearchJoin: (key: string, searchJoin: SearchJoinTypeEnum) => void
  getSearchJoin: (key: string) => SearchJoinTypeEnum
  addFilter: (filter: FilterProps, key: string) => void
  removeFilter: (filterKey: string, key: string) => void
  removeAllFilter: (key: string) => void
}

export type PaginationStoreProps = { [key: string]: PaginationProps }
export type PaginationsStore = {
  paginations: PaginationStoreProps
  getPagination: (key: string) => PaginationProps
  setPage: (page: number, key: string) => void
  setPageSize: (pageSize: number, key: string) => void
}

export type QueriesStore = FiltersStore & PaginationsStore & SortsStore & RelationsStore & ParamsStore

export type SortStoreProps = { [key: string]: { [key: string]: SortProps } }

export type SortsStore = {
  sorts: SortStoreProps
  getSorts: (key: string) => { [key: string]: SortProps }
  addSort: (sort: SortProps, key: string) => void
  removeSort: (sortKey: string, key: string) => void
  removeAllSort: (key: string) => void
}
export type RelationStoreProps = { [key: string]: string[] }
export type RelationsStore = {
  relations: RelationStoreProps
  getRelation: (key: string) => string[]
  addRelation: (relation: string, key: string) => void
  removeRelation: (relation: string, key: string) => void
  removeAllRelation: (key: string) => void
}

export type ParamStoreProps = { [key: string]: { [key: string]: ParamProps } }

export type ParamsStore = {
  params: ParamStoreProps
  getParams: (key: string) => { [key: string]: ParamProps }
  addParam: (param: ParamProps, key: string) => void
  removeParam: (paramKey: string, key: string) => void
  removeAllParam: (key: string) => void
}
