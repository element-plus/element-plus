import { ref, toValue, watch } from 'vue'
import { makeList } from '../utils'

import type { MaybeRefOrGetter } from 'vue'
import type { Dayjs } from 'dayjs'
import type {
  GetDisabledHours,
  GetDisabledMinutes,
  GetDisabledSeconds,
} from '../common/props'

const makeAvailableArr = (disabledList: boolean[]): number[] => {
  const trueOrNumber = (isDisabled: boolean, index: number) =>
    isDisabled || index

  const getNumber = (predicate: number | true): predicate is number =>
    predicate !== true

  return disabledList.map(trueOrNumber).filter(getNumber)
}

export const getTimeLists = (
  disabledHours?: GetDisabledHours,
  disabledMinutes?: GetDisabledMinutes,
  disabledSeconds?: GetDisabledSeconds
) => {
  const getHoursList = (role: string, compare?: Dayjs) => {
    return makeList(24, disabledHours && (() => disabledHours?.(role, compare)))
  }

  const getMinutesList = (hour: number, role: string, compare?: Dayjs) => {
    return makeList(
      60,
      disabledMinutes && (() => disabledMinutes?.(hour, role, compare))
    )
  }

  const getSecondsList = (
    hour: number,
    minute: number,
    role: string,
    compare?: Dayjs
  ) => {
    return makeList(
      60,
      disabledSeconds && (() => disabledSeconds?.(hour, minute, role, compare))
    )
  }

  return {
    getHoursList,
    getMinutesList,
    getSecondsList,
  }
}

export const buildAvailableTimeSlotGetter = (
  disabledHours: GetDisabledHours,
  disabledMinutes: GetDisabledMinutes,
  disabledSeconds: GetDisabledSeconds
) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(
    disabledHours,
    disabledMinutes,
    disabledSeconds
  )

  const getAvailableHours: GetDisabledHours = (role, compare?) => {
    return makeAvailableArr(getHoursList(role, compare))
  }

  const getAvailableMinutes: GetDisabledMinutes = (hour, role, compare?) => {
    return makeAvailableArr(getMinutesList(hour, role, compare))
  }

  const getAvailableSeconds: GetDisabledSeconds = (
    hour,
    minute,
    role,
    compare?
  ) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare))
  }

  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds,
  }
}

export const useOldValue = (
  props: {
    parsedValue?: string | Dayjs | Dayjs[]
    visible: boolean
  },
  options: {
    modelValue: MaybeRefOrGetter<unknown>
    valueOnClear: MaybeRefOrGetter<unknown>
  }
) => {
  const oldValue = ref(props.parsedValue)

  watch(
    () => props.visible,
    (val) => {
      const modelValue = toValue(options.modelValue)
      const valueOnClear = toValue(options.valueOnClear)
      if (val && modelValue === valueOnClear) {
        oldValue.value = valueOnClear as typeof oldValue.value
        return
      }
      if (!val) {
        oldValue.value = props.parsedValue
      }
    }
  )

  return oldValue
}
