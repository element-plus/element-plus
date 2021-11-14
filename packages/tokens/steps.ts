import type { StepsContext } from '@element-plus/components'
import type { InjectionKey } from 'vue'

export const stepsContextKey: InjectionKey<StepsContext> =
  Symbol('stepsContextKey')
