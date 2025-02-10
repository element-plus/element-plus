import { warn } from 'vue'
import { fromPairs } from 'lodash-unified'
import { isArray, isFunction } from '../../types'

import type { PropType } from 'vue'
import type { EpProp } from './types'

type NormalizeProp<T extends EpProp> = T extends PropType<infer A>
  ? PropType<A>
  : {
      [K in Exclude<keyof T, 'validator' | 'values'>]: K extends 'type'
        ? T[K] extends PropType<infer B>
          ? 'values' extends keyof T ? PropType<Exclude<B, string> | T['values']> : PropType<B>
          : never
        : T[K]
    }
export const definePropType = <T>(val: any): PropType<T> => val
export const defineEpProp = <T, const V extends string[], P>(
  prop: EpProp<T, V>
) => {
  return prop 
}

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
export const buildProp = <P extends EpProp>(prop: P, key: string) => {
  if (isFunction(prop) || isArray(prop) || !prop.values) return prop

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

export const buildProps = <PP extends Record<string, P>, P extends EpProp<T, V>, T, const V extends string[]>(props: PP) => {
  return fromPairs(
    Object.entries(props).map(([key, option]) => [key, buildProp(option, key)])
  ) as {
    [K in keyof PP]: NormalizeProp<PP[K]>
  }
}