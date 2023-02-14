import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Input,
  Space,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import React from 'react'

const SchemaField = createSchemaField({
  components: { Space, Input, FormItem },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={16}>
        <SchemaField>
          <SchemaField.Void
            title="name"
            x-decorator="FormItem"
            x-decorator-props={{
              asterisk: true,
              feedbackLayout: 'none',
            }}
            x-component="Space"
          >
            <SchemaField.String
              name="firstName"
              x-decorator="FormItem"
              x-component="Input"
              required
            />
            <SchemaField.String
              name="lastName"
              x-decorator="FormItem"
              x-component="Input"
              required
            />
          </SchemaField.Void>
          <SchemaField.Void
            title="Text concatenation"
            x-decorator="FormItem"
            x-decorator-props={{
              asterisk: true,
              feedbackLayout: 'none',
            }}
            x-component="Space"
          >
            <SchemaField.String
              name="aa"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: 'Unit',
              }}
              required
            />
            <SchemaField.String
              name="bb"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: 'Unit',
              }}
              required
            />
            <SchemaField.String
              name="cc"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: 'Unit',
              }}
              required
            />
          </SchemaField.Void>
          <SchemaField.String
            name="textarea"
            title="text box"
            x-decorator="FormItem"
            required
            x-component="Input.TextArea"
            x-component-props={{
              style: {
                width: 400,
              },
            }}
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>Submit</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
