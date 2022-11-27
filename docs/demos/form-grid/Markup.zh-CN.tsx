import {
  FormButtonGroup,
  FormGrid,
  FormItem,
  Input,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    FormGrid,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 3,
            minColumns: 2,
          }}
        >
          <SchemaField.String
            name="aaa"
            title="aaa"
            x-decorator="FormItem"
            x-decorator-props={{ gridSpan: 2 }}
            x-component="Input"
          />
          <SchemaField.String
            name="bbb"
            title="bbb"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.String
            name="ccc"
            title="ccc"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.String
            name="ddd"
            title="ddd"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.String
            name="eee"
            title="eee"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.String
            name="fff"
            title="fff"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.String
            name="ggg"
            title="ggg"
            x-decorator="FormItem"
            x-component="Input"
          />
        </SchemaField.Void>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
