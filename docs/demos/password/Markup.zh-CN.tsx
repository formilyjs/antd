import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Password,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Password,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.String
            name="input"
            title="输入框"
            x-decorator="FormItem"
            x-component="Password"
            required
            x-component-props={{
              checkStrength: true,
            }}
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
