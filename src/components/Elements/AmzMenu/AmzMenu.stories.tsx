import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'
import { AiFillAppstore, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'

import { AmzMenu, AmzMenuProps } from './AmzMenu'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzMenu',
  component: AmzMenu,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: StoryFn<AmzMenuProps> = (props: AmzMenuProps) => <AmzMenu {...props} />

type MenuItem = Required<AmzMenuProps>['items'][number]

type Story = StoryObj<typeof AmzMenu>

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <AiOutlineMail />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),

  getItem('Navigation Two', 'sub2', <AiFillAppstore />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  getItem('Navigation Three', 'sub4', <AiOutlineSetting />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]

export const Menu: Story = {
  args: {
    theme: 'light',
    style: { width: 256 },
    defaultOpenKeys: ['sub1'],
    mode: 'inline',
    items: items,
  },
}
