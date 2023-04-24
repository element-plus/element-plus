import { isFunction } from '../types'

import type { ComponentPublicInstance, Ref } from 'vue'

export type RefSetter = (
  el: Element | ComponentPublicInstance | undefined
) => void

export const composeRefs = (
  ...refs: (Ref<HTMLElement | undefined> | RefSetter)[]
) => {
  return (el: Element | ComponentPublicInstance | null) => {
    refs.forEach((ref) => {
      if (isFunction(ref)) {
        ref(el as Element | ComponentPublicInstance)
      } else {
        ref.value = el as HTMLElement | undefined
      }
    })
  }
}
