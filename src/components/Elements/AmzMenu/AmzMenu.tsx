import type { MenuProps } from 'antd'
import { Menu as AntdMenu } from 'antd'

export type AmzMenuProps = MenuProps & {}

export const AmzMenu = ({ ...props }: MenuProps) => {
  return <AntdMenu {...props} />
}

AmzMenu.displayName = 'AmzMenu'
