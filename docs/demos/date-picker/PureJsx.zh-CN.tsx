import { DatePicker, FormButtonGroup, FormItem, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="date"
        title="日期选择"
        decorator={[FormItem]}
        component={[DatePicker]}
      />
      <Field
        name="week"
        title="周选择"
        decorator={[FormItem]}
        component={[
          DatePicker,
          {
            picker: 'week',
          },
        ]}
      />
      <Field
        name="quarter"
        title="财年选择"
        decorator={[FormItem]}
        component={[
          DatePicker,
          {
            picker: 'month',
          },
        ]}
      />
      <Field
        name="year"
        title="年选择"
        decorator={[FormItem]}
        component={[
          DatePicker,
          {
            picker: 'year',
          },
        ]}
      />
      <Field
        name="[startDate,endDate]"
        title="日期范围选择"
        decorator={[FormItem]}
        component={[DatePicker.RangePicker]}
      />
      <Field
        name="range_week"
        title="周范围选择"
        decorator={[FormItem]}
        component={[
          DatePicker.RangePicker,
          {
            picker: 'week',
          },
        ]}
      />
      <Field
        name="range_month"
        title="月范围选择"
        decorator={[FormItem]}
        component={[
          DatePicker.RangePicker,
          {
            picker: 'month',
          },
        ]}
      />
      <Field
        name="range_quarter"
        title="财年范围选择"
        decorator={[FormItem]}
        component={[
          DatePicker.RangePicker,
          {
            picker: 'quarter',
          },
        ]}
      />
      <Field
        name="range_year"
        title="年范围选择"
        decorator={[FormItem]}
        component={[
          DatePicker.RangePicker,
          {
            picker: 'year',
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
