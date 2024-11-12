import { Drawer as AntdDrawer, DrawerProps } from 'antd'

export type AmzDrawerProps = DrawerProps & {}

export const AmzDrawer = ({ ...props }: AmzDrawerProps) => {
  return <AntdDrawer {...props} />
}

AmzDrawer.displayName = 'AmzDrawer'
