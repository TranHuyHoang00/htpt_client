import { Select as AntdSelect, SelectProps } from 'antd'
import clsx from 'clsx'
import { BaseSelectRef } from 'rc-select'
import { forwardRef, Ref } from 'react'
import './style.css'

export type AmzSelectProps = SelectProps

export const AmzSelect = forwardRef(({ className, ...props }: AmzSelectProps, ref: Ref<BaseSelectRef>) => {
  return <AntdSelect ref={ref} className={clsx('', className)} {...props} />
})

AmzSelect.displayName = 'AmzSelect'
