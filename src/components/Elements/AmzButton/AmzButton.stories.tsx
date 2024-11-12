import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from './AmzButton'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzButton',
  component: AmzButton,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzButton>
export const Button: Story = {
  args: {
    children: 'Primary Button',
    type: 'primary',
  },
}
