import { Form } from 'antd'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'

import { AmzButton } from '@/components/Elements/AmzButton'
import { AmzFlex } from '@/components/Elements/AmzFlex'
import { AmzForm } from '@/components/Elements/AmzForm'
import { AmzFormItem } from '@/components/Elements/AmzForm/AmzFormItem'
import { AmzFormList } from '@/components/Elements/AmzForm/AmzFormList'
import { AmzInput } from '@/components/Elements/AmzInput'
import { AmzPopover } from '@/components/Elements/AmzPopover'
import { AmzSelect } from '@/components/Elements/AmzSelect'
import { AmzTitle } from '@/components/Elements/AmzTitle'
import { AmzGridFiltersCompareType } from '@/components/Functions/AmzGridFilters/AmzGridFiltersCompareType'
import { AmzGridFiltersValue } from '@/components/Functions/AmzGridFilters/AmzGridFiltersValue'
import { DataTypeFilter, GridFilterColumn, GridFilterProps } from '@/components/Functions/AmzGridFilters/type'
import { FilterProps, FilterTypes } from '@/lib/api-handler/type/api-query-types'
import { useQueryStore } from '@/stores/api-query/api-query'

type CompareTypeProps = { [key: number]: FilterTypes }
export const AmzGridFilters = ({
  onApplyFilter,
  columns,
  queryKey,
  uniqueField = false,
  children,
  className = '',
}: GridFilterProps) => {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState<FilterProps[]>([])
  const queryStore = useQueryStore()
  const defaultFilters = useQueryStore((state) => state.filters)
  const [filtersColumn, setFiltersColumn] = useState<GridFilterColumn[]>([])
  const [allowFilterColumns, setAllowFilterColumns] = useState<{ value: string; label: string; type?: DataTypeFilter }[]>([])
  const [compareType, setCompareType] = useState<CompareTypeProps>({})
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  useEffect(() => {
    const defaultFilters: FilterProps[] = []
    const defaultFiltersColumn: GridFilterColumn[] = []
    const defaultCompareType: CompareTypeProps = {}
    const allowFilterColumnsData = columns
      .filter((item) => item.isAllowToFilter)
      .map((item) => {
        return {
          value: item?.keyFilter ?? item.key?.toString() ?? '',
          label: item.title?.toString() ?? '',
          type: item.typeFilter,
        }
      })
    let keyFilter: number = 0
    Object.entries(queryStore.getFilters(queryKey)).forEach(([, value]) => {
      if (allowFilterColumnsData.find((item) => item.value === value.key)) {
        defaultFilters.push(value)
        const column = getColumnDataByKey(value.key)
        if (column !== undefined) defaultFiltersColumn[keyFilter] = column
        defaultCompareType[keyFilter] = value.type ?? FilterTypes.EQUAL
        keyFilter++
      }
    })
    setFilters(defaultFilters)
    setFiltersColumn(defaultFiltersColumn)
    setCompareType(defaultCompareType)
    setAllowFilterColumns(allowFilterColumnsData)
    if (open) {
      form.setFieldsValue({ filters: filters })
    }
  }, [columns, defaultFilters, open])

  const [form] = Form.useForm()
  // useEffect(() => {
  //   if (open) {
  //   }
  // }, [open])

  const applyFilter = async () => {
    await form.validateFields({ recursive: true }).then(() => {
      const currentFilters = form.getFieldValue('filters')
      if (!isEqual(currentFilters, filters)) {
        setFilters(currentFilters)
        handleFilters(currentFilters)
        onApplyFilter()
      }
      setOpen(false)
    })
  }
  const handleFilters = (filters: FilterProps[]) => {
    allowFilterColumns.forEach((item) => {
      queryStore.removeFilter(item.value, queryKey)
    })
    if (filters && filters.length > 0) {
      filters.forEach((item) => {
        if (item.data_type === 'date') {
          if (item.value instanceof dayjs) {
            //@ts-ignore
            item.value = item.value.format('YYYY-MM-DD')
          }
          if (Array.isArray(item.value)) {
            item.value = item.value.map((date) => {
              if (date instanceof dayjs) {
                //@ts-ignore
                return date.format('YYYY-MM-DD')
              }
              return date
            })
          }
        }
        queryStore.addFilter(item, queryKey)
      })
    }
  }
  const getAllowFilter = (name: number) => {
    return uniqueField
      ? allowFilterColumns.filter((item) => {
          const selectedOption = form.getFieldValue(['filters', name, 'name'])
          const selectedFilter =
            form
              .getFieldsValue()
              ?.filters.map((filter: any) => filter?.key)
              ?.filter((item: any) => !!item) ?? []
          return !selectedFilter.includes(item.value) || selectedOption === item.value
        })
      : allowFilterColumns
  }
  const getColumnDataByKey = (key: string) => {
    return columns.find((item) => item.keyFilter === key)
  }
  return (
    <div className={className}>
      <AmzPopover
        open={open}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
        content={
          <div className={'p-3 w-[750px]'}>
            <AmzTitle level={5}>Filters</AmzTitle>
            <p>Narrow down your list by applying filters below</p>
            <AmzForm className={''} form={form}>
              <AmzFormList name={'filters'}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => {
                      const selectedColumn = filtersColumn[name]
                      return (
                        <AmzFlex key={key} className={'gap-x-4 items-center'}>
                          <AmzFormItem
                            className={''}
                            {...restField}
                            name={[name, 'key']}
                            rules={[{ required: true, message: 'Column is required' }]}
                          >
                            <AmzSelect
                              className={'w-56'}
                              placeholder={'Click to select'}
                              size={'middle'}
                              onChange={(value, option) => {
                                const cloneFilterColumn = { ...filtersColumn }
                                const columnData = getColumnDataByKey(value)
                                if (columnData) cloneFilterColumn[name] = columnData

                                setFiltersColumn(cloneFilterColumn)
                                //@ts-ignore
                                form.setFieldValue(['filters', name, 'data_type'], option.type)
                                form.setFieldValue(['filters', name, 'value'], undefined)
                                form.setFieldValue(['filters', name, 'type'], undefined)
                              }}
                              options={getAllowFilter(name)}
                            />
                          </AmzFormItem>
                          {selectedColumn?.typeFilter !== 'search' && selectedColumn?.typeFilter !== 'boolean' && (
                            <AmzFormItem
                              className={'h-full'}
                              {...restField}
                              name={[name, 'type']}
                              rules={[{ required: true, message: 'Column is required' }]}
                            >
                              <AmzGridFiltersCompareType
                                onChange={(newValue, oldValue) => {
                                  if (selectedColumn?.typeFilter === 'date' && oldValue !== newValue && oldValue === 'between') {
                                    form.setFieldValue(['filters', name, 'value'], undefined)
                                  }
                                  setCompareType({ ...compareType, [name]: newValue as FilterTypes })
                                }}
                                type={selectedColumn?.typeFilter ?? 'string'}
                              />
                            </AmzFormItem>
                          )}
                          <AmzFormItem
                            className={'h-full min-w-[196px] max-w-[196px]'}
                            {...restField}
                            name={[name, 'value']}
                            rules={[{ required: true, message: 'Column is required' }]}
                          >
                            <AmzGridFiltersValue
                              compareType={compareType[name] ?? FilterTypes.EQUAL}
                              options={selectedColumn?.optionFilter ?? []}
                              type={selectedColumn?.typeFilter ?? 'string'}
                            />
                          </AmzFormItem>
                          <AmzFormItem name={[name, 'data_type']} noStyle>
                            <AmzInput type="hidden" />
                          </AmzFormItem>
                          <div className={'cursor-pointer text-primary-500 mb-6'} onClick={() => remove(name)}>
                            Delete{' '}
                          </div>
                        </AmzFlex>
                      )
                    })}
                    <AmzFormItem className={'mb-0'}>
                      <div className={'cursor-pointer text-primary-500 inline-block'} onClick={() => add()}>
                        Add condition
                      </div>
                    </AmzFormItem>
                  </>
                )}
              </AmzFormList>
              <AmzFlex className={'mt-2 gap-x-2'}>
                <AmzButton
                  onClick={async () => {
                    await applyFilter()
                  }}
                  type={'primary'}
                >
                  Apply filter
                </AmzButton>
                <AmzButton
                  onClick={() => {
                    form.resetFields()
                    setFiltersColumn([])
                  }}
                  className={'text-primary-500'}
                  type={'default'}
                >
                  Clear filter
                </AmzButton>
              </AmzFlex>
            </AmzForm>
          </div>
        }
        trigger={['click']}
      >
        <div
          className={clsx(
            'flex cursor-pointer items-center justify-between w-full',
            filters?.length > 0 ? 'text-primary-500' : '',
          )}
        >
          <span className={''}>
            {filters?.length > 0 ? `${filters?.length} filter${filters?.length > 1 ? 's' : ''} applied` : 'Filter'}
          </span>
          {children}
        </div>
      </AmzPopover>
    </div>
  )
}
