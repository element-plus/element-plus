import type { Ref } from 'vue'
export { default as ElOnlyChild } from './src/only-child'

export type ElOnlyChildExpose = {
  forwardRef: Ref<HTMLElement>
}
