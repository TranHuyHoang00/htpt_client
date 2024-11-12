import { Switch as AntdSwitch, SwitchProps } from 'antd'

export type AmzSwitchProps = SwitchProps & {}

export const AmzSwitch = ({ ...props }: AmzSwitchProps) => {
  return <AntdSwitch {...props} />
}

AmzSwitch.displayName = 'AmzSwitch'
