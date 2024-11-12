import { Divider as AntdDivider, DividerProps } from 'antd'

export type AmzDividerProps = DividerProps & {}

export const AmzDivider = ({ ...props }: AmzDividerProps) => {
  return <AntdDivider {...props} />
}

AmzDivider.displayName = 'AmzDivider'
