import { warn } from 'vue'
import { fromPairs, isUndefined } from 'lodash-unified'
import { isArray, isFunction, isObject } from '../../types'
import { hasOwn } from '../../objects'

import type { Prop, PropType } from 'vue'
import type {
  EpProp,
  EpPropConvert,
  EpPropFinalized,
  EpPropInput,
  EpPropMergeType,
  EpPropOptions,
  IfEpProp,
  IfNativePropType,
  NativeProp,
} from './types'

export const epPropKey = '__epPropKey'

export const definePropType = <T>(val: any): PropType<T> => val

export const isEpProp = (val: unknown): val is EpProp<any, any, any> =>
  isObject(val) && !!(val as any)[epPropKey]

/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */
export const buildProp = <P extends EpProp>(
  prop: P,
  key: string
): EpPropFinalized<P> => {
  if (!('values' in prop) || isUndefined(prop.values) || isArray(prop))
    return prop

  const { values, validator } = prop
  const _validator = (val: unknown) => {
    let valid = false
    let allowValuesText = ''

    valid ||= values.includes(val as string)
    if (!valid) {
      allowValuesText = values.map((value) => JSON.stringify(value)).join(', ')
    }
    if (validator) valid ||= validator(val)

    if (!valid && allowValuesText) {
      warn(
        `Invalid prop: validation failed${
          key ? ` for prop "${key}"` : ''
        }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
          val
        )}.`
      )
    }
    return valid
  }

  return {
    ...prop,
    validator: _validator,
  }
}

export const buildProps = <P extends Record<string, unknown>>(
  props: P
): {
  [K in keyof P]: P[K]
} => {
  Object.entries(props).map(([key, option]) => [key, buildProp(option, key)])
  return fromPairs(
    Object.entries(props).map(([key, option]) => [key, buildProp(option, key)])
  )
}
