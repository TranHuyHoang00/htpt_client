import { Result as AntdResult, ResultProps } from 'antd'

export type AmzResultProps = ResultProps & {}

export const AmzResult = ({ ...props }: AmzResultProps) => {
  return <AntdResult {...props} />
}

AmzResult.displayName = 'AmzResult'
