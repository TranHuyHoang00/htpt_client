import clsx from 'clsx'
import React from 'react'
const types = {
  admin: 'rounded-none',
}
export type AmzContainerProps = React.HTMLAttributes<HTMLElement> & {
  havePadding?: boolean
  type?: keyof typeof types
}

export const AmzContainer = ({ className, children, havePadding = true, type = 'admin' }: AmzContainerProps) => {
  return (
    <div className={clsx(havePadding ? 'py-6 pt-8 ' : '', 'bg-white', types[type], className)}>
      <div className={clsx(havePadding ? 'mx-auto px-4 sm:px-6 md:px-8' : '')}>{children}</div>
    </div>
  )
}

AmzContainer.displayName = 'AmzContainer'
