import { Meta, StoryObj } from '@storybook/react'

import { AmzStatisic } from './AmzStatistic'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzStatistic',
  component: AmzStatisic,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzStatisic>
export const AmzStatisicComponent: Story = {
  args: {
    title: 'Sample',
  },
}
