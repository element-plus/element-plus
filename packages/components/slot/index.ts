import type { Ref } from 'vue'
export { default as ElSlot } from './src/slot'
export { default } from './src/slot'

export type ElSlotExpose = {
  forwardRef: Ref<HTMLElement>
}
