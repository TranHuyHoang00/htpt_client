import { Meta, StoryObj } from '@storybook/react'

import { AmzCard } from './AmzCard'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzCard',
  component: AmzCard,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzCard>
export const Avatar: Story = {
  args: {
    children: 'Card content',
    title: 'Card title',
  },
}
