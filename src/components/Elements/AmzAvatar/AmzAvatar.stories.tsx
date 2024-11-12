import { Meta, StoryObj } from '@storybook/react'

import { AmzAvatar } from './AmzAvatar'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzAvatar',
  component: AmzAvatar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzAvatar>
export const Avatar: Story = {
  args: {
    children: 'NA',
  },
}
