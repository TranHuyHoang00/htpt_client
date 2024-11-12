import { ColumnType } from 'antd/es/table'
import { Key, SortOrder } from 'antd/es/table/interface'
import React from 'react'

import { DataTypeFilter } from '@/components/Functions/AmzGridFilters'

export type OptionFilter = {
  value: Key
  label: string | React.ReactNode
}

export type AmzColumnFilter = {
  keyFilter?: string
  isAllowToFilter?: boolean
} & (
  | {
      typeFilter?: Exclude<DataTypeFilter, 'option' | 'option_list'>
      optionFilter?: never
    }
  | {
      typeFilter: 'option_list' | 'option'
      optionFilter: OptionFilter[]
    }
)
export type AmzColumnSort = {
  keySort?: string
}
export type AmzColumnType<T> = ColumnType<T> & AmzColumnFilter & AmzColumnSort

export type AmzSorterResult<RecordType> = {
  column?: AmzColumnType<RecordType>
  order?: SortOrder
  field?: Key | readonly Key[]
  columnKey?: Key
}
export const FilterSearchType = 'search'
