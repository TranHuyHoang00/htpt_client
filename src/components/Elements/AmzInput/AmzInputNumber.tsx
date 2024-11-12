import { InputNumber as AntdInputNumber, InputNumberProps } from 'antd'
import clsx from 'clsx'
import React, { forwardRef, Ref } from 'react'

export type AmzInputNumberProps = InputNumberProps &
  React.RefAttributes<HTMLInputElement> & {
    className?: string
  }
const sizes = {
  order: ' items-center p-0 xl:text-[13px] text-xs',
  small: ' items-center p-0 xl:text-sm text-xs',
  middle: 'items-center p-1 xl:text-base text-sm',
  large: 'items-center p-2 xl:text-lg text-base',
}
export const AmzInputNumber = forwardRef(
  ({ className, size = 'middle', changeOnWheel = false, ...props }: AmzInputNumberProps, ref: Ref<HTMLInputElement>) => {
    const defaultStyle = ' w-full'
    return (
      <AntdInputNumber
        size={size}
        ref={ref}
        changeOnWheel={changeOnWheel}
        className={clsx(sizes[size], defaultStyle, className)}
        {...props}
      />
    )
  },
)

AmzInputNumber.displayName = 'AmzInputNumber'
