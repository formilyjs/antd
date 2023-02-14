import React from 'react'
import {
  Input,
  Select,
  Form,
  FormItem,
  FormGrid,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Field } from '@formily/react'

const form = createForm()
const Demo = () => {
  return (
    <Form
      form={form}
      layout="vertical"
      feedbackLayout="terse"
      onAutoSubmit={console.log}
      onAutoSubmitFailed={console.log}
    >
      <FormGrid maxColumns={4}>
        <Field
          name="aa"
          title="选择框"
          decorator={[FormItem]}
          component={[Select]}
          dataSource={[
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ]}
        />
        <Field
          name="bb"
          title="输入框"
          required
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="cc"
          title="输入框"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="dd"
          title="输入框"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="ee"
          title="输入框"
          decorator={[FormItem]}
          component={[Input]}
        />
        <FormButtonGroup.FormItem>
          <Submit>查询</Submit>
        </FormButtonGroup.FormItem>
      </FormGrid>
    </Form>
  )
}

export default Demo
