import { SortDirectionEnum } from '../type/SortDirectionEnum'

export type CustomSortProps = {
  field: string
  direction: SortDirectionEnum
}

/**
 * Custom sorts
 */
export class CustomSortBuilder {
  protected sorts: CustomSortProps[] = []

  public setCustomSort(sort: CustomSortProps) {
    const idx = this.sorts?.findIndex((customSort) => {
      return customSort?.field === sort?.field
    })

    if (idx != -1) {
      this.sorts[idx] = sort
    } else {
      this.sorts.push(sort)
    }
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
        customSortBy: orderBy.join(';'),
        customSortedBy: direction?.join(';'),
      }
    }

    return {}
  }
}
