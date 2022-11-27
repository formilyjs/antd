import { FormButtonGroup, FormItem, Submit, TimePicker } from '@formily/antd'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="time"
        title="time"
        decorator={[FormItem]}
        component={[TimePicker]}
      />
      <Field
        name="[startTime,endTime]"
        title="time range"
        decorator={[FormItem]}
        component={[TimePicker.RangePicker]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
