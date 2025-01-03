import type { InjectionKey } from 'vue'
import type { RadioGroupProps, RadioGroupValueType } from './radio-group'

export interface RadioGroupContext extends RadioGroupProps {
  changeEvent: (val: RadioGroupValueType) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol('radioGroupKey')
