import { FilterProps, FilterTypes, SearchJoinTypeEnum } from '@/lib/api-handler/type/api-query-types'
import { FiltersStore, FilterStoreProps, QueriesStore, SearchJoinStoreProps } from '@/stores/api-query/type'

export const createFilterSlice = (set: any, get: any): FiltersStore => ({
  filters: {},
  searchJoins: {},
  getFilters: (key) => {
    return removeDuplicateFilter(get().filters[key] ?? [])
  },
  getSearchJoin: (key) => {
    return get().searchJoins[key] ?? SearchJoinTypeEnum.OR
  },
  setFilters: (key, value: FilterProps[]) =>
    set((state: QueriesStore) => ({
      filters: setFilter(state.filters, value, key),
    })),
  setSearchJoin: (key, value: SearchJoinTypeEnum) =>
    set((state: QueriesStore) => ({
      searchJoins: setSearchJoin(state.searchJoins, value, key),
    })),
  addFilter: (filter: FilterProps, key) =>
    set((state: QueriesStore) => ({
      filters: addFilter(state.filters, filter, key),
    })),
  removeFilter: (filterKey: string, key) =>
    set((state: QueriesStore) => ({
      filters: removeFilter(state.filters, filterKey, key),
    })),
  removeAllFilter: (key) =>
    set((state: QueriesStore) => ({
      filters: removeAllFilter(state.filters, key),
    })),
})

export const setFilter = (filters: FilterStoreProps, filterValues: FilterProps[], key: string) => {
  const filtersClone = { ...filters }
  filtersClone[key] = filterValues

  return filtersClone
}
export const setSearchJoin = (searchJoins: SearchJoinStoreProps, searchJoin: SearchJoinTypeEnum, key: string) => {
  const searchJoinsClone = { ...searchJoins }
  searchJoinsClone[key] = searchJoin

  return searchJoinsClone
}
export const addFilter = (filters: FilterStoreProps, filter: FilterProps, key: string) => {
  const filtersClone = { ...filters }
  if (!filtersClone[key]) {
    filtersClone[key] = []
  }
  if (filtersClone[key].find((item) => item.key === filter.key)) {
  }
  if (!filter.type) {
    //Add default compare type
    filter.type = FilterTypes.EQUAL
  }
  filtersClone[key].push(filter)

  return filtersClone
}

export const removeFilter = (filters: FilterStoreProps, filterKey: string, key: string) => {
  const filtersClone = { ...filters }
  if (filtersClone[key]) {
    filtersClone[key] = filtersClone[key]?.filter((item) => item.key !== filterKey)
  }
  return filtersClone
}
export const removeAllFilter = (filters: FilterStoreProps, key: string) => {
  const filtersClone = { ...filters }
  filtersClone[key] = []
  return filtersClone
}
export const removeDuplicateFilter = (filters: FilterProps[]) => {
  const jsonObject = filters.map((item) => JSON.stringify(item))
  const uniqueSet = new Set(jsonObject)
  return Array.from(uniqueSet).map((item) => JSON.parse(item))
}
