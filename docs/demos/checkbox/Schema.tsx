import React from 'react'
import { Checkbox, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

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
      title: 'Are you sure',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      'x-component-props': {
        onInput(e: CheckboxChangeEvent) {
          console.log(`checked = ${e.target.checked}`)
        },
      },
    },
    multiple: {
      type: 'array',
      title: 'Check',
      enum: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
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
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
