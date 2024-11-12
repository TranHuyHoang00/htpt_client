import { Tooltip as AntdTooltip, TooltipProps } from 'antd'

export type AmzTooltipProps = TooltipProps

export const AmzTooltip = ({ ...props }: AmzTooltipProps) => {
  return <AntdTooltip {...props} />
}

AmzTooltip.displayName = 'AmzButton'
