import { Meta, StoryObj } from '@storybook/react'

import { AmzSlider } from './AmzSlider'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzSlider',
  component: AmzSlider,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzSlider>
export const Avatar: Story = {
  args: {
    defaultValue: 30,
  },
}
