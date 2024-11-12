import { Tag as AntdTag, TagProps } from 'antd'

export type AmzTagProps = TagProps & {}

export const AmzTag = ({ ...props }: AmzTagProps) => {
  return <AntdTag {...props} />
}

AmzTag.displayName = 'AmzTag'
