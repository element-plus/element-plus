import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import type { CheckboxGroupProps } from './checkbox-group'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<
  Pick<
    CheckboxGroupProps,
    'size' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'fill' | 'textColor'
  >
>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
