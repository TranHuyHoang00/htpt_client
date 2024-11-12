import { Meta, StoryObj } from '@storybook/react'

import { AmzLogo } from './AmzLogo'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzLogo',
  component: AmzLogo,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzLogo>

export const Small: Story = {
  args: {
    children: 'Small Logo',
    size: 'sm',
  },
}
export const Medium: Story = {
  args: {
    children: 'Medium Logo',
    size: 'md',
  },
}
export const Large: Story = {
  args: {
    children: 'Large logo',
    size: 'lg',
  },
}
