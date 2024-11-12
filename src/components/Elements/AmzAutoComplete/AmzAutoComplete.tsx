import { AutoComplete as AntdAutoComplete, AutoCompleteProps } from 'antd'
import { BaseSelectRef } from 'rc-select'
import { forwardRef, Ref } from 'react'

export type AmzAutoCompleteProps = AutoCompleteProps & {}

export const AmzAutoComplete = forwardRef(({ ...props }: AmzAutoCompleteProps, ref: Ref<BaseSelectRef>) => {
  return <AntdAutoComplete ref={ref} {...props} />
})
AmzAutoComplete.displayName = 'AmzAutoComplete'
