import { Meta, StoryObj } from '@storybook/react'

import { AmzTimeline } from './AmzTimeline'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzTimeline',
  component: AmzTimeline,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzTimeline>
export const Button: Story = {
  args: {
    items: [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ],
  },
}
