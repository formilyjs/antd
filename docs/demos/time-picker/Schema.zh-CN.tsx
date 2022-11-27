import { FormButtonGroup, FormItem, Submit, TimePicker } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, ISchema } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    TimePicker,
    FormItem,
  },
})

const form = createForm()

const schema: ISchema = {
  type: 'object',
  properties: {
    time: {
      title: '时间',
      'x-decorator': 'FormItem',
      'x-component': 'TimePicker',
      type: 'string',
    },
    '[startTime,endTime]': {
      title: '时间范围',
      'x-decorator': 'FormItem',
      'x-component': 'TimePicker.RangePicker',
      type: 'string',
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
