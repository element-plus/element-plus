import { onMounted, ref, watch } from 'vue'
import { isNumber, isObject, isUndefined } from '@element-plus/utils'

import type { Ref } from 'vue'

export type ThrottleType =
  | { leading?: number; trailing?: number; initVal?: boolean }
  | number

export const useThrottleRender = (
  loading: Ref<boolean>,
  throttle: ThrottleType = 0
) => {
  if (throttle === 0) return loading
  const initVal = isObject(throttle) && Boolean(throttle.initVal)
  const throttled = ref(initVal)
  let timeoutHandle: ReturnType<typeof setTimeout> | null = null

  const dispatchThrottling = (timer: number | undefined) => {
    if (isUndefined(timer)) {
      throttled.value = loading.value
      return
    }
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    timeoutHandle = setTimeout(() => {
      throttled.value = loading.value
    }, timer)
  }

  const dispatcher = (type: 'leading' | 'trailing') => {
    if (type === 'leading') {
      if (isNumber(throttle)) {
        dispatchThrottling(throttle)
      } else {
        dispatchThrottling(throttle.leading)
      }
    } else {
      if (isObject(throttle)) {
        dispatchThrottling(throttle.trailing)
      } else {
        throttled.value = false
      }
    }
  }

  onMounted(() => dispatcher('leading'))

  watch(
    () => loading.value,
    (val) => {
      dispatcher(val ? 'leading' : 'trailing')
    }
  )

  return throttled
}
