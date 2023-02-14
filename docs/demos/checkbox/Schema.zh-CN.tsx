import React from 'react'
import { Checkbox, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Checkbox,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    single: {
      type: 'boolean',
      title: '是否确认',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
    },
    multiple: {
      type: 'array',
      title: 'Check',
      enum: [
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox.Group',
    },
  },
}

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
