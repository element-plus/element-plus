import type { ComputedRef, InjectionKey, Ref, ToRefs } from 'vue'
import type { Mark } from './composables'
import type { SliderProps } from './slider'

export interface SliderContext extends ToRefs<SliderProps> {
  markList: ComputedRef<Mark[]>
  precision: ComputedRef<number>
  sliderSize: Ref<number>
  emitChange: () => void
  resetSize: () => void
  updateDragging: (val: boolean) => void
}

export const sliderContextKey: InjectionKey<SliderContext> =
  Symbol('sliderContextKey')
