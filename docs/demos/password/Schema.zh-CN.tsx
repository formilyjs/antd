import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Password,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, ISchema } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Password,
    FormItem,
  },
})

const form = createForm()

const schema: ISchema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
    },
  },
}

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} />
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}

export default Demo
