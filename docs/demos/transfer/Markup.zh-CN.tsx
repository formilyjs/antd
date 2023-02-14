import { FormButtonGroup, FormItem, Submit, Transfer } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Transfer,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="transfer"
          title="穿梭框"
          x-decorator="FormItem"
          x-component="Transfer"
          enum={[
            { title: '选项1', key: 1 },
            { title: '选项2', key: 2 },
          ]}
          x-component-props={{
            render: (item) => item.title ?? null,
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
