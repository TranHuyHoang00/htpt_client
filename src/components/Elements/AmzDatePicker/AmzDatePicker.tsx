import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd'
import { forwardRef, Ref } from 'react'

export type AmzDatePickerProps = DatePickerProps & {}

export const AmzDatePicker = forwardRef(({ ...props }: AmzDatePickerProps, ref: Ref<any>) => {
  return <AntdDatePicker ref={ref} {...props} />
})

AmzDatePicker.displayName = 'AmzDatePicker'
