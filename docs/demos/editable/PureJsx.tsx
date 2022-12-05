import {
  DatePicker,
  Editable,
  FormButtonGroup,
  FormItem,
  Input,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { Field, FormProvider, ObjectField, VoidField } from '@formily/react'
import React from 'react'

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="date"
        title="date"
        decorator={[Editable]}
        component={[DatePicker]}
      />
      <Field
        name="input"
        title="input box"
        decorator={[Editable]}
        component={[Input]}
      />
      <VoidField
        name="void"
        title="Virtual Node Container"
        reactions={(field) => {
          field.title = field.query('.void.date2').get('value') || field.title
        }}
        component={[Editable.Popover]}
      >
        <Field
          name="date2"
          title="date"
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="input2"
          title="input box"
          decorator={[FormItem]}
          component={[Input]}
        />
      </VoidField>
      <ObjectField
        name="iobject"
        title="Object node container"
        reactions={(field) => {
          field.title = field.value?.date || field.title
        }}
        component={[Editable.Popover]}
      >
        <Field
          name="date"
          title="date"
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="input"
          title="input box"
          decorator={[FormItem]}
          component={[Input]}
        />
      </ObjectField>

      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
