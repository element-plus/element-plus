import { warn } from 'vue'
import { fromPairs, omit } from 'lodash-unified'
import { isArray, isFunction } from '../../types'

import type { PropType } from 'vue'
import type { ConstraintP, ConstraintPP, Default, DefaultFactory, EpProp, PruneProp, Value } from './types'

export const definePropType = <T>(val: any): PropType<T> => val

// eslint-disable-next-line prettier/prettier
export const buildProp = <P extends EpProp<unknown, V, D>, const V extends Value<unknown>, const D extends Default<unknown, V>>(
  prop: P & ConstraintP<P>
) => prop as unknown as PruneProp<P>

export const buildProps = <PP extends Record<string, EpProp<unknown, V, D | DA | DefaultFactory<T, V>>>, const T extends string | number | boolean | unknown[], const V extends Value<unknown>, const D extends Default<unknown, V>, DA extends Default<unknown[], V>>(props: PP & ConstraintPP<PP>) => { 
  const entries =  Object.entries(props).map(([key, prop]) => {
    if (!prop || isFunction(prop) || isArray(prop) || !prop.values) return [key, prop]

    const { values, validator } = prop
    const _validator = (val: T) => {
      let valid = false
      let allowValuesText = ''

      valid ||= values.includes(val)
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
    return [key, {
      ...omit(prop, 'values'),
      validator: _validator
    }]
  })
  return fromPairs(entries) as { [K in keyof PP]: PruneProp<PP[K]> }
}