import type { PropType } from 'vue'

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
