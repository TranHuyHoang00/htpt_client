import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from '@/components/Elements/AmzButton'

import { AmzSpace } from './AmzSpace'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzSpace',
  component: AmzSpace,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzSpace>

export const Space: Story = {
  args: {
    children: (
      <>
        <AmzButton> First Button </AmzButton>
        <AmzButton> Second Button </AmzButton>
        <AmzButton> Third Button </AmzButton>
      </>
    ),
  },
}
