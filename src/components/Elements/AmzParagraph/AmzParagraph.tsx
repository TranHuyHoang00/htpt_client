import { Typography } from 'antd'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import clsx from 'clsx'

const sizes = {
  sm: 'text-xs xl:text-sm 2xl:text-base', //16px
  md: 'text-sm xl:text-base 2xl:text-lg', //18px
  lg: 'text-base xl:text-lg 2xl:text-xl', //20px
}
export type AmzParagraphProps = ParagraphProps & {
  size?: keyof typeof sizes
}
const { Paragraph } = Typography

export const AmzParagraph = ({ size = 'md', className, ...props }: AmzParagraphProps) => {
  return (
    <Paragraph className={clsx(sizes[size], className)} {...props}>
      {props.children}
    </Paragraph>
  )
}

AmzParagraph.displayName = 'AmzParagraph'
