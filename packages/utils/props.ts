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
  @link for more explanation: https://github.com/element-plus/element-plus/pull/3341
 */
export function buildProp<
  T = any,
  R extends boolean = boolean,
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
    ? () => D
    : D
  type?: any
  validator?: ((val: any) => val is C) | ((val: any) => boolean)
} = {}) {
  return {
    type: type as PropType<T | C>,
    required: !!required,
    default: defaultValue,
    validator:
      values || validator
        ? (val: unknown) => {
            let vaild = false
            if (values)
              vaild ||= ([...values, defaultValue] as unknown[]).includes(val)
            if (validator) vaild ||= validator(val)
            return vaild
          }
        : undefined,
  } as const
}

export function keyOf<T>(arr: T) {
  return Object.keys(arr) as Array<keyof T>
}

export const componentSize = ['large', 'medium', 'small', 'mini'] as const
