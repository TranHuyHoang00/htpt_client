import { SearchJoinTypeEnum } from '../type/api-query-types'
import { CompareTypeEnum } from '../type/CompareTypeEnum'

export type SearchProps = {
  field: string
  value: string
  operator?: CompareTypeEnum
}

/**
 * Search builder for api criteria
 */
export class SearchBuilder {
  protected searchProps: SearchProps[] = []

  protected searchJoinType: SearchJoinTypeEnum = SearchJoinTypeEnum.AND

  /**
   *
   * @param search
   */
  public setSearch(search: SearchProps) {
    const foundIdx = this.searchProps?.findIndex((item) => {
      return item.field == search.field && item.operator == search.operator
    })

    // Default compare type on set search
    search.operator = search.operator ?? CompareTypeEnum.LIKE

    if (foundIdx >= 0) {
      this.searchProps[foundIdx] = search
    } else {
      this.searchProps.push(search)
    }
  }

  /**
   *
   * @param field
   * @param startValue
   * @param toValue
   */
  public setSearchBetween(field: string, startValue: string, toValue: string) {
    this.setSearch({
      field: field,
      value: `${startValue},${toValue}`,
      operator: CompareTypeEnum.BETWEEN,
    })
  }

  /**
   *
   * @param {*} relation
   * @param {*} value
   * @param {*} operator
   */
  public setRelationSearch(relation: string, field: string, value: string, operator: CompareTypeEnum) {
    const searchField = `${relation}.${field}`
    this.setSearch({
      field: searchField,
      value: value,
      operator: operator,
    })
  }

  /**
   *
   * @param key
   * @param operator
   */
  public removeSearch(key: string, operator: CompareTypeEnum = CompareTypeEnum.LIKE) {
    const foundIdx = this.searchProps?.findIndex((item) => {
      return item.field == key && item.operator == operator
    })

    if (foundIdx >= 0) {
      this.searchProps.splice(foundIdx, 1)
    }
  }

  /**
   *
   */
  public clearSearch() {
    this.searchProps = []
  }

  /**
   *
   * @param joinType
   */
  public setSearchJoinType(joinType: SearchJoinTypeEnum) {
    this.searchJoinType = joinType
  }

  /**
   *
   * @returns
   */
  public build() {
    const searchValues: string[] = []
    const searchConditions: string[] = []

    this.searchProps?.forEach((s) => {
      searchValues.push(`${s.field}:${s.value}`)
      searchConditions.push(`${s.field}:${s.operator}`)
    })

    if (searchValues?.length > 0) {
      return {
        search: searchValues?.join(';'),
        search_fields: searchConditions?.join(';'),
      }
    }

    return {}
  }
}
