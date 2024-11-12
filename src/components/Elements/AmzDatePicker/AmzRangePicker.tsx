import { DatePicker as AntdDatePicker } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'

export type AmzDatePickerProps = RangePickerProps & {}

export const AmzRangePicker = ({ ...props }: AmzDatePickerProps) => {
  return <AntdDatePicker.RangePicker {...props} />
}

AmzRangePicker.displayName = 'AmzRangePicker'
