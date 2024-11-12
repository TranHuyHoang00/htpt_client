import { Meta, StoryObj } from '@storybook/react'

import { AmzSwitch } from './AmzSwitch'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzSwitch',
  component: AmzSwitch,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzSwitch>
export const Switch: Story = {
  args: {
    defaultChecked: true,
  },
}
