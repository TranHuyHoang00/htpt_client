import humbleIcon from 'humbleicons/humbleicons.svg'
import React from 'react'

export type AmzHumbleIconProps = React.SVGProps<SVGSVGElement> & {
  iconType: string
}

export const AmzHumbleIcon = ({ iconType, ...props }: AmzHumbleIconProps) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${humbleIcon}#${iconType}`} />
    </svg>
  )
}

AmzHumbleIcon.displayName = 'AmzHumbleIcon'
