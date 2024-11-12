import clsx from 'clsx'
import * as React from 'react'
import { Link } from 'react-router-dom'

import defaultLogoUrl from '@/assets/logo.png'

const sizes = {
  sm: 'w-20 xl:w-24 h-auto',
  md: 'w-24 xl:w-36 h-auto',
  lg: 'w-36 xl:w-48 h-auto',
}

export type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: keyof typeof sizes
  link?: string
  logo?: string
  logoString?: string
}

export const AmzLogo = React.forwardRef<HTMLButtonElement, LogoProps>(
  ({ link = '/', className = '', size = 'md', logo = defaultLogoUrl, logoString = '' }, ref) => {
    return (
      <Link className={'flex justify-center'} to={link}>
        <img className={clsx('object-contain', sizes[size], className)} src={logo} alt="Logo" />
      </Link>
    )
  },
)
AmzLogo.displayName = 'Logo'
