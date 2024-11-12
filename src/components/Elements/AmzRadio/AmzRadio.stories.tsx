import { Meta, StoryObj } from '@storybook/react'

import { AmzRadio } from './AmzRadio'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzRadio',
  component: AmzRadio,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzRadio>
export const Radio: Story = {
  args: {
    children: 'Enabled',
    value: 'Enabled',
    type: 'primary',
  },
}
