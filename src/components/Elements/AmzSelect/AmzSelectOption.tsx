import { Select } from 'antd'
import './style.css'
import { OptionProps } from 'rc-select/lib/Option'

export type AmzSelectOptionProps = OptionProps & {}

export const AmzSelectOption = ({ className, children, ...props }: AmzSelectOptionProps) => {
  return (
    <Select.Option className={className} {...props}>
      {children}
    </Select.Option>
  )
}

AmzSelectOption.displayName = 'AmzSelectOption'
