import { Meta, StoryObj } from '@storybook/react'

import { AmzCollapse, AmzCollapseProps } from './AmzCollapse'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzCollapse',
  component: AmzCollapse,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzCollapse>
const items: AmzCollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>Test</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>Test</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>Test</p>,
  },
]

export const Avatar: Story = {
  args: {
    items: items,
    defaultActiveKey: ['1'],
  },
}
