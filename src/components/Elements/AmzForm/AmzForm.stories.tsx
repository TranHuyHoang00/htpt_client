import { Meta, StoryObj } from '@storybook/react'
import { Radio } from 'antd'

import { AmzButton } from '@/components/Elements/AmzButton'
import { AmzContainer } from '@/components/Elements/AmzContainer'
import { AmzFormItem } from '@/components/Elements/AmzForm/AmzFormItem'
import { AmzInput } from '@/components/Elements/AmzInput'

import { AmzForm } from './AmzForm'

const meta: Meta = {
  title: 'Components/AmzComponents/AmzForm',
  component: AmzForm,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type XeroSettingProps = {
  enableXero: number
  xeroAppClientId: string
  xeroAppSecretToken: string
}
type Story = StoryObj<typeof AmzForm>
export const formDefault: Story = {
  args: {
    layout: 'vertical',
    children: (
      <div>
        <AmzContainer>
          <AmzFormItem<XeroSettingProps> className={'mb-6'} label="Enable Xero" name="enableXero">
            <Radio.Group defaultValue={1}>
              <Radio value={1}>Enable</Radio>
              <Radio value={0}>Disable</Radio>
            </Radio.Group>
          </AmzFormItem>
          <AmzFormItem<XeroSettingProps> className={'mb-6'} label="Xero App Client ID" name="xeroAppClientId">
            <AmzInput type={'text'} size="middle" />
          </AmzFormItem>
          <AmzFormItem<XeroSettingProps> className={'mb-6'} label="Xero App Secret Token" name="xeroAppSecretToken">
            <AmzInput type={'password'} size="middle" />
          </AmzFormItem>
        </AmzContainer>
        <div className={'flex gap-2 mt-6'}>
          <AmzButton type={'default'} size={'large'}>
            Cancel
          </AmzButton>
          <AmzButton type="primary" size={'large'} htmlType="submit">
            Verify Xero Credentials
          </AmzButton>
          <AmzButton type="primary" size={'large'} htmlType="submit">
            Update
          </AmzButton>
        </div>
      </div>
    ),
  },
}
