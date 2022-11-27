import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Input,
  Space,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { Field, FormProvider, VoidField } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={16}>
        <VoidField
          name="name"
          title="name"
          decorator={[
            FormItem,
            {
              asterisk: true,
              feedbackLayout: 'none',
            },
          ]}
          component={[Space]}
        >
          <Field
            name="firstName"
            decorator={[FormItem]}
            component={[Input]}
            required
          />
          <Field
            name="lastName"
            decorator={[FormItem]}
            component={[Input]}
            required
          />
        </VoidField>
        <VoidField
          name="texts"
          title="Text concatenation"
          decorator={[
            FormItem,
            {
              asterisk: true,
              feedbackLayout: 'none',
            },
          ]}
          component={[Space]}
        >
          <Field
            name="aa"
            decorator={[
              FormItem,
              {
                addonAfter: 'Unit',
              },
            ]}
            component={[Input]}
            required
          />
          <Field
            name="bb"
            decorator={[
              FormItem,
              {
                addonAfter: 'Unit',
              },
            ]}
            component={[Input]}
            required
          />
          <Field
            name="cc"
            decorator={[
              FormItem,
              {
                addonAfter: 'Unit',
              },
            ]}
            component={[Input]}
            required
          />
        </VoidField>
        <Field
          name="textarea"
          title="text box"
          decorator={[FormItem]}
          component={[
            Input.TextArea,
            {
              style: {
                width: 400,
              },
            },
          ]}
          required
        />
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>Submit</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
