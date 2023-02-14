import { FormButtonGroup, FormItem, Select, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, ISchema } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const form = createForm()

const schema: ISchema = {
  type: 'object',
  properties: {
    select: {
      type: 'string',
      title: 'Select box',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ],
      'x-component-props': {
        style: {
          width: 120,
        },
      },
    },
  },
}
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
