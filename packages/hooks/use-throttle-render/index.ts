import { onMounted, ref, watch } from 'vue'
import { isNumber, isObject } from '@element-plus/utils'

import type { SkeletonThrottle } from '@element-plus/components'
import type { Ref } from 'vue'

export const useThrottleRender = (
  loading: Ref<boolean>,
  throttle: SkeletonThrottle = 0
) => {
  if (throttle === 0) return loading
  const initVal = isObject(throttle) ? throttle.initVal ?? false : false
  const throttled = ref(initVal)
  let timeoutHandle: ReturnType<typeof setTimeout> | null = null

  const dispatchThrottling = (timer: number) => {
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
        if (throttle?.leading && throttle.leading > 0) {
          dispatchThrottling(throttle.leading!)
        }
      }
    } else {
      if (isObject(throttle) && throttle?.trailing && throttle.trailing > 0) {
        dispatchThrottling(throttle.trailing!)
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
