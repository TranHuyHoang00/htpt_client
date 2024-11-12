import { Meta, StoryObj } from '@storybook/react'

import { AmzEmpty } from './AmzEmpty'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzEmpty',
  component: AmzEmpty,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzEmpty>
export const Empty: Story = {
  args: {},
}
