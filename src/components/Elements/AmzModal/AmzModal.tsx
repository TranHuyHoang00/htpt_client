import { Modal as AntdModal, ModalProps } from 'antd'

const sizes = {
  sm: 500,
  md: 750,
  lg: 1000,
  xl: 1140,
  xxl: 1280,
}

export type AmzModalProps = ModalProps & {
  size?: keyof typeof sizes
}

export const AmzModal = ({ size = 'sm', ...props }: AmzModalProps) => {
  return <AntdModal width={sizes[size]} {...props} />
}

AmzModal.displayName = 'AmzModal'
