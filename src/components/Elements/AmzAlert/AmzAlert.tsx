import { Alert, AlertProps } from 'antd'

type AmzAlertProps = AlertProps & object

export const AmzAlert = ({ ...props }: AmzAlertProps) => {
  return <Alert {...props}></Alert>
}
