import {
  DatePicker,
  Editable,
  FormButtonGroup,
  FormItem,
  Input,
  Submit,
} from '@formily/antd'
import { createForm, ObjectField } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    DatePicker,
    Editable,
    Input,
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
          title="date"
          x-decorator="Editable"
          x-component="DatePicker"
        />
        <SchemaField.String
          name="input"
          title="input box"
          x-decorator="Editable"
          x-component="Input"
        />
        <SchemaField.Void
          name="void"
          title="Virtual Node Container"
          x-component="Editable.Popover"
          x-reactions={(field) => {
            field.title = field.query('.void.date2').get('value') || field.title
          }}
        >
          <SchemaField.String
            name="date2"
            title="date"
            x-decorator="FormItem"
            x-component="DatePicker"
          />
          <SchemaField.String
            name="input2"
            title="input box"
            x-decorator="FormItem"
            x-component="Input"
          />
        </SchemaField.Void>
        <SchemaField.Object
          name="iobject"
          title="Object node container"
          x-component="Editable.Popover"
          x-reactions={(field: ObjectField) => {
            field.title = field.value?.date || field.title
          }}
        >
          <SchemaField.String
            name="date"
            title="date"
            x-decorator="FormItem"
            x-component="DatePicker"
          />
          <SchemaField.String
            name="input"
            title="input box"
            x-decorator="FormItem"
            x-component="Input"
          />
        </SchemaField.Object>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
