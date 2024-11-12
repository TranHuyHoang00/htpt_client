import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { BaseQueryBuilder } from "@/lib/api-handler/builder/base-query-builder";
import {
  ExtractFnReturnType,
  QueryConfig,
} from "@/lib/api-handler/react-query";
import {
  ApiResultPagination,
  PaginationProps,
} from "@/lib/api-handler/type/api-query-types";
import { useQueryStore } from "@/stores/api-query/api-query";

export abstract class QueryBuilder<T> extends BaseQueryBuilder<T> {
  queryResult?: UseQueryResult<ApiResultPagination<T>>;

  fetch(
    {
      config,
      appendResult,
    }: { config?: QueryConfig<any>; appendResult?: boolean } = {
      appendResult: false,
    }
  ) {
    this.queryResult = useQuery<ExtractFnReturnType<any>>({
      ...config,
      queryKey: this.queryKey,
      queryFn: () => this.apiFetchData(),
      onSuccess: (data) => {
        const result = data?.response ?? [];
        if (this.setData)
          this.setData(appendResult ? [...this.data, ...result] : result);
      },
    });
    return this.queryResult;
  }

  async refetch() {
    await this.queryResult?.refetch();
    return this;
  }

  getTotalRecord(): number {
    return this.queryResult?.data?.metadata?.total_item ?? 10;
  }

  getPagination(): PaginationProps {
    return {
      ...(useQueryStore((state) => state.paginations[this.queryKey]) || {}),
      total: this.getTotalRecord(),
      showTotal: (total) => `Total ${total} items`,
    };
  }
}
