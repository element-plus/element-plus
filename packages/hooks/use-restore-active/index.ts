import { isRef, watch } from 'vue'

import type { Ref } from 'vue'

/**
 * This method provides dialoggable components the ability to restore previously activated element before
 * the dialog gets opened
 */
export default (toggle: Ref<boolean>, initialFocus?: Ref<HTMLElement>) => {
  let previousActive: Element

  watch(() => toggle.value, val => {
    if (val) {
      previousActive = document.activeElement
      if (isRef(initialFocus)) {
        initialFocus.value.focus?.()
      }
    } else {
      (previousActive as HTMLElement).focus?.()
    }
  })
}
