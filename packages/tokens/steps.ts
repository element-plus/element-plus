import type { StepItemState, StepsProps } from '@element-plus/components'
import type { InjectionKey, Ref } from 'vue'
export interface StepsContext {
  props: StepsProps
  steps: Ref<StepItemState[]>
}

export const stepsContextKey: InjectionKey<StepsContext> =
  Symbol('stepsContextKey')
