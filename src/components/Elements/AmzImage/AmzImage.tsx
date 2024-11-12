import { Image as AntdImage, ImageProps } from 'antd'

export type AmzImageProps = ImageProps & {}

export const AmzImage = ({ ...props }: AmzImageProps) => {
  return <AntdImage {...props} />
}

AmzImage.displayName = 'AmzImage'
