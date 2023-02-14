import { DatePicker, FormButtonGroup, FormItem, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    DatePicker,
    FormItem,
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
          title="普通日期"
          x-decorator="FormItem"
          x-component="DatePicker"
        />
        <SchemaField.String
          name="week"
          title="周选择"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'week',
          }}
        />
        <SchemaField.String
          name="month"
          title="月选择"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'month',
          }}
        />
        <SchemaField.String
          name="quarter"
          title="财年选择"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'quarter',
          }}
        />
        <SchemaField.String
          name="year"
          title="年选择"
          x-decorator="FormItem"
          x-component="DatePicker"
          x-component-props={{
            picker: 'year',
          }}
        />
        <SchemaField.String
          name="[startDate,endDate]"
          title="日期范围"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            showTime: true,
          }}
        />
        <SchemaField.String
          name="range_week"
          title="周范围选择"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'week',
          }}
        />
        <SchemaField.String
          name="range_month"
          title="月范围选择"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'month',
          }}
        />
        <SchemaField.String
          name="range_quarter"
          title="财年范围选择"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'quarter',
          }}
        />
        <SchemaField.String
          name="range_year"
          title="年范围选择"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
          x-component-props={{
            picker: 'year',
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
