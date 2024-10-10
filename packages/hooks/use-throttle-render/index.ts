import { onMounted, ref, watch } from 'vue'
import type { SkeletonThrottle } from '@element-plus/components'

import type { Ref } from 'vue'

export const useThrottleRender = (
  loading: Ref<boolean>,
  throttle: SkeletonThrottle = 0
) => {
  if (throttle === 0) return loading
  const initVal =
    typeof throttle === 'object' ? throttle.initVal ?? false : false
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

  const leadingDispatch = () => {
    if (typeof throttle === 'number') {
      dispatchThrottling(throttle)
    } else if (
      typeof throttle === 'object' &&
      throttle.leading &&
      throttle.leading > 0
    ) {
      dispatchThrottling(throttle.leading)
    }
  }

  const trailingDispatch = () => {
    if (
      typeof throttle === 'object' &&
      throttle.trailing &&
      throttle.trailing > 0
    ) {
      dispatchThrottling(throttle.trailing)
    } else {
      throttled.value = false
    }
  }

  onMounted(leadingDispatch)

  watch(
    () => loading.value,
    (val) => {
      if (val) {
        leadingDispatch()
      } else {
        trailingDispatch()
      }
    }
  )
  return throttled
}
