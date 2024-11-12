import { Meta, StoryObj } from '@storybook/react'

import { AmzDivider } from './AmzDivider'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzDivider',
  component: AmzDivider,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzDivider>
export const Divider: Story = {
  args: {
    children: 'Left Text',
    orientation: 'left',
  },
}
