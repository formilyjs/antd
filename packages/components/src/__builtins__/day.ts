import { isArr, isFn, isEmpty } from '@formily/shared'
import dayjs from 'dayjs'

export const dayjsable = (value: any, format?: string) => {
  return Array.isArray(value)
    ? value.map((val) => dayjs(val, format))
    : value
    ? dayjs(value, format)
    : value
}

export const formatDayjsValue = (
  value: any,
  format: any,
  placeholder?: string
): string | string[] => {
  const formatDate = (date: any, format: any, i = 0) => {
    if (!date) return placeholder
    if (isArr(format)) {
      const _format = format[i]
      if (isFn(_format)) {
        return _format(date)
      }
      if (isEmpty(_format)) {
        return date
      }
      if (typeof date === 'number') {
        return dayjs(date).format(_format)
      }
      return dayjs(date, _format).format(_format)
    } else {
      if (isFn(format)) {
        return format(date)
      }
      if (isEmpty(format)) {
        return date
      }
      if (typeof date === 'number') {
        return dayjs(date).format(format)
      }
      return dayjs(date, format).format(format)
    }
  }
  if (isArr(value)) {
    return value.map((val, index) => {
      return formatDate(val, format, index)
    })
  } else {
    return value ? formatDate(value, format) : value || placeholder
  }
}
