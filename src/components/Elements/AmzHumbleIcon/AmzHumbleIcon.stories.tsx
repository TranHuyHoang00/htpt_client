import { Meta, StoryObj } from '@storybook/react'

import { AmzHumbleIcon } from './AmzHumbleIcon'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzHumbleIcon',
  component: AmzHumbleIcon,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzHumbleIcon>
export const Avatar: Story = {
  args: {
    iconType: 'desktop',
  },
}
