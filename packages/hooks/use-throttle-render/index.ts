import { ref, watch } from 'vue'

import type { Ref } from 'vue'

export const useThrottleRender = (loading: Ref<boolean>, throttle = 0) => {
  if (throttle === 0) return loading
  const throttled = ref(loading.value)
  let timeoutHandle = 0

  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value
    }, throttle)
  }

  watch(
    () => loading.value,
    () => {
      dispatchThrottling()
    }
  )
  return throttled
}
