import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from '@/components/Elements/AmzButton'

import { AmzTooltip } from './AmzTooltip'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzTooltip',
  component: AmzTooltip,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzTooltip>
export const Tooltip: Story = {
  args: {
    children: <AmzButton>Scroll The Window</AmzButton>,
    title: 'Thanks for using antd. Have a nice day!',
    trigger: 'click',
  },
}
