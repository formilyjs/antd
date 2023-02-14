import { FormButtonGroup, FormItem, Submit, Switch } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="switch"
        title="开关"
        decorator={[FormItem]}
        component={[Switch]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
