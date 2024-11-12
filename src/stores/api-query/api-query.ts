import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import { createFilterSlice } from '@/stores/api-query/stores/filter-store'
import { createPaginationSlice } from '@/stores/api-query/stores/pagination-store'
import { createParamSlice } from '@/stores/api-query/stores/param-store'
import { createRelationSlice } from '@/stores/api-query/stores/relation-store'
import { createSortSlice } from '@/stores/api-query/stores/sort-store'
import { QueriesStore } from '@/stores/api-query/type'

export const useQueryStore = create<QueriesStore>(
  (set, get, store) => (
    subscribeWithSelector(() => ({ filters: true })),
    {
      ...createFilterSlice(set, get),
      ...createPaginationSlice(set, get, store),
      ...createSortSlice(set, get, store),
      ...createRelationSlice(set, get, store),
      ...createParamSlice(set, get),
    }
  ),
)
