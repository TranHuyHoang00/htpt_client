import { SearchJoinTypeEnum } from '../type/SearchJoinTypeEnum'

import { BaseBuilder } from './BaseBuilder'
import { CustomQueryBuilder } from './CustomQueryBuilder'
import { PaginationBuilder } from './PaginationBuilder'
import { RelationBuilder } from './RelationBuilder'
import { SearchBuilder, SearchProps } from './SearchBuilder'
import { SortBuilder, SortProps } from './SortBuilder'

export class QueryBuilderV2 extends BaseBuilder {
  // protected queryKey: string | string[] = ''
  protected searchJoin: SearchJoinTypeEnum = SearchJoinTypeEnum.AND

  /**
   * Builders
   */
  public searchBuilder = new SearchBuilder()
  public sortBuilder = new SortBuilder()
  public paginationBuilder = new PaginationBuilder()
  public customQueryBuilder = new CustomQueryBuilder()
  public relationBuilder = new RelationBuilder()

  /**
   * Constructor
   * @param queryKey
   */
  // constructor(queryKey: string | string[]) {
  //   super()
  //   // this.queryKey = queryKey
  // }

  /**
   *
   * @param searchProps
   */
  public setSearch(searchProps: SearchProps) {
    this.searchBuilder.setSearch(searchProps)

    return this
  }

  /**
   *
   * @param sortProps
   */
  public setSort(sortProps: SortProps) {
    this.sortBuilder.setSort(sortProps)

    return this
  }

  /**
   * Build
   */
  public build() {
    return {
      ...this.searchBuilder.build(),
      ...this.sortBuilder.build(),
      ...this.paginationBuilder.build(),
      ...this.customQueryBuilder.build(),
      ...this.relationBuilder.build(),
      search_join: this.searchJoin,
    }
  }

  public reset() {
    this.searchBuilder = new SearchBuilder()
    this.sortBuilder = new SortBuilder()
    this.paginationBuilder = new PaginationBuilder()
    this.customQueryBuilder = new CustomQueryBuilder()
    this.relationBuilder = new RelationBuilder()

    return this
  }
}
