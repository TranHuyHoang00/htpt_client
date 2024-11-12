import clsx from 'clsx'
import React from 'react'

export type AmzFlexProps = React.HTMLAttributes<HTMLElement> & {
  direction?: 'row' | 'col'
}

export const AmzFlex = ({ className, direction = 'row', ...props }: AmzFlexProps) => {
  return <div className={clsx(className, 'flex', direction === 'row' ? 'flex-row' : 'flex-col')} {...props} />
}

AmzFlex.displayName = 'AmzFlex'
