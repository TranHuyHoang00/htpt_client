import { Dropdown as AntdDropdown, DropdownProps } from 'antd'

export type AmzDropdownProps = DropdownProps & {}

export const AmzDropdown = ({ ...props }: AmzDropdownProps) => {
  return <AntdDropdown {...props} />
}

AmzDropdown.displayName = 'AmzDropdown'
