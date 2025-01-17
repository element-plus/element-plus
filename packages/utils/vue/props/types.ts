import type { epPropKey } from './runtime'
import type { ExtractPropTypes, Prop, PropType } from 'vue'
import type { IfNever, UnknownToNever, WritableArray } from './util'

export type EpProp<T = unknown, V = string> = PropType<T> | EpPropOptions<T, V>
export type EpPropOptions<T = unknown, V = string, D = T> = {
  type: PropType<T>
  required?: boolean
  default?: D | DefaultFactory<D> | null | undefined 
  validator?(value: unknown): boolean;
  values?: V[]
}
type DefaultFactory<T> = (props: Record<string, unknown>) => T | null | undefined

type Value<T> = T[keyof T]

/**
 * Extract the type of a single prop
 *
 * 提取单个 prop 的参数类型
 *
 * @example
 * ExtractPropType<{ type: StringConstructor }> => string | undefined
 * ExtractPropType<{ type: StringConstructor, required: true }> => string
 * ExtractPropType<{ type: BooleanConstructor }> => boolean
 */
export type ExtractPropType<T extends object> = Value<
  ExtractPropTypes<{
    key: T
  }>
>

/**
 * Extracts types via `ExtractPropTypes`, accepting `PropType<T>`, `XXXConstructor`, `never`...
 *
 * 通过 `ExtractPropTypes` 提取类型，接受 `PropType<T>`、`XXXConstructor`、`never`...
 *
 * @example
 * ResolvePropType<BooleanConstructor> => boolean
 * ResolvePropType<PropType<T>> => T
 **/
export type ResolvePropType<T> = IfNever<
  T,
  never,
  ExtractPropType<{
    type: WritableArray<T>
    required: true
  }>
>

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

/**
 * input prop `buildProp` or `buildProps` (constraints)
 *
 * prop 输入参数（约束）
 *
 * @example
 * EpPropInput<StringConstructor, 'a', never, never, true>
 * ⬇️
 * {
    type?: StringConstructor | undefined;
    required?: true | undefined;
    values?: readonly "a"[] | undefined;
    validator?: ((val: any) => boolean) | ((val: any) => val is never) | undefined;
    default?: undefined;
  }
 */
export type EpPropInput<P> = P extends PropType<infer T> ? PropType<T> : P extends {
  type?: PropType<infer TT>
  required?: Boolean 
  values?: string[]
  validator?(value: unknown): boolean
  default?: TT
} ? TT :

// /**
//  * output prop `buildProp` or `buildProps`.
//  *
//  * prop 输出参数。
//  *
//  * @example
//  * EpProp<'a', 'b', true>
//  * ⬇️
//  * {
//     readonly type: PropType<"a">;
//     readonly required: true;
//     readonly validator: ((val: unknown) => boolean) | undefined;
//     readonly default: "b";
//     __epPropKey: true;
//   }
//  */
// export type EpProp<Type, Default, Required> = {
//   readonly type: PropType<Type>
//   readonly required: [Required] extends [true] ? true : false
//   readonly validator: ((val: unknown) => boolean) | undefined
//   [epPropKey]: true
// } & IfNever<Default, unknown, { readonly default: Default }>

/**
 * Determine if it is `EpProp`
 */
export type IfEpProp<T, Y, N> = T extends { [epPropKey]: true } ? Y : N

/**
 * Converting input to output.
 *
 * 将输入转换为输出
 */
export type EpPropConvert<Input> = Input extends EpPropInput<
  infer Type,
  infer Value,
  infer Validator,
  any,
  infer Required
>
  ? EpPropFinalized<Type, Value, Validator, Input['default'], Required>
  : never


/**
 * Finalized conversion output
 *
 * 最终转换 EpProp
 */
export type EpPropFinalized<P = EpProp> =  P extends EpPropOptions ? P['values'] extends unknown ? P : {
  [K in keyof P]: P[K]
} & {
  type: EpPropMergeType<P['type'], P['values']>
} : P

export {}
