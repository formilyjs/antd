import { FormButtonGroup, FormItem, Radio, Submit } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Radio,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Number
          name="radio"
          title="single choice"
          enum={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
          ]}
          x-decorator="FormItem"
          x-component="Radio.Group"
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
