import { Meta, StoryObj } from '@storybook/react'

import { AmzSpinner } from './AmzSpinner'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzSpinner',
  component: AmzSpinner,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzSpinner>
export const Spinner: Story = {
  args: {
    size: 'large',
  },
}
