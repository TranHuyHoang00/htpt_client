import { Timeline as AntdTimeline, TimelineProps } from 'antd'

export type AmzTimelineProps = TimelineProps

export const AmzTimeline = (props: AmzTimelineProps) => {
  return <AntdTimeline {...props} />
}

AmzTimeline.displayName = 'AmzTimeline'
