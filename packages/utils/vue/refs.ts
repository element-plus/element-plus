import type { ComponentPublicInstance, Ref } from 'vue'

export const composeRefs = (...refs: Ref<HTMLElement | undefined>[]) => {
  return (el: Element | ComponentPublicInstance | null) => {
    refs.forEach((ref) => {
      ref.value = el as HTMLElement | undefined
    })
  }
}
