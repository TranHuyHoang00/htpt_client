import { Tree as AntdTree, TreeProps } from 'antd'

export type AmzTreeProps = TreeProps & {}

export const AmzTree = ({ ...props }: AmzTreeProps) => {
  return <AntdTree {...props} />
}

AmzTree.displayName = 'AmzTree'
