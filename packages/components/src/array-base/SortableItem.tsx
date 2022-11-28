import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ReactFC } from '@formily/reactive-react'

export interface ISortableItemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  id: string
}

export const SortableItem: ReactFC<ISortableItemProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <span ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </span>
  )
}
