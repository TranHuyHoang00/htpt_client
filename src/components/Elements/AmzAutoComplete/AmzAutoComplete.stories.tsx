import { Meta, StoryObj } from '@storybook/react'

import { AmzAutoComplete } from './AmzAutoComplete'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzAutoComplete',
  component: AmzAutoComplete,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzAutoComplete>
export const AutoComplete: Story = {
  args: {
    onSelect: (data: string) => {
      console.log('onSelect', data)
    },
  },
}
