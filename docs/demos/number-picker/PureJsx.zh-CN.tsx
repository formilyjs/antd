import React from 'react'
import {
  NumberPicker,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="input"
        title="文本框"
        required
        decorator={[FormItem]}
        component={[
          NumberPicker,
          {
            style: {
              width: 240,
            },
          },
        ]}
      />

      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
