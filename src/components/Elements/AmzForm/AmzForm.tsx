import { Form, FormProps } from 'antd'
import React from 'react'

export interface AmzFormProps extends FormProps {}

export const AmzForm = ({ ...props }: AmzFormProps) => {
  //@ts-ignore
  return <Form {...props}></Form>
}

AmzForm.displayName = 'AmzForm'
