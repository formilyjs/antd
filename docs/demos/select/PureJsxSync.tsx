import React from 'react'
import { Select, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

const form = createForm()

const Demo = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="select"
        title="select box"
        dataSource={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
        decorator={[FormItem]}
        component={[
          Select,
          {
            style: {
              width: 120,
            },
          },
        ]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
