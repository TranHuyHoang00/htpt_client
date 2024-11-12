import { Meta, StoryObj } from '@storybook/react'

import { AmzBreadcrumb } from './AmzBreadcrumb'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzBreadcrumb',
  component: AmzBreadcrumb,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzBreadcrumb>
export const Breadcrumb: Story = {
  args: {
    items: [
      {
        title: 'Home',
      },
      {
        title: <a href="#">Application Center</a>,
      },
      {
        title: <a href="#">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ],
  },
}
