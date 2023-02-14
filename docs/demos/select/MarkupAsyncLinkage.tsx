import React from 'react'
import { Select, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm, onFieldReact, FormPathPattern, Field } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { action } from '@formily/reactive'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const useAsyncDataSource = (
  pattern: FormPathPattern,
  service: (field: Field) => Promise<{ label: string; value: any }[]>
) => {
  onFieldReact(pattern, (field: Field) => {
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
      <SchemaField>
        <SchemaField.Number
          name="linkage"
          title="Linkage selection box"
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: 'Request 1', value: 1 },
            { label: 'Request 2', value: 2 },
          ]}
          x-component-props={{
            style: {
              width: 120,
            },
          }}
        />
        <SchemaField.String
          name="select"
          title="Asynchronous select box"
          x-decorator="FormItem"
          x-component="Select"
          x-component-props={{
            style: {
              width: 120,
            },
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
