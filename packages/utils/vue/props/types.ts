import type { PropType } from 'vue'

export type EpProp<
  T = unknown,
  V extends Value<T> = undefined,
  D extends Default<T, V> | DefaultFactory<T, V> = undefined
> = PropType<T> | EpPropOptions<T, V, D> | null | undefined

type EpPropOptions<
  T = unknown,
  V extends Value<T> = undefined,
  D extends Default<T, V> | DefaultFactory<T, V> = undefined
> = {
  type: PropType<T>
  required?: boolean
  default?: D
  validator?(value: unknown): boolean
  values?: V
}

export type Value<T> = readonly T[] | undefined
export type Default<T, V> =
  | (V extends readonly unknown[] ? T & V[number] : T)
  | null
  | undefined
export type DefaultFactory<T, V> = (
  props: Record<string, unknown>
) => (V extends readonly unknown[] ? T & V[number] : T) | null | undefined

export type PruneProp<P> = P extends EpPropOptions<unknown, any, any>
  ? PrunePropOptions<P>
  : P
export type PrunePropOptions<P> = P extends EpPropOptions<infer T, any, any>
  ? {
      [K in Exclude<keyof P, 'validator' | 'values'>]: K extends 'type'
        ? P['values'] extends readonly unknown[]
          ? PropType<
              | Exclude<T, PrimitiveUnion<P['values'][number]>>
              | P['values'][number]
            >
          : P[K]
        : P[K]
    }
  : never
type PrimitiveUnion<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never

export type ConstraintPP<PP extends Record<string, unknown>> = {
  [K in keyof PP]: PP[K] extends EpProp<infer T, infer V, infer D>
    ? EpProp<T, V, D>
    : never
}
export type ConstraintP<P> = P extends EpProp<infer T, infer V, infer D>
  ? EpProp<T, V, D>
  : never
