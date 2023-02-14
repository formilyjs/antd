import React from 'react'
import { Cascader, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import {
  createForm,
  onFieldReact,
  FormPathPattern,
  FieldDataSource,
  Field as FieldType,
} from '@formily/core'
import { FormProvider, Field } from '@formily/react'
import { action } from '@formily/reactive'

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
  onFieldReact(pattern, (field: FieldType) => {
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

const Demo = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="address"
        title="Address Selection"
        decorator={[FormItem]}
        component={[
          Cascader,
          {
            style: {
              width: 240,
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
