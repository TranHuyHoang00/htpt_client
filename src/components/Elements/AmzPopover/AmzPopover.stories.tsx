import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from '@/components/Elements/AmzButton'

import { AmzPopover } from './AmzPopover'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzPopover',
  component: AmzPopover,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzPopover>
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
export const Avatar: Story = {
  args: {
    content: content,
    children: <AmzButton type="primary">Hover me</AmzButton>,
  },
}
