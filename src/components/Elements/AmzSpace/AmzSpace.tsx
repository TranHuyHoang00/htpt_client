import { Space as AntdSpace, SpaceProps } from 'antd'

export type AmzSpaceProps = SpaceProps & {}

export const AmzSpace = ({ ...props }: AmzSpaceProps) => {
  return <AntdSpace {...props} />
}

AmzSpace.displayName = 'AmzSpace'
