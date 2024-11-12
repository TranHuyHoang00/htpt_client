import { Meta, StoryObj } from '@storybook/react'

import { AmzDrawer } from './AmzDrawer'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzDrawer',
  component: AmzDrawer,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzDrawer>
export const Drawer: Story = {
  args: {
    children: (
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    ),
    title: 'Basic Drawer',
    placement: 'right',
  },
}
