import type { ComponentPublicInstance, Ref } from 'vue'

export const composeRefs = (...refs: Ref<HTMLElement | null>[]) => {
  return (el: Element | ComponentPublicInstance | null) => {
    refs.forEach((ref) => {
      ref.value = el as HTMLElement | null
    })
  }
}
