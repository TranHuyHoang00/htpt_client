import { useEffect, useState } from 'react'

import { AmzSelect } from '@/components/Elements/AmzSelect'
import { DataTypeFilter } from '@/components/Functions/AmzGridFilters/type'
import { FilterTypes } from '@/lib/api-handler/type/api-query-types'
type FilterTypeProps = {
  value: FilterTypes
  label: string
}
const filterStringOptions: FilterTypeProps[] = [
  {
    value: FilterTypes.LIKE,
    label: 'Contain',
  },
  {
    value: FilterTypes.EQUAL,
    label: 'Is',
  },
  {
    value: FilterTypes.NOT_EQUAL,
    label: 'Is not',
  },
]

const filterNumberOptions: FilterTypeProps[] = [
  {
    value: FilterTypes.GREATER,
    label: 'Greater',
  },
  {
    value: FilterTypes.LESS,
    label: 'Less',
  },
  {
    value: FilterTypes.EQUAL,
    label: 'Equal',
  },
]

const filterDateTimeOptions: FilterTypeProps[] = [
  {
    value: FilterTypes.GREATER,
    label: 'Greater',
  },
  {
    value: FilterTypes.LESS,
    label: 'Less',
  },
  {
    value: FilterTypes.EQUAL,
    label: 'Equal',
  },
  {
    value: FilterTypes.BETWEEN,
    label: 'Between',
  },
]
const filterOptionListOptions: FilterTypeProps[] = [
  {
    value: FilterTypes.EQUAL,
    label: 'Is',
  },
  {
    value: FilterTypes.IN,
    label: 'In',
  },
]

const filterOptionOptions: FilterTypeProps[] = [
  {
    value: FilterTypes.EQUAL,
    label: 'Is',
  },
  {
    value: FilterTypes.NOT_EQUAL,
    label: 'Is Not',
  },
]

export type AmzGridFiltersTypeProps = {
  type?: DataTypeFilter
  value?: string
  onChange?: (newValue?: string, oldValue?: string) => void
}

export const AmzGridFiltersCompareType = ({ type = 'string', value, onChange }: AmzGridFiltersTypeProps) => {
  const triggerChange = (changedValue?: string, oldValue?: string) => {
    onChange?.(changedValue, oldValue)
  }
  const [typeValue, setTypeValue] = useState(value)
  const handleOnChange = (newValue?: string) => {
    const oldValue = typeValue
    if (newValue != typeValue) {
      setTypeValue(newValue)
    }
    triggerChange(newValue, oldValue)
  }
  const [selectionOption, setSelectionOption] = useState<{ value: string; label: string }[]>([])
  useEffect(() => {
    handleOnChange(value)
  }, [value])
  useEffect(() => {
    if (type === 'string') {
      setSelectionOption(filterStringOptions)
    } else if (type === 'number') {
      setSelectionOption(filterNumberOptions)
    } else if (type === 'date') {
      setSelectionOption(filterDateTimeOptions)
    } else if (type === 'option_list') {
      setSelectionOption(filterOptionListOptions)
    } else {
      setSelectionOption(filterOptionOptions)
    }
  }, [type])
  if (type === 'search') return <></>
  return (
    <AmzSelect
      value={typeValue}
      onChange={handleOnChange}
      className={'w-40'}
      placeholder={'Click to select'}
      size={'middle'}
      options={selectionOption}
    />
  )
}
