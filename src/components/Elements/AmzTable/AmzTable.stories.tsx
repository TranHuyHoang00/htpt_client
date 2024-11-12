import { Meta, StoryObj } from '@storybook/react'

import { AmzTable } from './AmzTable'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzTable',
  component: AmzTable,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

interface Data {
  key: string
  name: string
  age: number
}

type Story = StoryObj<typeof AmzTable>

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

const data: Data[] = [
  {
    key: '1',
    name: 'John Doe',
    age: 30,
  },
  {
    key: '2',
    name: 'Jane Smith',
    age: 25,
  },
]
export const Table: Story = {
  args: {
    columns: columns,
    dataSource: data,
  },
}
