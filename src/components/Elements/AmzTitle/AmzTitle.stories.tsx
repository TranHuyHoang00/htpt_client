import { Meta, StoryObj } from "@storybook/react";

import { AmzTitle } from "./AmzTitle";

const meta: Meta = {
  title: "Components/AmzComponents/AmzTitle",
  component: AmzTitle,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof AmzTitle>;

export const root: Story = {
  args: {
    children: "Test Heading",
    level: 3,
    title: "Test",
    editable: true,
    copyable: true,
    type: "success",
    disabled: false,
    ellipsis: false,
    code: false,
    mark: false,
    underline: false,
    delete: false,
    keyboard: false,
    italic: false,
  },
};
export const h1: Story = {
  args: {
    level: 1,
    children: "H1 Heading",
  },
};
export const h2: Story = {
  args: {
    level: 2,
    children: "H1 Heading",
  },
};
export const h3 = {
  args: {
    level: 3,
    children: "H1 Heading",
  },
};
export const h4 = {
  args: {
    level: 4,
    children: "H1 Heading",
  },
};
export const h5 = {
  args: {
    level: 5,
    children: "H1 Heading",
  },
};
export const h6 = {
  args: {
    level: 6,
    children: "H1 Heading",
  },
};
