import { Form } from 'antd'
import { FormListProps } from 'antd/lib/form'

export interface AmzFormListProps extends FormListProps {}

export const AmzFormList = ({ children, ...props }: AmzFormListProps) => {
  //@ts-ignore
  return <Form.List {...props}>{children}</Form.List>
}

AmzFormList.displayName = 'AmzFormList'
