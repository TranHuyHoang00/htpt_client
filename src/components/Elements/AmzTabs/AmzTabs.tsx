import { Tabs as AntdTabs, TabsProps } from 'antd'

export type AmzTabsProps = TabsProps & {}

export const AmzTabs = ({ ...props }: AmzTabsProps) => {
  return <AntdTabs {...props} />
}

AmzTabs.displayName = 'AmzTabs'
