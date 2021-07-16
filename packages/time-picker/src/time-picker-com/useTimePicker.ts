import { ref, watch } from 'vue'
import { Dayjs } from 'dayjs'

const makeList = (total, method, methodFunc) => {
  const arr = []
  const disabledArr = method && methodFunc()
  for (let i = 0; i < total; i++) {
    arr[i] = disabledArr ? disabledArr.includes(i) : false
  }
  return arr
}

const makeAvailableArr = list => {
  return list.map((_, index) => !_ ? index : _).filter(_ => _ !== true)
}

export const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare?) => {
    return makeList(24, disabledHours, () => disabledHours(role, compare))
  }

  const getMinutesList = (hour, role, compare?) => {
    return makeList(60, disabledMinutes, () => disabledMinutes(hour, role, compare))
  }

  const getSecondsList = (hour, minute, role, compare?) => {
    return makeList(60, disabledSeconds, () => disabledSeconds(hour, minute, role, compare))
  }

  return {
    getHoursList,
    getMinutesList,
    getSecondsList,
  }
}


export const getAvailableArrs = (disabledHours, disabledMinutes, disabledSeconds) => {
  const {
    getHoursList,
    getMinutesList,
    getSecondsList,
  } = getTimeLists(
    disabledHours,
    disabledMinutes,
    disabledSeconds,
  )

  const getAvailableHours = (role, compare?) => {
    return makeAvailableArr(getHoursList(role, compare))
  }

  const getAvailableMinutes = (hour, role, compare?) => {
    return makeAvailableArr(getMinutesList(hour, role, compare))
  }

  const getAvailableSeconds = (hour, minute, role, compare?) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare))
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

  watch(() => props.visible, val => {
    if (!val) {
      oldValue.value = props.parsedValue
    }
  })

  return oldValue
}
