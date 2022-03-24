import { ref, watch } from 'vue'

import type { Dayjs } from 'dayjs'

interface Time {
  hour: number
  minute: number
  second: number
}

const makeList = (list, method, methodFunc) => {
  const disabledArr = method && methodFunc()
  return list.map((item) => {
    return {
      value: item,
      disabled: disabledArr && disabledArr.includes(item),
    }
  })
}

const makeAvailableArr = (list) => {
  return list.filter((_) => _.disabled !== true).map((item) => item.value)
}

export const getAvailableList = (
  start: number[],
  end: number[],
  step: number[]
) => {
  const getList = (start: number, end: number, step: number) => {
    const arr: number[] = []
    for (let i = start; i <= end; i += step) {
      arr.push(i)
    }
    return arr
  }

  return {
    hours: getList(start[0] || 0, end[0] || 23, step[0] || 1),
    minutes: getList(start[1] || 0, end[1] || 59, step[1] || 1),
    seconds: getList(start[2] || 0, end[2] || 59, step[2] || 1),
  }
}

export const getTimeLists = (
  disabledHours,
  disabledMinutes,
  disabledSeconds
) => {
  const getHoursList = (list, role, compare?) => {
    return makeList(list, disabledHours, () => disabledHours(role, compare))
  }

  const getMinutesList = (list, hour, role, compare?) => {
    return makeList(list, disabledMinutes, () =>
      disabledMinutes(hour, role, compare)
    )
  }

  const getSecondsList = (list, hour, minute, role, compare?) => {
    return makeList(list, disabledSeconds, () =>
      disabledSeconds(hour, minute, role, compare)
    )
  }

  return {
    getHoursList,
    getMinutesList,
    getSecondsList,
  }
}

export const getAvailableArrs = (
  start,
  end,
  step,
  disabledHours,
  disabledMinutes,
  disabledSeconds
) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(
    disabledHours,
    disabledMinutes,
    disabledSeconds
  )
  const availableItems = getAvailableList(start, end, step)

  const getAvailableHours = (role, compare?) => {
    return makeAvailableArr(getHoursList(availableItems.hours, role, compare))
  }

  const getAvailableMinutes = (hour, role, compare?) => {
    return makeAvailableArr(
      getMinutesList(availableItems.minutes, hour, role, compare)
    )
  }

  const getAvailableSeconds = (hour, minute, role, compare?) => {
    return makeAvailableArr(
      getSecondsList(availableItems.seconds, hour, minute, role, compare)
    )
  }

  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds,
  }
}

export const useOldValue = (props: {
  parsedValue?: string | Dayjs | Dayjs[]
  visible: boolean
}) => {
  const oldValue = ref(props.parsedValue)

  watch(
    () => props.visible,
    (val) => {
      if (!val) {
        oldValue.value = props.parsedValue
      }
    }
  )

  return oldValue
}
