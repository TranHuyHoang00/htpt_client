import { Meta, StoryObj } from '@storybook/react'

import { AmzImage } from './AmzImage'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzImage',
  component: AmzImage,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzImage>

export const Image: Story = {
  args: {
    src: 'https://picsum.photos/1024/800',
  },
}
