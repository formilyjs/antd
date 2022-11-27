import { FormButtonGroup, FormItem, Submit, Transfer } from '@formily/antd'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="transfer"
        title="穿梭框"
        dataSource={[
          { title: '选项1', key: 1 },
          { title: '选项2', key: 2 },
        ]}
        decorator={[FormItem]}
        component={[
          Transfer,
          {
            render: (item) => item.title,
          },
        ]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
