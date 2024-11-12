import { Input as AntdInput, InputProps, InputRef } from 'antd'
import clsx from 'clsx'
import React, { forwardRef, Ref } from 'react'

const sizes = {
  order: ' items-center p-0 xl:text-[13px] text-xs',
  small: ' items-center p-1 xl:text-sm text-xs',
  middle: 'items-center p-2 xl:text-base text-sm',
  large: 'items-center p-3 xl:text-lg text-base',
}
export type AmzInputProps = Omit<InputProps, 'size'> &
  React.RefAttributes<InputRef> & {
    type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week'
    className?: string
    isShowAutoComplete?: boolean
    size?: keyof typeof sizes
  }

export const AmzInput = forwardRef(
  ({ type = 'text', isShowAutoComplete = false, className, size = 'middle', ...props }: AmzInputProps, ref: Ref<InputRef>) => {
    const defaultStyle = 'flex justify-center '
    return type === 'password' ? (
      <AntdInput.Password
        autoComplete={isShowAutoComplete ? 'on' : 'new-password'}
        ref={ref}
        type={type}
        className={clsx(sizes[size], defaultStyle, className)}
        {...props}
      />
    ) : (
      <AntdInput ref={ref} type={type} className={clsx(sizes[size], defaultStyle, className)} {...props} />
    )
  },
)

AmzInput.displayName = 'AmzInput'
