import { Meta, StoryObj } from '@storybook/react'

import { AmzEditor } from './AmzEditor'

const meta: Meta = {
  title: 'Components/EcComponents/EcEditor',
  component: AmzEditor,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzEditor>
export const Editor: Story = {
  args: {
    initialValue: '<b>Hello</b> Admin',
  },
}
