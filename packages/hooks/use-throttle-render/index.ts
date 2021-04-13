import { onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'

export default function(
  loading: Ref<boolean>,
  throttle = 0,
) {

  if (throttle === 0) return loading
  const throttled = ref(false)
  let timeoutHandle: TimeoutHandle = 0

  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value
    }, throttle)
  }
  onMounted(dispatchThrottling)

  watch(() => loading.value, val => {
    if (val) {
      dispatchThrottling()
    } else {
      throttled.value = val
    }
  })
  return throttled
}
