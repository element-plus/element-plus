import { debugWarn } from './error'
import type { ExtractPropTypes, PropType } from '@vue/runtime-core'
import type { Mutable } from './types'

const wrapperKey = Symbol()
export type PropWrapper<T> = { [wrapperKey]: T }

type ResolveProp<T> = ExtractPropTypes<{
  key: { type: T; required: true }
}>['key']
type ResolvePropType<T> = ResolveProp<T> extends { type: infer V }
  ? V
  : ResolveProp<T>
type ResolvePropTypeWithReadonly<T> = Readonly<T> extends Readonly<
  Array<infer A>
>
  ? ResolvePropType<A[]>
  : ResolvePropType<T>

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
  // the type will be PropType<'small' | 'medium' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'medium'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */
export function buildProp<
  T = never,
  D extends
    | (T extends PropWrapper<any>
        ? T[typeof wrapperKey]
        : ResolvePropTypeWithReadonly<T>)
    | V = never,
  R extends boolean = false,
  V = never,
  C = never
>({
  values,
  required,
  default: defaultValue,
  type,
  validator,
}: {
  type?: T
  values?: readonly V[]
  required?: R
  default?: R extends true
    ? never
    : D extends Record<string, unknown> | Array<any>
    ? () => D
    : D
  validator?: ((val: any) => val is C) | ((val: any) => boolean)
} = {}) {
  type HasDefaultValue = Exclude<D, undefined> extends never ? false : true
  type Type = PropType<
    | (T extends PropWrapper<unknown>
        ? T[typeof wrapperKey]
        : [V] extends [never]
        ? ResolvePropTypeWithReadonly<T>
        : never)
    | V
    | C
  >

  return {
    type: ((type as any)?.[wrapperKey] || type) as unknown as Type,
    required: !!required as R,

    default: defaultValue as unknown as R extends true
      ? never
      : HasDefaultValue extends true
      ? Exclude<
          D extends Record<string, unknown> | Array<any> ? () => D : D,
          undefined
        >
      : undefined,

    validator:
      values || validator
        ? (val: unknown) => {
            let valid = false
            let allowedValues: unknown[] = []

            if (values) {
              allowedValues = [...values, defaultValue]
              valid ||= allowedValues.includes(val)
            }
            if (validator) valid ||= validator(val)

            if (!valid && allowedValues.length > 0) {
              debugWarn(
                `Vue warn`,
                `Invalid prop: Expected one of (${allowedValues.join(
                  ', '
                )}), got value ${val}`
              )
            }
            return valid
          }
        : undefined,
  } as const
}

export const definePropType = <T>(val: any) =>
  ({ [wrapperKey]: val } as PropWrapper<T>)

export const keyOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>

export const componentSize = ['large', 'medium', 'small', 'mini'] as const
