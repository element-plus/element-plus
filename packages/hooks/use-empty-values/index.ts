import { computed, getCurrentInstance, inject, ref } from 'vue'
import {
  buildProps,
  debugWarn,
  definePropType,
  isArray,
  isFunction,
} from '@element-plus/utils'
import { isEqual } from 'lodash-unified'

import type { InjectionKey, Ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type ValueOnClear = string | number | boolean | Function | null

export interface UseEmptyValuesProps {
  /**
   * @description empty values supported by the component
   */
  emptyValues?: unknown[]
  /**
   * @description return value when cleared, if you want to set `undefined`, use `() => undefined`
   */
  valueOnClear?: ValueOnClear
}

export const emptyValuesContextKey: InjectionKey<Ref<UseEmptyValuesProps>> =
  Symbol('emptyValuesContextKey')
export const SCOPE = 'use-empty-values'
export const DEFAULT_EMPTY_VALUES = ['', undefined, null]
export const DEFAULT_VALUE_ON_CLEAR = undefined

/**
 * @deprecated Removed after 3.0.0, Use `UseEmptyValuesProps` instead.
 */
export const useEmptyValuesProps = buildProps({
  /**
   * @description empty values supported by the component
   */
  emptyValues: Array,
  /**
   * @description return value when cleared, if you want to set `undefined`, use `() => undefined`
   */
  valueOnClear: {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type */
    type: definePropType<string | number | boolean | Function | null>([
      String,
      Number,
      Boolean,
      Function,
    ]),
    default: undefined,
    validator: (val: unknown) => {
      val = isFunction(val) ? val() : val
      if (isArray(val)) {
        return val.every((item) => !item)
      }
      return !val
    },
  },
} as const)

export const useEmptyValues = (
  props: UseEmptyValuesProps,
  defaultValue?: null | undefined
) => {
  const config = getCurrentInstance()
    ? inject(emptyValuesContextKey, ref<UseEmptyValuesProps>({}))
    : ref<UseEmptyValuesProps>({})

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

  const isEmptyValue = (value: unknown) => {
    let result = true
    if (isArray(value)) {
      result = emptyValues.value.some((emptyValue) => {
        return isEqual(value, emptyValue)
      })
    } else {
      result = emptyValues.value.includes(value)
    }
    return result
  }

  if (!isEmptyValue(valueOnClear.value)) {
    debugWarn(SCOPE, 'value-on-clear should be a value of empty-values')
  }

  return {
    emptyValues,
    valueOnClear,
    isEmptyValue,
  }
}
