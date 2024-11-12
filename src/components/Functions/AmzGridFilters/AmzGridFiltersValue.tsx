import dayjs, { Dayjs } from 'dayjs'
import { isString } from 'lodash'
import React, { useEffect, useState } from 'react'
import { BsListColumns } from 'react-icons/bs'

import { AmzCheckboxDropdown } from '@/components/Elements/AmzCheckboxDropdown'
import { AmzDatePicker } from '@/components/Elements/AmzDatePicker'
import { AmzRangePicker } from '@/components/Elements/AmzDatePicker/AmzRangePicker'
import { AmzFlex } from '@/components/Elements/AmzFlex'
import { AmzInput } from '@/components/Elements/AmzInput'
import { AmzInputNumber } from '@/components/Elements/AmzInput/AmzInputNumber'
import { AmzSelect } from '@/components/Elements/AmzSelect'
import { OptionFilter } from '@/components/Elements/AmzTable/type'
import { DataTypeFilter } from '@/components/Functions/AmzGridFilters/type'
import { FilterTypes } from '@/lib/api-handler/type/api-query-types'

export type AmzGridFiltersValueProps = {
  value?: any
  onChange?: (value: string) => void
  type?: DataTypeFilter
  options?: OptionFilter[]
  compareType?: string
}
export const AmzGridFiltersValue = ({ compareType, type = 'string', value, onChange, options }: AmzGridFiltersValueProps) => {
  const triggerChange = (changedValue: any) => {
    onChange?.(changedValue)
  }
  const [filterValue, setFilterValue] = useState(value)
  useEffect(() => {
    setFilterValue(value)
  }, [value])
  const handleOnChangeInput = (event: any) => {
    const newValue = event.target.value
    if (newValue != filterValue) {
      setFilterValue(newValue)
    }
    triggerChange(newValue)
  }

  const handleOnChangeSelect = (value: any) => {
    const newValue = value
    if (newValue != filterValue) {
      setFilterValue(newValue)
    }
    triggerChange(newValue)
  }

  const handleOnChangeDate = (newValue: any) => {
    if (newValue != filterValue) {
      setFilterValue(newValue)
    }
    triggerChange(newValue)
  }
  const handleOnChangeDateRange = (newValue: any) => {
    if (newValue != filterValue) {
      setFilterValue(newValue)
    }
    triggerChange(newValue)
  }
  const getDateRangeValue = (value: any): Dayjs[] => {
    if (Array.isArray(value)) {
      return value.map((item) => {
        return item === '' ? dayjs() : dayjs(item)
      })
    }
    return []
  }
  const getDateValue = (value: any) => {
    if (isString(value)) {
      return value === '' ? dayjs() : dayjs(value)
    }
    return value
  }
  switch (type) {
    case 'string':
    default:
      return (
        <AmzInput className={'w-full'} size={'small'} onChange={handleOnChangeInput} value={filterValue} placeholder="Value" />
      )
    case 'number':
      return (
        <AmzInputNumber
          className={'w-full'}
          size={'small'}
          onChange={handleOnChangeInput}
          value={filterValue}
          placeholder="Value"
        />
      )
    case 'date':
      return compareType !== FilterTypes.BETWEEN ? (
        <AmzDatePicker className={'w-full'} onChange={handleOnChangeDate} value={getDateValue(value)} placeholder="Value" />
      ) : (
        //@ts-ignore
        <AmzRangePicker className={'w-full'} onChange={handleOnChangeDateRange} value={getDateRangeValue(value)} />
      )
    case 'boolean':
      return (
        <AmzSelect
          className={'w-full'}
          size={'middle'}
          onChange={handleOnChangeSelect}
          value={filterValue}
          //@ts-ignore
          options={[
            { value: 1, label: 'True' },
            { value: 0, label: 'False' },
          ]}
        />
      )
    case 'option':
      return (
        <AmzSelect
          className={'w-full'}
          size={'middle'}
          onChange={handleOnChangeSelect}
          value={filterValue}
          //@ts-ignore
          options={options ?? []}
        />
      )

    case 'option_list':
      if (compareType === FilterTypes.EQUAL)
        return (
          <AmzSelect
            className={'w-full'}
            size={'middle'}
            onChange={handleOnChangeSelect}
            value={filterValue}
            //@ts-ignore
            options={options ?? []}
          />
        )
      else
        return (
          <div className={'w-full items-center bg-white border border-[#dedede] h-8'}>
            <AmzCheckboxDropdown
              onChange={async (values) => {
                handleOnChangeSelect(values as string[])
              }}
              formatChildren={(selectedItems) => {
                return (
                  <AmzFlex className={'justify-between items-center px-2 h-full w-full cursor-pointer'}>
                    {selectedItems?.length > 0
                      ? `${selectedItems?.length} column${selectedItems?.length > 1 ? 's' : ''} selected`
                      : 'Option'}{' '}
                    <BsListColumns />
                  </AmzFlex>
                )
              }}
              value={filterValue}
              options={options ?? []}
            />
          </div>
        )
  }
}
