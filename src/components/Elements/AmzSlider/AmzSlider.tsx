import { Slider as AntdSlider, SliderSingleProps } from 'antd'

export type AmzSliderProps = SliderSingleProps

export const AmzSlider = ({ ...props }: AmzSliderProps) => {
  return <AntdSlider {...props} />
}

AmzSlider.displayName = 'AmzAvatar'
