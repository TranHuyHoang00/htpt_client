import { Empty as AntdEmpty, EmptyProps } from 'antd'

export type AmzEmptyProps = EmptyProps & {}

export const AmzEmpty = ({ ...props }: AmzEmptyProps) => {
  return <AntdEmpty {...props} />
}

AmzEmpty.displayName = 'AmzEmpty'
