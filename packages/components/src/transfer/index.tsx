import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/react'
import { Transfer as AntdTransfer } from 'antd'

const renderTitle = (item) => item.title ?? null
export const Transfer = connect(
  AntdTransfer,
  mapProps(
    {
      value: 'targetKeys',
    },
    (props, field) => {
      if (isVoidField(field)) return props
      return {
        ...props,
        render: props.render || renderTitle,
        dataSource:
          field.dataSource?.map((item) => {
            return {
              ...item,
              title: item.title || item.label,
              key: item.key || item.value,
            }
          }) || [],
      }
    }
  )
)

export default Transfer
