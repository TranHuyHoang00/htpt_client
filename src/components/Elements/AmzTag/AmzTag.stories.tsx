import { Meta, StoryObj } from '@storybook/react'

import { AmzTag } from './AmzTag'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzTag',
  component: AmzTag,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzTag>
export const Tag: Story = {
  args: {
    color: 'red',
    children: 'Tag',
  },
}
