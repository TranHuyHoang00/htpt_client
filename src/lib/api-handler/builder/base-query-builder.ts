import { Dispatch, SetStateAction, useState } from "react";

import { ObjectAny } from "@/features/common/misc/types/common";
import { BaseClient } from "@/lib/api-handler/client/base-client";
import { LumenClient } from "@/lib/api-handler/client/lumen-client";
import {
  ApiResultPagination,
  ClientType,
  FilterProps,
  PaginationProps,
  ParamProps,
  SearchJoinTypeEnum,
  SortDirectionEnum,
  SortsProps,
} from "@/lib/api-handler/type/api-query-types";
import { useQueryStore } from "@/stores/api-query/api-query";

export abstract class BaseQueryBuilder<T> {
  queryKey: string;
  clientType: ClientType = "lumen";
  filters: { [key: string]: FilterProps } = {};
  sorts: { [key: string]: SortsProps } = {};
  pagination?: PaginationProps = {};
  setPagination?: Dispatch<SetStateAction<PaginationProps>>;
  data: any[] = [];
  setData?: Dispatch<SetStateAction<any[]>>;
  pageSize: number = 10;
  constructor(queryKey: string) {
    this.queryKey = queryKey;
    const [pagination, setPagination] = useState<PaginationProps>({
      current: 1,
      pageSize: this.pageSize,
      total: 0,
    });
    this.pagination = pagination;
    this.setPagination = setPagination;
    const [data, setData] = useState<any[]>([]);
    this.data = data;
    this.setData = setData;
  }

  abstract apiFetchData(props?: ObjectAny): Promise<ApiResultPagination<T>>;
  abstract fetch(): any;
  abstract refetch(): Promise<this>;

  addFilter(filter: FilterProps) {
    useQueryStore.getState().addFilter(filter, this.queryKey);
    return this;
  }
  removeFilter(key?: string) {
    if (key) {
      useQueryStore.getState().removeFilter(key, this.queryKey);
      return this;
    } else {
      useQueryStore.getState().removeAllFilter(this.queryKey);
    }
    return this;
  }
  addParam(param: ParamProps) {
    useQueryStore.getState().addParam(param, this.queryKey);
    return this;
  }
  removeParam(key?: string) {
    if (key) {
      useQueryStore.getState().removeParam(key, this.queryKey);
      return this;
    } else {
      useQueryStore.getState().removeAllParam(this.queryKey);
    }
    return this;
  }

  addRelation(relation: string) {
    useQueryStore.getState().addRelation(relation, this.queryKey);
    return this;
  }
  removeRelation(relation?: string) {
    if (relation) {
      useQueryStore.getState().removeRelation(relation, this.queryKey);
      return this;
    } else {
      useQueryStore.getState().removeAllRelation(this.queryKey);
    }
    return this;
  }

  addSort({ field, direction = SortDirectionEnum.ASC }: SortsProps) {
    useQueryStore.getState().addSort({ field, direction }, this.queryKey);
    return this;
  }
  removeSort(key?: string) {
    if (key) {
      useQueryStore.getState().removeSort(key, this.queryKey);
      return this;
    } else {
      useQueryStore.getState().removeAllSort(this.queryKey);
    }
    return this;
  }

  setPage(page?: number) {
    useQueryStore.getState().setPage(page ?? 1, this.queryKey);
    return this;
  }

  setPageSize(pageSize: number) {
    useQueryStore.getState().setPageSize(pageSize ?? 1, this.queryKey);
    return this;
  }

  setSearchJoin(searchJoin: SearchJoinTypeEnum) {
    useQueryStore.getState().setSearchJoin(this.queryKey, searchJoin);
    return this;
  }

  getClientQuery(): BaseClient {
    switch (this.clientType) {
      case "lumen":
      default:
        return new LumenClient(this.queryKey);
    }
  }

  getParamQuery() {
    const clientQuery = this.getClientQuery();
    return {
      ...clientQuery.getFilterQuery(),
      ...clientQuery.getPaginationQuery(),
      ...clientQuery.getSortQuery(),
      ...clientQuery.getRelationQuery(),
      ...clientQuery.getParamQuery(),
    };
  }
  getData() {
    return this.data;
  }
}
