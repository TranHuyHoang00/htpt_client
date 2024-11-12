import { RelationsStore, RelationStoreProps, QueriesStore } from '@/stores/api-query/type'
export const createRelationSlice = (set: any, get: any, store: any): RelationsStore => ({
  relations: {},
  getRelation: (key) => {
    return get().relations[key] ?? {}
  },
  addRelation: (relation: string, key) =>
    set((state: QueriesStore) => ({
      relations: addRelation(state.relations, relation, key),
    })),
  removeRelation: (relationKey: string, key) =>
    set((state: QueriesStore) => ({
      relations: removeRelation(state.relations, relationKey, key),
    })),
  removeAllRelation: (key) =>
    set((state: QueriesStore) => ({
      relations: removeAllRelation(state.relations, key),
    })),
})

export const addRelation = (relations: RelationStoreProps, relation: string, key: string) => {
  const relationsClone = { ...relations }
  if (!relationsClone[key]) {
    relationsClone[key] = []
  }
  relationsClone[key].push(relation)
  relationsClone[key] = [...new Set(relationsClone[key])]

  return relationsClone
}

export const removeRelation = (relations: RelationStoreProps, relationKey: string, key: string) => {
  const relationsClone = { ...relations }
  relationsClone[key] = relationsClone[key].filter((item) => item !== relationKey)
  return relationsClone
}
export const removeAllRelation = (relations: RelationStoreProps, key: string) => {
  const relationsClone = { ...relations }
  relationsClone[key] = []
  return relationsClone
}
