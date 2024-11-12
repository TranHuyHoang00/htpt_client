import { Meta, StoryObj } from '@storybook/react'

import { AmzSelect } from './AmzSelect'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzSelect',
  component: AmzSelect,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzSelect>

export const Select: Story = {
  args: {
    style: { width: '250px' },
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  },
}
export const SelectSearchable: Story = {
  args: {
    style: { width: '250px' },
    showSearch: true,
    placeholder: 'Search to Select',
    optionFilterProp: 'children',
    options: [
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ],
  },
}
