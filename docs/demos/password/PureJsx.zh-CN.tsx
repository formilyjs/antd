import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Password,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <Field
          name="input"
          title="输入框"
          required
          decorator={[FormItem]}
          component={[
            Password,
            {
              checkStrength: true,
            },
          ]}
        />
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
