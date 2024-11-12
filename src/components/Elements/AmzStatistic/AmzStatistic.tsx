import { Statistic, StatisticProps } from 'antd'

export type AmzStatisicProps = StatisticProps & object

export const AmzStatisic = (props: AmzStatisicProps) => {
  return <Statistic {...props}></Statistic>
}
