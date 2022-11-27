import { DatePicker, FormButtonGroup, FormItem, Submit } from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="date"
          required
          title="normal date"
          x-decorator="FormItem"
          x-component="DatePicker"
        />
        <SchemaField.String
          name="week"
          title="Week Selection"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'week',
          }}
        />
        <SchemaField.String
          name="month"
          title="Month Selection"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'month',
          }}
        />
        <SchemaField.String
          name="quarter"
          title="Financial Year Selection"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'quarter',
          }}
        />
        <SchemaField.String
          name="year"
          title="Year selection"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'year',
          }}
        />
        <SchemaField.String
          name="[startDate,endDate]"
          title="Date Range"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            showTime: true,
          }}
        />
        <SchemaField.String
          name="range_week"
          title="Week range selection"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'week',
          }}
        />
        <SchemaField.String
          name="range_month"
          title="Month Range Selection"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'month',
          }}
        />
        <SchemaField.String
          name="range_quarter"
          title="Financial Year Range Selection"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'quarter',
          }}
        />
        <SchemaField.String
          name="range_year"
          title="Year range selection"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'year',
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
