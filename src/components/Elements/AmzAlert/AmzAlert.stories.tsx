import { Meta, StoryObj } from '@storybook/react'

import { AmzAlert } from './AmzAlert'

const meta: Meta<typeof AmzAlert> = {
  title: 'Components/AmzComponents/AmzAlert',
  component: AmzAlert,
}

export default meta

type Story = StoryObj<typeof AmzAlert>

export const AmzAlertStory: Story = {
  args: {
    type: 'success',
    message: 'Success Text',
    description: 'This is description',
  },
}
