import { Form, FormItemProps } from 'antd'

export interface AmzFormItemProps<T> extends FormItemProps<T> {}

export const AmzFormItem = <T,>({ ...props }: AmzFormItemProps<T>) => {
  return <Form.Item<T> {...props}></Form.Item>
}
