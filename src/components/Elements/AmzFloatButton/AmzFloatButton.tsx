import { FloatButton as AntdFloatButton, FloatButtonProps } from 'antd'

export type AmzFloatButtonProps = FloatButtonProps & {}

export const AmzFloatButton = ({ type, ...props }: AmzFloatButtonProps) => {
  return <AntdFloatButton type={type} {...props} />
}

AmzFloatButton.displayName = 'AmzFloatButton'
