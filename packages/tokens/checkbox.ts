import type { InjectionKey, WritableComputedRef } from 'vue'

import type { CheckboxGroupProps } from '@element-plus/components'

type CheckboxGroupContext = {
  props: Omit<CheckboxGroupProps, 'modelValue' | 'label' | 'tag'>
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
