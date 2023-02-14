import React from 'react'
import { Select, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import {
  createForm,
  onFieldReact,
  FormPathPattern,
  Field as FieldType,
} from '@formily/core'
import { FormProvider, Field } from '@formily/react'
import { action } from '@formily/reactive'

const useAsyncDataSource = (
  pattern: FormPathPattern,
  service: (field: FieldType) => Promise<{ label: string; value: any }[]>
) => {
  onFieldReact(pattern, (field: FieldType) => {
    field.loading = true
    service(field).then(
      action.bound?.((data) => {
        field.dataSource = data
        field.loading = false
      })
    )
  })
}

const form = createForm({
  effects: () => {
    useAsyncDataSource('select', async (field) => {
      const linkage = field.query('linkage').get('value')
      if (!linkage) return []
      return new Promise((resolve) => {
        setTimeout(() => {
          if (linkage === 1) {
            resolve([
              {
                label: 'AAA',
                value: 'aaa',
              },
              {
                label: 'BBB',
                value: 'ccc',
              },
            ])
          } else if (linkage === 2) {
            resolve([
              {
                label: 'CCC',
                value: 'ccc',
              },
              {
                label: 'DDD',
                value: 'ddd',
              },
            ])
          }
        }, 1500)
      })
    })
  },
})

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="linkage"
        title="Linkage selection box"
        dataSource={[
          { label: 'Request 1', value: 1 },
          { label: 'Request 2', value: 2 },
        ]}
        decorator={[FormItem]}
        component={[
          Select,
          {
            style: {
              width: 120,
            },
          },
        ]}
      />
      <Field
        name="select"
        title="Asynchronous select box"
        decorator={[FormItem]}
        component={[
          Select,
          {
            style: {
              width: 120,
            },
          },
        ]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
