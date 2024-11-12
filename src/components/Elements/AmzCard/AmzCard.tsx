import { Card as AntdCard, CardProps } from 'antd'

export type AmzCardProps = CardProps

export const AmzCard = ({ ...props }: AmzCardProps) => {
  return <AntdCard {...props} />
}

AmzCard.displayName = 'AmzCard'
