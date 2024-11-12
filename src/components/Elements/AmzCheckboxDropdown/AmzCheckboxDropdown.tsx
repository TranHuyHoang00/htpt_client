import { Checkbox } from 'antd'
import { isArray } from 'lodash'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa6'

import { AmzPopover } from '@/components/Elements/AmzPopover'

type CheckboxOption = { value: any | bigint; label: React.ReactNode | string }
interface CheckboxMenuProps {
  value?: string[]
  options: CheckboxOption[]
  onChange: (selection: any[]) => void
  formatChildren?: (selectedItems: any[]) => string | React.ReactNode
}

export const AmzCheckboxDropdown: FC<CheckboxMenuProps> = ({ value = [], options, onChange, formatChildren }) => {
  const [selectedItems, setSelectedItems] = useState<any[]>(value)

  useEffect(() => {
    setSelectedItems(value)
  }, [value])

  const handleOnChange = (selection: any[]) => {
    setSelectedItems(selection)
    onChange(selection)
  }
  const getSelectedData = (selectedData: any) => {
    if (isArray(selectedData)) {
      return selectedData
    }
    return [selectedData]
  }
  const getFormattedItems = useCallback(() => {
    if (formatChildren) return formatChildren(getSelectedData(selectedItems))
    return ''
  }, [selectedItems])

  return (
    <AmzPopover
      content={
        <Checkbox.Group onChange={handleOnChange} value={selectedItems}>
          <div className={'grid grid-cols-4'}>
            {options?.map((option: CheckboxOption) => (
              //@ts-ignore
              <Checkbox key={option.value ?? ''} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </div>
        </Checkbox.Group>
      }
      trigger="click"
      placement="bottomLeft"
    >
      {formatChildren ? (
        getFormattedItems()
      ) : (
        <div>
          {getSelectedData(selectedItems)?.length > 0
            ? `${getSelectedData(selectedItems)?.length} option${getSelectedData(selectedItems)?.length > 1 ? 's' : ''} applied`
            : 'Option'}{' '}
          <FaFilter />
        </div>
      )}
    </AmzPopover>
  )
}

AmzCheckboxDropdown.displayName = 'AmzColor'
