import { ParamProps } from '@/lib/api-handler/type/api-query-types'
import { ParamsStore, ParamStoreProps, QueriesStore } from '@/stores/api-query/type'
export const createParamSlice = (set: any, get: any): ParamsStore => ({
  params: {},
  getParams: (key) => {
    return get().params[key] ?? {}
  },
  addParam: (param: ParamProps, key) =>
    set((state: QueriesStore) => ({
      params: addParam(state.params, param, key),
    })),
  removeParam: (paramKey: string, key) =>
    set((state: QueriesStore) => ({
      params: removeParam(state.params, paramKey, key),
    })),
  removeAllParam: (key) =>
    set((state: QueriesStore) => ({
      params: removeAllParam(state.params, key),
    })),
})

export const addParam = (params: ParamStoreProps, param: ParamProps, key: string) => {
  const paramsClone = { ...params }
  if (!paramsClone[key]) {
    paramsClone[key] = {}
  }
  paramsClone[key][param.field] = param

  return paramsClone
}

export const removeParam = (params: ParamStoreProps, paramKey: string, key: string) => {
  const paramsClone = { ...params }
  if (paramsClone[key] && paramsClone[key][paramKey]) delete paramsClone[key][paramKey]
  return paramsClone
}
export const removeAllParam = (params: ParamStoreProps, key: string) => {
  const paramsClone = { ...params }
  paramsClone[key] = {}
  return paramsClone
}
