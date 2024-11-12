import { Meta, StoryObj } from '@storybook/react'

import { AmzTabs, AmzTabsProps } from './AmzTabs'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzTabs',
  component: AmzTabs,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzTabs>

const items: AmzTabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
]

export const Avatar: Story = {
  args: {
    items: items,
  },
}
