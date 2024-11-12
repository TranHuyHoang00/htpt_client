import { Meta, StoryObj } from '@storybook/react'

import { AmzInput } from './AmzInput'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzInput',
  component: AmzInput,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzInput>
export const Input: Story = {
  args: {
    placeholder: 'Basic usage',
  },
}
