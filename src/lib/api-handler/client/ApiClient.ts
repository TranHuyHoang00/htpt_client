import { QueryKey, useQuery } from 'react-query'

import { QueryBuilderV2 } from '../query-builder/QueryBuilderV2'
import { ExtractFnReturnType, QueryConfig } from '../react-query'

export abstract class ApiClient {
  protected queryKeys: string | string[] = ''
  public queryBuilder = new QueryBuilderV2()

  /**
   *
   * @param queryKeys
   */
  constructor(queryKeys: string | string[]) {
    this.queryKeys = queryKeys
  }

  /**
   *
   * @param param0
   */
  abstract api({ queryKey }: { queryKey: QueryKey }): any

  /**
   *
   * @param config
   * @returns
   */
  public fetch(config?: QueryConfig<typeof this.api>) {
    return useQuery<ExtractFnReturnType<typeof this.api>>({
      queryKey: this.queryKeys,
      queryFn: (context) => this.api(context),
      ...config,
    })
  }
}
