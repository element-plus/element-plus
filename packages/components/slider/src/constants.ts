import type { ComputedRef, InjectionKey, Ref, ToRefs } from 'vue'
import type { SliderProps } from './slider'
import type { Mark } from './composables/use-marks'

export interface SliderContext extends ToRefs<SliderProps> {
  precision: ComputedRef<number>
  sliderSize: Ref<number>
  emitChange: () => void
  resetSize: () => void
  updateDragging: (val: boolean) => void
  disabled: ComputedRef<boolean>
  markList: ComputedRef<Mark[]>
}

export const sliderContextKey: InjectionKey<SliderContext> =
  Symbol('sliderContextKey')
