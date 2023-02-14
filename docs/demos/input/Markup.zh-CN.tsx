import { FormButtonGroup, FormItem, Input, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="input"
          title="输入框"
          x-decorator="FormItem"
          x-component="Input"
          required
          x-component-props={{
            style: {
              width: 240,
            },
          }}
        />
        <SchemaField.String
          name="textarea"
          title="文本框"
          x-decorator="FormItem"
          required
          x-component="Input.TextArea"
          x-component-props={{
            style: {
              width: 400,
            },
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
