import { Meta, StoryObj } from '@storybook/react'

import { AmzColor } from './AmzColor'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzColor',
  component: AmzColor,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzColor>
export const Color: Story = {
  args: {
    popupWidth: 234,
    pickerWidth: 234,
    size: 'large',
    disabledAlpha: true,
    disabled: false,
  },
}
