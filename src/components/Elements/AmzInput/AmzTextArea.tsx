import { Input as AntdInput, InputRef } from 'antd'
import { TextAreaProps } from 'antd/es/input'
import clsx from 'clsx'
import { forwardRef, Ref } from 'react'

export type AmzTextAreaProps = TextAreaProps & {
  className?: string
}

export const AmzTextArea = forwardRef(({ className, size = 'middle', ...props }: AmzTextAreaProps, ref: Ref<InputRef>) => {
  return <AntdInput.TextArea size={size} ref={ref} className={clsx(className)} {...props} />
})

AmzTextArea.displayName = 'AmzTextArea'
