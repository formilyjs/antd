import { FormButtonGroup, FormItem, Submit, Transfer } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, ISchema } from '@formily/react'
import type { TransferItem } from 'antd/es/transfer'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Transfer,
  },
})

const form = createForm()

const renderTitle = (item: TransferItem) => item.title

const schema: ISchema = {
  type: 'object',
  properties: {
    transfer: {
      type: 'array',
      title: '穿梭框',
      'x-decorator': 'FormItem',
      'x-component': 'Transfer',
      enum: [
        { title: '选项1', key: 1 },
        { title: '选项2', key: 2 },
      ],
      'x-component-props': {
        render: '{{renderTitle}}',
      },
    },
  },
}

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} scope={{ renderTitle }} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
