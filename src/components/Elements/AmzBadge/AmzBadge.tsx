import { Badge as AntdBadge, BadgeProps } from 'antd'

export type AmzBadgeProps = BadgeProps & {}

export const AmzBadge = ({ ...props }: AmzBadgeProps) => {
  return <AntdBadge {...props} />
}

AmzBadge.displayName = 'AmzBadge'
