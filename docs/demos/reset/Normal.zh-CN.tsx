import { FormButtonGroup, FormItem, Input, Reset } from '@formily/antd-v5'
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
          required
          x-decorator="FormItem"
          x-component="Input"
        />
        <SchemaField.String
          name="input2"
          title="输入框"
          default="123"
          required
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField>
      <FormButtonGroup>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
