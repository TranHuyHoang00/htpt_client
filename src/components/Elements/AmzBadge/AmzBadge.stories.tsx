import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'antd'

import { AmzBadge } from './AmzBadge'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzBadge',
  component: AmzBadge,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzBadge>
export const Badge: Story = {
  args: {
    count: 99,
    children: <Avatar shape="square" size="large" />,
  },
}
