import { Popover as AntdPopover, PopoverProps } from 'antd'

export type AmzPopoverProps = PopoverProps & {}

export const AmzPopover = ({ ...props }: AmzPopoverProps) => {
  return <AntdPopover {...props} />
}

AmzPopover.displayName = 'AmzPopover'
