import {
  PaginationsStore,
  PaginationStoreProps,
  QueriesStore,
} from "@/stores/api-query/type";

export const createPaginationSlice = (
  set: any,
  get: any,
  store: any
): PaginationsStore => ({
  paginations: {},
  getPagination: (key) => {
    return get().paginations[key] ?? getDefaultPagination();
  },
  setPage: (page: number, key) =>
    set((state: QueriesStore) => ({
      paginations: setPage(state.paginations, page, key),
    })),
  setPageSize: (page: number, key) =>
    set((state: QueriesStore) => ({
      paginations: setPageSize(state.paginations, page, key),
    })),
});

const getDefaultPagination = () => {
  return {
    current: 1,
    pageSize: 10,
  };
};
export const setPage = (
  paginations: PaginationStoreProps,
  page: number,
  key: string
) => {
  const paginationsClone = { ...paginations };
  if (!paginationsClone[key]) {
    paginationsClone[key] = getDefaultPagination();
  }
  paginationsClone[key]["current"] = page;
  return paginationsClone;
};

export const setPageSize = (
  paginations: PaginationStoreProps,
  page: number,
  key: string
) => {
  const paginationsClone = { ...paginations };
  if (!paginationsClone[key]) {
    paginationsClone[key] = getDefaultPagination();
  }
  paginationsClone[key]["pageSize"] = page;

  return paginationsClone;
};
