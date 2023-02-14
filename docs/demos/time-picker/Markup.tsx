import { TimePicker, FormButtonGroup, FormItem, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    TimePicker,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="time"
          title="time"
          required
          x-decorator="FormItem"
          x-component="TimePicker"
        />
        <SchemaField.String
          name="[startTime,endTime]"
          title="time range"
          x-decorator="FormItem"
          x-component="TimePicker.RangePicker"
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
