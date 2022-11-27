import { FormButtonGroup, FormItem, Submit, Transfer } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Transfer,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="transfer"
          title="shuttle box"
          x-decorator="FormItem"
          x-component="Transfer"
          enum={[
            { title: 'Option 1', key: 1 },
            { title: 'Option 2', key: 2 },
          ]}
          x-component-props={{
            render: (item) => item.title ?? null,
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
