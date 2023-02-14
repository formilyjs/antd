import {
  DatePicker,
  Editable,
  FormButtonGroup,
  FormItem,
  Input,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, ISchema } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    DatePicker,
    Editable,
    Input,
    FormItem,
  },
})

const form = createForm()

const schema: ISchema = {
  type: 'object',
  properties: {
    date: {
      type: 'string',
      title: 'Date',
      'x-decorator': 'Editable',
      'x-component': 'DatePicker',
    },
    input: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'Editable',
      'x-component': 'Input',
    },
    void: {
      type: 'void',
      title: 'Virtual Node Container',
      'x-component': 'Editable.Popover',
      'x-reactions':
        "{{(field) => field.title = field.query('.void.date2').get('value') || field.title}}",
      properties: {
        date2: {
          type: 'string',
          title: 'Date',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
        },
        input2: {
          type: 'string',
          title: 'input box',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
    iobject: {
      type: 'object',
      title: 'Object node container',
      'x-component': 'Editable.Popover',
      'x-reactions':
        '{{(field) => field.title = field.value && field.value.date || field.title}}',
      properties: {
        date: {
          type: 'string',
          title: 'Date',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
        },
        input: {
          type: 'string',
          title: 'input box',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
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
