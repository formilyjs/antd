import {
  DatePicker,
  Editable,
  FormButtonGroup,
  FormItem,
  Input,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Field, FormProvider, ObjectField, VoidField } from '@formily/react'
import React from 'react'

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="date"
        title="日期"
        decorator={[Editable]}
        component={[DatePicker]}
      />
      <Field
        name="input"
        title="输入框"
        decorator={[Editable]}
        component={[Input]}
      />
      <VoidField
        name="void"
        title="虚拟节点容器"
        reactions={(field) => {
          field.title = field.query('.void.date2').get('value') || field.title
        }}
        component={[Editable.Popover]}
      >
        <Field
          name="date2"
          title="日期"
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="input2"
          title="输入框"
          decorator={[FormItem]}
          component={[Input]}
        />
      </VoidField>
      <ObjectField
        name="iobject"
        title="对象节点容器"
        reactions={(field) => {
          field.title = field.value?.date || field.title
        }}
        component={[Editable.Popover]}
      >
        <Field
          name="date"
          title="日期"
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="input"
          title="输入框"
          decorator={[FormItem]}
          component={[Input]}
        />
      </ObjectField>

      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
