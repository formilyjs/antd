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
        title="date selection"
        decorator={[FormItem]}
        component={[DatePicker]}
      />
      <Field
        name="week"
        title="Week Selection"
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
        title="Financial Year Selection"
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
        title="Year selection"
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
        title="Date range selection"
        decorator={[FormItem]}
        component={[DatePicker.RangePicker]}
      />
      <Field
        name="range_week"
        title="Week range selection"
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
        title="Month Range Selection"
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
        title="Financial Year Range Selection"
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
        title="Year range selection"
        decorator={[FormItem]}
        component={[
          DatePicker.RangePicker,
          {
            picker: 'year',
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
