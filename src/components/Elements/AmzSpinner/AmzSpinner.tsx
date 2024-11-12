import { Spin as AntdSpin, SpinProps } from 'antd'

export type AmzSpinProps = SpinProps & {}

export const AmzSpinner = ({ ...props }: AmzSpinProps) => {
  return <AntdSpin {...props} />
}

AmzSpinner.displayName = 'AmzSpinner'
