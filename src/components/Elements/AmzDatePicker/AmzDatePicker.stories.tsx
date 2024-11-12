import { Meta, StoryObj } from '@storybook/react'

import { AmzDatePicker } from './AmzDatePicker'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzDatePicker',
  component: AmzDatePicker,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzDatePicker>
export const DatePicker: Story = {
  args: {},
}
