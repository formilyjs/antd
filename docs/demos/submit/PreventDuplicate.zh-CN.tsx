import { FormButtonGroup, FormItem, Input, Submit } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

const Demo = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="input"
          title="输入框"
          required
          x-decorator="FormItem"
          x-component="Input"
        />
        <SchemaField.String
          name="input2"
          title="输入框"
          default="123"
          required
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit
          onSubmit={(values) => {
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                console.log(values)
                resolve()
              }, 2000)
            })
          }}
          onSubmitFailed={console.log}
        >
          提交
        </Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
