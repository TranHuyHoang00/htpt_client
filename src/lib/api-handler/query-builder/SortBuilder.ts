import { SortDirectionEnum } from '../type/SortDirectionEnum'

export type SortProps = {
  field: string
  direction: SortDirectionEnum
}
export class SortBuilder {
  protected sorts: SortProps[] = []

  public setSort(sortProps: SortProps) {
    this.sorts.push(sortProps)
  }

  /**
   *
   * @returns
   */
  public build() {
    const orderBy: string[] = []
    const direction: string[] = []

    this.sorts?.forEach((sort) => {
      orderBy.push(sort.field)
      direction.push(sort.direction)
    })

    if (orderBy?.length > 0) {
      return {
        order_by: orderBy.join(';'),
        sorted_by: direction?.join(';'),
      }
    }

    return {}
  }
}
