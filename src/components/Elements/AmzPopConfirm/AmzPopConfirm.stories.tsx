import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from '@/components/Elements/AmzButton'

import { AmzPopConfirm } from './AmzPopConfirm'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzAvatar',
  component: AmzPopConfirm,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzPopConfirm>
export const PopConfirm: Story = {
  args: {
    title: 'Delete the task',
    description: 'Are you sure to delete this task?',
    okText: 'Yes',
    cancelText: 'No',
    children: <AmzButton danger>Delete</AmzButton>,
  },
}
