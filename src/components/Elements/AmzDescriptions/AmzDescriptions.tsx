import { Descriptions as AntdDescriptions, DescriptionsProps } from 'antd'

export type AmzDescriptionsProps = DescriptionsProps

export const AmzDescriptions = ({ ...props }: AmzDescriptionsProps) => {
  return <AntdDescriptions {...props} />
}

AmzDescriptions.displayName = 'AmzDescriptions'
