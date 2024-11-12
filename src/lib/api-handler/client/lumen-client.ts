import { ObjectAny } from "@/features/common/misc/types/common";
import { BaseClient } from "@/lib/api-handler/client/base-client";
import { SortDirectionEnum } from "@/lib/api-handler/type/api-query-types";
import { useQueryStore } from "@/stores/api-query/api-query";

export class LumenClient extends BaseClient {
  constructor(key: string) {
    super(
      useQueryStore.getState().getFilters(key) ?? [],
      useQueryStore.getState().getSorts(key) ?? [],
      useQueryStore.getState().getParams(key) ?? {},
      useQueryStore.getState().getPagination(key) ?? {},
      useQueryStore.getState().getRelation(key) ?? [],
      useQueryStore.getState().getSearchJoin(key)
    );
  }
  getFilterQuery(): ObjectAny {
    const searchArray: string[] = [];
    const searchFields: string[] = [];
    this.filters
      .filter((n) => n && n.key && n.value !== undefined)
      .forEach((filter) => {
        searchArray.push(`${filter.key}:${filter.value}`);
        searchFields.push(`${filter.key}:${filter.type}`);
      });

    if (searchArray.length > 0) {
      return {
        search: searchArray.join(";"),
        search_fields: searchFields.join(";"),
        search_join: this.searchJoin,
      };
    }
    return {};
  }
  getPaginationQuery(): { [key: string]: string | number } {
    return {
      page: this.pagination?.current ?? 1,
      per_page: this.pagination?.pageSize ?? 10,
    };
  }
  getRelationQuery(): ObjectAny {
    if (this.relations?.length ?? 0 > 0) {
      return {
        with: this.relations?.join(";"),
      };
    }
    return {};
  }
  getParamQuery(): { [key: string]: string | number } {
    const result: { [key: string]: string | number } = {};
    Object.entries(this.params)
      .filter((n) => n)
      .forEach(([, param]) => {
        result[param.field] = param.value;
      });

    return result;
  }

  getSortQuery(): { [key: string]: string } {
    const orderByArray: string[] = [];
    const sortedByArray: string[] = [];
    Object.entries(this.sorts)
      .filter((n) => n)
      .forEach(([, sort]) => {
        orderByArray.push(sort.field);
        sortedByArray.push(sort.direction ?? SortDirectionEnum.ASC);
      });
    if (orderByArray.length > 0) {
      return {
        order_by: orderByArray.join(";"),
        sorted_by: sortedByArray.join(";"),
      };
    }
    return {};
  }
}
