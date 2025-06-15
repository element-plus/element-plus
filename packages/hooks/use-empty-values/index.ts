import { computed, getCurrentInstance, inject, ref } from 'vue'
import { buildProps, debugWarn, isFunction } from '@element-plus/utils'

import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'

type EmptyValuesContext = ExtractPropTypes<typeof useEmptyValuesProps>

export const emptyValuesContextKey: InjectionKey<Ref<EmptyValuesContext>> =
  Symbol('emptyValuesContextKey')
export const SCOPE = 'use-empty-values'
export const DEFAULT_EMPTY_VALUES = ['', undefined, null]
export const DEFAULT_VALUE_ON_CLEAR = undefined

export const useEmptyValuesProps = buildProps({
  /**
   * @description empty values supported by the component
   */
  emptyValues: Array,
  /**
   * @description return value when cleared, if you want to set `undefined`, use `() => undefined`
   */
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: undefined,
    validator: (val: any) => (isFunction(val) ? !val() : !val),
  },
} as const)

export const useEmptyValues = (
  props: EmptyValuesContext,
  defaultValue?: null | undefined
) => {
  const config = getCurrentInstance()
    ? inject(emptyValuesContextKey, ref<EmptyValuesContext>({}))
    : ref<EmptyValuesContext>({})

  const emptyValues = computed(
    () => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES
  )

  const valueOnClear = computed(() => {
    // function is used for undefined cause undefined can't be a value of prop
    if (isFunction(props.valueOnClear)) {
      return props.valueOnClear()
    } else if (props.valueOnClear !== undefined) {
      return props.valueOnClear
    } else if (isFunction(config.value.valueOnClear)) {
      return config.value.valueOnClear()
    } else if (config.value.valueOnClear !== undefined) {
      return config.value.valueOnClear
    }
    return defaultValue !== undefined ? defaultValue : DEFAULT_VALUE_ON_CLEAR
  })

  const isEmptyValue = (value: any) => {
    return emptyValues.value.includes(value)
  }

  if (!emptyValues.value.includes(valueOnClear.value)) {
    debugWarn(SCOPE, 'value-on-clear should be a value of empty-values')
  }

  return {
    emptyValues,
    valueOnClear,
    isEmptyValue,
  }
}
