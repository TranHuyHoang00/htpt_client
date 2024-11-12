import { TablePaginationConfig } from "antd";

import { DataTypeFilter } from "@/components/Functions/AmzGridFilters";

export enum FilterTypes {
  EQUAL = "=",
  LIKE = "like",
  ILIKE = "ilike",
  NOT_EQUAL = "!=",
  BETWEEN = "between",
  GREATER = ">",
  GREATER_OR_EQUAL = ">=",
  LESS = "<",
  LESS_OR_EQUAL = "<=",
  IN = "in",
}
export enum SearchJoinTypeEnum {
  OR = "or",
  AND = "and",
}

export enum SortDirectionEnum {
  DESC = "desc",
  ASC = "asc",
}

export type SortsProps = {
  field: string;
  direction?: SortDirectionEnum;
};

export type PaginationProps = TablePaginationConfig;

export type ApiResult<T> = {
  data: T;
};

export type ApiResultCollection<T> = {
  data: T[];
};

export type ApiResultPagination<T> = {
  data: T[];
  links: Links;
  meta: Meta;
  subject_data?: SubjectDataProps;
  //
  metadata: {
    total_item: number;
  };
};
export type SubjectDataProps = {
  [key: string]: string;
};
export interface Links {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}
export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  limit: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export type FilterProps = {
  key: string;
  value: any;
  type?: FilterTypes;
  data_type?: DataTypeFilter;
};

export type SortProps = {
  field: string;
  direction?: SortDirectionEnum;
};
export type ParamProps = {
  field: string;
  value: string | number;
};
export type ClientType = "lumen" | "drf";
