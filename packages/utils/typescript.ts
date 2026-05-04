import type * as CSS from 'csstype'

export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type HTMLElementCustomized<T> = HTMLElement & T

/**
 * @deprecated stop to use null
 * @see {@link https://github.com/sindresorhus/meta/discussions/7}
 */
export type Nullable<T> = T | null

export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type BrowserNativeObject = Date | FileList | File | Blob | RegExp

/**
 * Check whether it is tuple
 *
 * 检查是否为元组
 *
 * @example
 * IsTuple<[1, 2, 3]> => true
 * IsTuple<Array[number]> => false
 */
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true

/**
 * Array method key
 *
 * 数组方法键
 */
type ArrayMethodKey = keyof any[]

/**
 * Tuple index key
 *
 * 元组下标键
 *
 * @example
 * TupleKey<[1, 2, 3]> => '0' | '1' | '2'
 */
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>

/**
 * Array index key
 *
 * 数组下标键
 */
type ArrayKey = number

/**
 * Helper type for recursively constructing paths through a type
 *
 * 用于通过一个类型递归构建路径的辅助类型
 */
type PathImpl<K extends string | number, V> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`

/**
 * Type which collects all paths through a type
 *
 * 通过一个类型收集所有路径的类型
 *
 * @see {@link FieldPath}
 */
type Path<T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>
        }[TupleKey<T>] // tuple
      : PathImpl<ArrayKey, V> // array
    : {
        [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>
      }[keyof T] // object

/**
 * Type which collects all paths through a type
 *
 * 通过一个类型收集所有路径的类型
 *
 * @example
 * FieldPath<{ 1: number; a: number; b: string; c: { d: number; e: string }; f: [{ value: string }]; g: { value: string }[]; h: Date; i: FileList; j: File; k: Blob; l: RegExp }> => '1' | 'a' | 'b' | 'c' | 'f' | 'g' | 'c.d' | 'c.e' | 'f.0' | 'f.0.value' | 'g.number' | 'g.number.value' | 'h' | 'i' | 'j' | 'k' | 'l'
 */
export type FieldPath<T> = T extends object ? Path<T> : never

/**
 * csstype 是 vue的依赖，因此，直接从vue中导入CSSProperties会导致ts类型解析错误，参考 https://github.com/pnpm/pnpm/issues/7453，因此，我们直接安装csstype，并从csstype中导入CSSProperties
 *
 * csstype is a dependency of vue, so importing CSSProperties directly from vue will cause ts type parsing errors, see https://github.com/pnpm/pnpm/issues/7453. Therefore, we directly install csstype and import CSSProperties from csstype.
 */
export interface CSSProperties
  extends
    CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: `--${string}`]: string | number | undefined
}

export type ObjectFit = CSSProperties['objectFit']

export type ZIndexType = CSSProperties['zIndex']

export type AlignItems = CSSProperties['alignItems']
