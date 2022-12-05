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
          title="姓名"
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
          title="文本串联"
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
                addonAfter: '单位',
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
                addonAfter: '单位',
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
                addonAfter: '单位',
              },
            ]}
            component={[Input]}
            required
          />
        </VoidField>
        <Field
          name="textarea"
          title="文本框"
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
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
export default Demo
