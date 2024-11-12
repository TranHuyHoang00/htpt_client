import { Radio as AntdRadio, RadioGroupProps } from 'antd'

export type AmzRadioGroupProps = RadioGroupProps & {}

export const AmzRadioGroup = ({ ...props }: AmzRadioGroupProps) => {
  return <AntdRadio.Group {...props} />
}

AmzRadioGroup.displayName = 'AmzRadioGroup'
