import type { PropType } from 'vue'

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
  T = any,
  R extends boolean = false,
  D extends T = T,
  C = never
>({
  values,
  required,
  default: defaultValue,
  type,
  validator,
}: {
  values?: readonly T[]
  required?: R
  default?: R extends true
    ? never
    : D extends Record<string, unknown> | Array<any>
    ? D extends Array<infer A>
      ? () => readonly A[]
      : () => D
    : D

  type?: any
  validator?: ((val: any) => val is C) | ((val: any) => boolean)
} = {}) {
  type DefaultType = typeof defaultValue
  type HasDefaultValue = Exclude<T, D> extends never ? false : true

  return {
    type: type as PropType<T | C>,
    required: !!required as R,

    default: defaultValue as R extends true
      ? never
      : HasDefaultValue extends true
      ? Exclude<DefaultType, undefined>
      : undefined,

    validator:
      values || validator
        ? (val: unknown) => {
            let valid = false
            if (values)
              valid ||= ([...values, defaultValue] as unknown[]).includes(val)
            if (validator) valid ||= validator(val)
            return valid
          }
        : undefined,
  } as const
}

export const keyOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>

export const componentSize = ['large', 'medium', 'small', 'mini'] as const
