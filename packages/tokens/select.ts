import type {
  OptionGroupContext,
  SelectContext,
} from '@element-plus/components'
import type { InjectionKey } from 'vue'

export const optionGroupContextKey: InjectionKey<OptionGroupContext> = Symbol(
  'optionGroupContextKey'
)

export const selectContextKey: InjectionKey<SelectContext> =
  Symbol('selectContextKey')
