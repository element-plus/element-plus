import { Ref } from 'vue'

export default (el: Ref<HTMLElement>) => {
  return {
    focus: () => {
      el.value?.focus?.()
    },
  }
}
