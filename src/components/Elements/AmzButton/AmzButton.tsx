import { Button as AntdButton, ButtonProps } from 'antd'
import clsx from 'clsx'

export type AmzButtonProps = ButtonProps & {}

export const AmzButton = ({ className, type = 'primary', ...props }: AmzButtonProps) => {
  return <AntdButton className={clsx('', className)} type={type} {...props} />
}

AmzButton.displayName = 'AmzButton'
