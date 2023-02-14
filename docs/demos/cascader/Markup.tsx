import { Cascader, FormButtonGroup, FormItem, Submit } from '@formily/antd-v5'
import {
  createForm,
  Field,
  FieldDataSource,
  FormPathPattern,
  onFieldReact,
} from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import { action } from '@formily/reactive'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Cascader,
  },
})

interface AddressInfo {
  code: string
  name: string
  cities?: Record<string, AddressInfo>
  districts?: Record<string, string>
}

const useAddress = (pattern: FormPathPattern) => {
  const transform = (data: Record<string, AddressInfo | string> = {}) => {
    return Object.entries(data).reduce<FieldDataSource>((buf, [key, value]) => {
      if (typeof value === 'string')
        return buf.concat({
          label: value,
          value: key,
        })
      const { name, code, cities, districts } = value
      const _cities = transform(cities)
      const _districts = transform(districts)
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
  onFieldReact(pattern, (field: Field) => {
    field.loading = true
    fetch('//unpkg.com/china-location/dist/location.json')
      .then((res) => res.json())
      .then(
        action.bound?.((data) => {
          field.dataSource = transform(data)
          field.loading = false
        })
      )
  })
}

const form = createForm({
  effects: () => {
    useAddress('address')
  },
})

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="address"
          title="Address Selection"
          required
          x-decorator="FormItem"
          x-component="Cascader"
          x-component-props={{
            style: {
              width: 240,
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
