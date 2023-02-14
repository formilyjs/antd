import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Password,
  Submit,
} from '@formily/antd-v5'
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
            title="input box"
            x-decorator="FormItem"
            x-component="Password"
            required
            x-component-props={{
              checkStrength: true,
            }}
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>Submit</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
