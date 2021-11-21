import type { SliderContext } from '@element-plus/components'
import type { InjectionKey } from 'vue'

export const sliderContextKey: InjectionKey<SliderContext> =
  Symbol('sliderContextKey')
