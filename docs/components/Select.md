# Select

> Drop-down box components

## Markup Schema synchronization data source case

<code src="../demos/select/MarkupSync.tsx"/>

## Markup Schema Asynchronous Search Case

<code src="../demos/select/MarkupAsync.tsx"/>

## Markup Schema Asynchronous Linkage Data Source Case

<code src="../demos/select/MarkupAsyncLinkage.tsx"/>

## JSON Schema synchronization data source case

<code src="../demos/select/SchemaSync.tsx"/>

## JSON Schema asynchronous linkage data source case

```tsx
import React from 'react'
import { Select, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { action } from '@formily/reactive'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const loadData = async (field) => {
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
}

const useAsyncDataSource = (service) => (field) => {
  field.loading = true
  service(field).then(
    action.bound((data) => {
      field.dataSource = data
      field.loading = false
    })
  )
}

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    linkage: {
      type: 'string',
      title: 'Linkage selection box',
      enum: [
        { label: 'Request 1', value: 1 },
        { label: 'Request 2', value: 2 },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: {
          width: 120,
        },
      },
    },
    select: {
      type: 'string',
      title: 'Asynchronous selection box',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: {
          width: 120,
        },
      },
      'x-reactions': ['{{useAsyncDataSource(loadData)}}'],
    },
  },
}

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} scope={{ useAsyncDataSource, loadData }} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

<code src="../demos/select/SchemaAsync.tsx"/>

## Pure JSX synchronization data source case

<code src="../demos/select/PureJsxSync.tsx"/>

## Pure JSX asynchronous linkage data source case

<code src="../demos/select/SchemaAsync.tsx"/>

## API

Reference <https://ant.design/components/select/>
