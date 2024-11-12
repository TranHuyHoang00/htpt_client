import { Meta, StoryObj } from '@storybook/react'

import { AmzPhoneInput } from './AmzPhoneInput'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzInputPhone',
  component: AmzPhoneInput,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzPhoneInput>
export const PhoneInput: Story = {
  args: {},
}
