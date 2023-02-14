import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Password,
  Submit,
} from '@formily/antd-v5'
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
      title: 'input box',
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
          <Submit onSubmit={console.log}>Submit</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}

export default Demo
