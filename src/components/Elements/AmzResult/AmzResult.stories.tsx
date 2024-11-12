import { Meta, StoryObj } from '@storybook/react'

import { AmzButton } from '@/components/Elements/AmzButton'

import { AmzResult } from './AmzResult'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzResult',
  component: AmzResult,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzResult>

export const ResultSuccess: Story = {
  args: {
    status: 'success',
    title: 'Successfully Purchased order',
    subTitle: 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.',
    extra: [
      <AmzButton type="primary" key="console">
        Go Console
      </AmzButton>,
      <AmzButton key="buy">Buy Again</AmzButton>,
    ],
  },
}

export const Result403: Story = {
  args: {
    status: '403',
    title: '403',
    subTitle: 'Sorry, you are not authorized to access this page.',
    extra: [
      <AmzButton type="primary" href={'/'}>
        Back Home
      </AmzButton>,
    ],
  },
}

export const Result404: Story = {
  args: {
    status: '404',
    title: '404',
    subTitle: 'Sorry, the page you visited does not exist.',
    extra: [
      <AmzButton type="primary" href={'/'}>
        Back Home
      </AmzButton>,
    ],
  },
}

export const Result500: Story = {
  args: {
    status: '500',
    title: '500',
    subTitle: 'Sorry, something went wrong.',
    extra: [
      <AmzButton type="primary" href={'/'}>
        Back Home
      </AmzButton>,
    ],
  },
}
