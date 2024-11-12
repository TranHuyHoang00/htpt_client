import { Avatar as AntdAvatar, AvatarProps } from 'antd'

export type AmzAvatarProps = AvatarProps & {}

export const AmzAvatar = ({ ...props }: AmzAvatarProps) => {
  return <AntdAvatar {...props} />
}

AmzAvatar.displayName = 'AmzAvatar'
