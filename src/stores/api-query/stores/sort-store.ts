import { SortProps } from '@/lib/api-handler/type/api-query-types'
import { SortsStore, SortStoreProps, QueriesStore } from '@/stores/api-query/type'
export const createSortSlice = (set: any, get: any, store: any): SortsStore => ({
  sorts: {},
  getSorts: (key) => {
    return get().sorts[key] ?? {}
  },
  addSort: (sort: SortProps, key) =>
    set((state: QueriesStore) => ({
      sorts: addSort(state.sorts, sort, key),
    })),
  removeSort: (sortKey: string, key) =>
    set((state: QueriesStore) => ({
      sorts: removeSort(state.sorts, sortKey, key),
    })),
  removeAllSort: (key) =>
    set((state: QueriesStore) => ({
      sorts: removeAllSort(state.sorts, key),
    })),
})

export const addSort = (sorts: SortStoreProps, sort: SortProps, key: string) => {
  const sortsClone = { ...sorts }
  if (!sortsClone[key]) {
    sortsClone[key] = {}
  }
  sortsClone[key][sort.field] = sort

  return sortsClone
}

export const removeSort = (sorts: SortStoreProps, sortKey: string, key: string) => {
  const sortsClone = { ...sorts }
  delete sortsClone[key][sortKey]
  return sortsClone
}
export const removeAllSort = (sorts: SortStoreProps, key: string) => {
  const sortsClone = { ...sorts }
  sortsClone[key] = {}
  return sortsClone
}
