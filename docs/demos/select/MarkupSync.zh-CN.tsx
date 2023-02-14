import { FormButtonGroup, FormItem, Select, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Number
          name="select"
          title="选择框"
          required={true}
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
          ]}
          x-component-props={{
            allowClear: true,
            style: {
              width: 120,
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
