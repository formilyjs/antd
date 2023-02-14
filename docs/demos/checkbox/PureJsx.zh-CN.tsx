import { Checkbox, FormButtonGroup, FormItem, Submit } from '@formily/antd-v5'
import {
  createForm,
  Field as FieldType,
  FieldDataSource,
  FormPathPattern,
  onFieldReact,
} from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import { action } from '@formily/reactive'
import React from 'react'

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
        name="single"
        title="是否确认"
        decorator={[FormItem]}
        component={[Checkbox]}
      />
      <Field
        name="multiple"
        title="Check"
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
        decorator={[FormItem]}
        component={[Checkbox.Group]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Demo
