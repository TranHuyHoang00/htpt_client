import { Radio as AntdRadio, RadioProps } from 'antd'

export type AmzRadioProps = RadioProps & {}

export const AmzRadio = ({ ...props }: AmzRadioProps) => {
  return <AntdRadio {...props} />
}

AmzRadio.displayName = 'AmzRadio'
