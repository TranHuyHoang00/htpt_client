import { Input as AntdInput, InputRef } from 'antd'
import { SearchProps } from 'antd/es/input'
import clsx from 'clsx'
import React from 'react'

export type AmzSearchProps = SearchProps &
  React.RefAttributes<InputRef> & {
    type?: 'text' | 'email' | 'password' | 'search'
    className?: string
  }

export const AmzSearch = ({ className, size = 'middle', ...props }: AmzSearchProps) => {
  return <AntdInput.Search size={size} className={clsx('flex justify-center ', className)} {...props} />
}

AmzSearch.displayName = 'AmzSearch'
