import { Popconfirm as AntdPopConfirm, PopconfirmProps } from 'antd'

export type AmzPopConfirmProps = PopconfirmProps & {}

export const AmzPopConfirm = ({ ...props }: AmzPopConfirmProps) => {
  return <AntdPopConfirm {...props} />
}

AmzPopConfirm.displayName = 'AmzPopConfirm'
