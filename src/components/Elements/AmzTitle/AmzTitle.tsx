import Title, { TitleProps } from 'antd/es/typography/Title'
import clsx from 'clsx'

export type ECTitleProps = TitleProps & {
  className?: string
}

const levels = {
  6: 'text-lg lg:text-xl 2xl:text-2xl', //24px
  5: 'text-xl lg:text-2xl 2xl:text-3xl', //30px
  4: 'text-2xl lg:text-3xl 2xl:text-4xl', //36px
  3: 'text-2xl xl:text-4xl 2xl:text-5xl', //48px
  2: 'text-3xl xl:text-5xl 2xl:text-6xl', //60px
  1: 'text-4xl xl:text-6xl 2xl:text-7xl', //72px
}

export const AmzTitle = ({ className, level = 3, ...props }: ECTitleProps) => {
  // @ts-ignore
  return (
    <Title level={level} className={clsx(levels[level], className)} {...props}>
      {props.children}
    </Title>
  )
}

AmzTitle.displayName = 'AmzTypography'
