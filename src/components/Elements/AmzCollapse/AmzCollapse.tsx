import { Collapse as AntdCollapse, CollapseProps } from 'antd'

export type AmzCollapseProps = CollapseProps

export const AmzCollapse = ({ ...props }: AmzCollapseProps) => {
  return <AntdCollapse {...props} />
}

AmzCollapse.displayName = 'AmzCollapse'
