import { Meta, StoryObj } from '@storybook/react'

import { AmzFloatButton } from './AmzFloatButton'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzFloatButton',
  component: AmzFloatButton,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzFloatButton>
export const primaryType: Story = {
  args: {
    type: 'primary',
  },
}
export const defaultType: Story = {
  args: {
    type: 'default',
  },
}
