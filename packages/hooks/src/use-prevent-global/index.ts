import { watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import type { Ref } from 'vue'

export const usePreventGlobal = <E extends keyof DocumentEventMap>(
  indicator: Ref<boolean>,
  evt: E,
  cb: (e: DocumentEventMap[E]) => boolean
) => {
  const prevent = (e: DocumentEventMap[E]) => {
    if (cb(e)) e.stopImmediatePropagation()
  }
  let stop: (() => void) | undefined = undefined
  watch(
    () => indicator.value,
    (val) => {
      if (val) {
        stop = useEventListener(document, evt, prevent, true)
      } else {
        stop?.()
      }
    },
    { immediate: true }
  )
}
