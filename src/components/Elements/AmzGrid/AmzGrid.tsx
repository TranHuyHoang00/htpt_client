import clsx from 'clsx'
import React from 'react'

export type AmzGridProps = React.HTMLAttributes<HTMLElement> & object

export const AmzGrid = ({ className, ...props }: AmzGridProps) => {
  return <div className={clsx(className, 'grid')} {...props} />
}

AmzGrid.displayName = 'AmzFlex'
