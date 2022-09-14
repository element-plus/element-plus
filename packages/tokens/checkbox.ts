import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'

import type { CheckboxGroupProps } from '@element-plus/components'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<Omit<CheckboxGroupProps, 'modelValue' | 'label' | 'tag'>>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
