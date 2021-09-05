import { watch } from 'vue'
import { on, off } from '@element-plus/utils/dom'

import type { Ref } from 'vue'

export default (
  indicator: Ref<boolean>,
  evt: string,
  cb: (e: Event) => boolean
) => {
  const prevent = (e: Event) => {
    if (cb(e)) {
      e.stopImmediatePropagation()
    }
  }
  watch(
    () => indicator.value,
    (val) => {
      if (val) {
        on(document, evt, prevent, true)
      } else {
        off(document, evt, prevent, true)
      }
    },
    { immediate: true }
  )
}
