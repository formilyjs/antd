import { FormButtonGroup, FormItem, Select, Submit } from '@formily/antd-v5'
import {
  createForm,
  Field,
  FieldDataSource,
  FormPathPattern,
  onFieldInit,
  onFieldReact,
} from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import { action, observable } from '@formily/reactive'
import { fetch } from 'mfetch'
import React from 'react'

let timeout: NodeJS.Timeout | null = null
let currentValue: string

function fetchData(value: string, callback: (data: FieldDataSource) => void) {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  function fake() {
    fetch(`https://suggest.taobao.com/sug?q=${value}`, {
      method: 'jsonp',
    })
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d
          const data: FieldDataSource = []
          result.forEach((r: string[]) => {
            data.push({
              value: r[0],
              text: r[0],
            })
          })
          callback(data)
        }
      })
  }

  timeout = setTimeout(fake, 300)
}

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const useAsyncDataSource = (
  pattern: FormPathPattern,
  service: (param: {
    keyword: string
    field: Field
  }) => Promise<FieldDataSource>
) => {
  const keyword = observable.ref('')

  onFieldInit(pattern, (field) => {
    field.setComponentProps({
      onSearch: (value: string) => {
        keyword.value = value
      },
    })
  })

  onFieldReact(pattern, (field: Field) => {
    field.loading = true
    service({ field, keyword: keyword.value }).then(
      action.bound?.((data) => {
        field.dataSource = data
        field.loading = false
      })
    )
  })
}

const form = createForm({
  effects: () => {
    useAsyncDataSource('select', async ({ keyword }) => {
      if (!keyword) {
        return []
      }
      return new Promise<FieldDataSource>((resolve) => {
        fetchData(keyword, resolve)
      })
    })
  },
})

const Demo = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="select"
          title="Asynchronous search select box"
          x-decorator="FormItem"
          x-component="Select"
          x-component-props={{
            showSearch: true,
            filterOption: false,
            style: {
              width: 300,
            },
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
