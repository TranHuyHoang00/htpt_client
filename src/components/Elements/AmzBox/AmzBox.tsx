import clsx from 'clsx'
import React from 'react'

export type AmzBoxProps = React.HTMLAttributes<HTMLElement> & object

export const AmzBox = ({ className, ...props }: AmzBoxProps) => {
  return <div className={clsx(className, '')} {...props} />
}

AmzBox.displayName = 'AmzBox'
