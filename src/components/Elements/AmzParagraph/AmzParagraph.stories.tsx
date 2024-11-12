import { Meta, StoryObj } from '@storybook/react'

import { AmzParagraph } from './AmzParagraph'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzParagraph',
  component: AmzParagraph,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof AmzParagraph>
export const root: Story = {
  args: {
    children: 'EC Paragraph',
    title: 'Test',
    editable: true,
    copyable: true,
    type: 'success',
    disabled: false,
    ellipsis: false,
    code: false,
    mark: false,
    underline: false,
    delete: false,
    keyboard: false,
    italic: false,
    strong: false,
  },
}
