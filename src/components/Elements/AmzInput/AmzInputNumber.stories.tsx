import { Meta, StoryObj } from '@storybook/react'

import { AmzInputNumber } from '@/components/Elements/AmzInput/AmzInputNumber'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzInputNumber',
  component: AmzInputNumber,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzInputNumber>
export const Input: Story = {
  args: {
    placeholder: 'Input Number',
  },
}
