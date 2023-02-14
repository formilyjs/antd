import React from 'react'
import { Cascader, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm, FieldDataSource, Field } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { action } from '@formily/reactive'

const SchemaField = createSchemaField({
  components: {
    Cascader,
    FormItem,
  },
})

interface AddressInfo {
  code: string
  name: string
  cities?: Record<string, AddressInfo>
  districts?: Record<string, string>
}

const transformAddress = (data: Record<string, AddressInfo | string> = {}) => {
  return Object.entries(data).reduce<FieldDataSource>((buf, [key, value]) => {
    if (typeof value === 'string')
      return buf.concat({
        label: value,
        value: key,
      })
    const { name, code, cities, districts } = value
    const _cities = transformAddress(cities)
    const _districts = transformAddress(districts)
    return buf.concat({
      label: name,
      value: code,
      children: _cities.length
        ? _cities
        : _districts.length
        ? _districts
        : undefined,
    })
  }, [])
}

const useAsyncDataSource =
  (url: string, transform: (data: any) => any) => (field: Field) => {
    field.loading = true
    fetch(url)
      .then((res) => res.json())
      .then(
        action.bound?.((data) => {
          field.dataSource = transform(data)
          field.loading = false
        })
      )
  }

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    address: {
      type: 'string',
      title: 'Address Selection',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-component-props': {
        style: {
          width: 240,
        },
      },
      'x-reactions': [
        '{{useAsyncDataSource("//unpkg.com/china-location/dist/location.json",transformAddress)}}',
      ],
    },
  },
}

const Demo = () => {
  return (
    <FormProvider form={form}>
      <SchemaField
        schema={schema}
        scope={{ useAsyncDataSource, transformAddress }}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
