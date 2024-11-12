import { InfiniteData, useInfiniteQuery } from "react-query";
import { UseInfiniteQueryResult } from "react-query/types/react/types";
import { BaseQueryBuilder } from "@/lib/api-handler/builder/base-query-builder";
import {
  ExtractFnReturnType,
  InfinityQueryConfig,
} from "@/lib/api-handler/react-query";
import { ApiResultPagination } from "@/lib/api-handler/type/api-query-types";

export abstract class InfinityQueryBuilder<T> extends BaseQueryBuilder<T> {
  test: number = 1;
  queryResult?: UseInfiniteQueryResult<ApiResultPagination<T>>;

  fetch({ config }: { config?: InfinityQueryConfig<any> } = {}) {
    this.queryResult = useInfiniteQuery<ExtractFnReturnType<any>>({
      ...config,
      queryKey: [this.queryKey],
      queryFn: ({ pageParam }) => {
        return this.apiFetchData({ page: pageParam });
      },
      onSuccess: (data: InfiniteData<ApiResultPagination<T>>) => {
        if (this.setData)
          this.setData(data.pages.map((item) => item.data).flat());
      },
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.meta.current_page < lastPage?.meta.last_page) {
          return lastPage.meta.current_page + 1;
        }
        return null;
      },
      cacheTime: 0,
    });
    return this.queryResult;
  }

  async refetch() {
    await this.queryResult?.refetch();
    return this;
  }
}
