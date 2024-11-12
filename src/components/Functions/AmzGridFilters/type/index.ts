import { ReactNode } from 'react'

import { AmzColumnFilter, AmzColumnType } from '@/components/Elements/AmzTable/type'
export type DataTypeFilter = 'string' | 'number' | 'date' | 'search' | 'option' | 'option_list' | 'boolean'
export type GridFilterColumn = AmzColumnFilter & {
  key?: AmzColumnType<any>['key']
  title: AmzColumnType<any>['title']
}
export type GridFilterProps = {
  queryKey: string
  onApplyFilter: () => void
  columns: GridFilterColumn[]
  /**
   * Set true if you want unique field
   */
  uniqueField?: boolean
  children?: ReactNode
  className?: string
}
