import type { PropType } from 'vue'
import type { IfNever } from './util'

export type EpProp<T = unknown, V = string> = PropType<T> | EpPropOptions<T, V>
export type EpPropOptions<T = unknown, V = string, D = T> = {
  type: PropType<T>
  required?: boolean
  default?: D | DefaultFactory<D> | null | undefined
  validator?(value: unknown): boolean
  values?: V[]
}
type DefaultFactory<T> = (
  props: Record<string, unknown>
) => T | null | undefined

type ExcludeString<T> = T extends string ? never : T

/**
 * Merge Type, Value, Validator types
 * 合并 Type、Value、Validator 的类型
 *
 * @example
 * EpPropMergeType<StringConstructor, '1', 1> =>  1 | "1" // ignores StringConstructor
 * EpPropMergeType<StringConstructor, never, number> =>  string | number
 */
export type EpPropMergeType<Type, Value> = IfNever<
  Value,
  Type,
  ExcludeString<Type> | Value
>
