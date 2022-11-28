import { ArrayField } from '@formily/core'
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react'
import cls from 'classnames'
import React, { createContext } from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { ISchema } from '@formily/json-schema'
import { ArrayBase } from '../array-base'
import { usePrefixCls } from '../__builtins__'
import useStyle from './style'

export const ListenersContext = createContext<
  ReturnType<typeof useSortable>['listeners']
>({})

const SortableItem: ReactFC<
  React.HTMLAttributes<HTMLDivElement> & { index?: number }
> = (props) => {
  const prefixCls = usePrefixCls('formily-array-items')
  const [wrapSSR, hashId] = useStyle(prefixCls)

  return wrapSSR(
    <ArrayBase.SortItem
      {...props}
      className={cls(`${prefixCls}-item`, hashId, props.className)}
    >
      {props.children}
    </ArrayBase.SortItem>
  )
}

interface ISortableProps extends React.HTMLAttributes<HTMLDivElement> {
  onSortEnd: (event: DragEndEvent) => void
}

const SortableList: ReactFC<ISortableProps> = ({ onSortEnd, ...props }) => {
  const prefixCls = usePrefixCls('formily-array-items')
  const [wrapSSR, hashId] = useStyle(prefixCls)
  return wrapSSR(
    <DndContext onDragEnd={onSortEnd}>
      <div
        {...props}
        className={cls(`${prefixCls}-list`, hashId, props.className)}
      >
        {props.children}
      </div>
    </DndContext>
  )
}

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const useAddition = () => {
  const schema = useFieldSchema()
  return schema.reduceProperties((addition, schema, key) => {
    if (isAdditionComponent(schema)) {
      return <RecursionField schema={schema} name={key} />
    }
    return addition
  }, null)
}

const InternalArrayItems: ReactFC<React.HTMLAttributes<HTMLDivElement>> =
  observer((props) => {
    const field = useField<ArrayField>()
    const prefixCls = usePrefixCls('formily-array-items')
    const [wrapSSR, hashId] = useStyle(prefixCls)
    const schema = useFieldSchema()
    const addition = useAddition()
    const dataSource = Array.isArray(field.value) ? field.value : []
    if (!schema) throw new Error('can not found schema object')
    return wrapSSR(
      <ArrayBase>
        <div
          {...props}
          onChange={() => {}}
          className={cls(prefixCls, hashId, props.className)}
        >
          <SortableList
            className={`${prefixCls}-sort-helper`}
            onSortEnd={(event) => {
              const { active, over } = event
              field.move(
                (active.id as number) - 1,
                ((over?.id as number) - 1) as number
              )
            }}
          >
            <SortableContext
              items={dataSource?.map((item, index) => {
                return index + 1
              })}
            >
              {dataSource?.map((item, index) => {
                const items = Array.isArray(schema.items)
                  ? schema.items[index] || schema.items[0]
                  : schema.items
                return (
                  <ArrayBase.Item
                    key={index}
                    index={index}
                    record={() => field.value?.[index]}
                  >
                    <SortableItem key={`item-${index}`} index={index + 1}>
                      <div className={`${prefixCls}-item-inner`}>
                        {items ? (
                          <RecursionField schema={items} name={index} />
                        ) : null}
                      </div>
                    </SortableItem>
                  </ArrayBase.Item>
                )
              })}
            </SortableContext>
          </SortableList>
          {addition}
        </div>
      </ArrayBase>
    )
  })

const Item: ReactFC<
  React.HTMLAttributes<HTMLDivElement> & {
    type?: 'card' | 'divide'
  }
> = (props) => {
  const prefixCls = usePrefixCls('formily-array-items')
  const [wrapSSR, hashId] = useStyle(prefixCls)
  return wrapSSR(
    <div
      {...props}
      onChange={() => {}}
      className={cls(
        `${prefixCls}-${props.type || 'card'}`,
        hashId,
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

export const ArrayItems = Object.assign(ArrayBase.mixin(InternalArrayItems), {
  Item,
})

ArrayItems.displayName = 'ArrayItems'

export default ArrayItems
