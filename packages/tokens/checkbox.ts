import type { ComputedRef, InjectionKey } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

interface CheckboxGroupContext {
  size?: ComputedRef<ComponentSize>
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
