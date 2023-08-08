import type { Dayjs } from 'dayjs'

const isEmpty = <T>(value: T) => {
  return !value || (Array.isArray(value) && !value.filter(Boolean).length)
}

export const useOldTimeValue = () => {
  let oldValue: any

  const getOldValue = <T>(value: T, visible: boolean): Dayjs => {
    if (!oldValue && !isEmpty(value)) {
      oldValue = value
    } else if (oldValue && isEmpty(value)) {
      value = oldValue
    }
    if (!visible) {
      oldValue = undefined
    }
    return value as any
  }

  return {
    getOldValue,
  }
}
