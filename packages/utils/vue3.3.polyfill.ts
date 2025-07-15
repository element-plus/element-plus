import type { Prop } from 'vue'
// delete when upgrade to vue 3.3 : start
// __ExtractPublicPropTypes copy from vue 3.3
// If the type T accepts type "any", output type Y, otherwise output type N.
// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N

type InferPropType<T, NullAsAny = true> = [T] extends [null]
  ? NullAsAny extends true
    ? any
    : null
  : [T] extends [{ type: null | true }]
  ? any // As TS issue https://github.com/Microsoft/TypeScript/issues/14829 // somehow `ObjectConstructor` when inferred from { (): T } becomes `any` // `BooleanConstructor` when inferred from PropConstructor(with PropMethod) becomes `Boolean`
  : [T] extends [ObjectConstructor | { type: ObjectConstructor }]
  ? Record<string, any>
  : [T] extends [BooleanConstructor | { type: BooleanConstructor }]
  ? boolean
  : [T] extends [DateConstructor | { type: DateConstructor }]
  ? Date
  : [T] extends [(infer U)[] | { type: (infer U)[] }]
  ? U extends DateConstructor
    ? Date | InferPropType<U, false>
    : InferPropType<U, false>
  : [T] extends [Prop<infer V, infer D>]
  ? unknown extends V
    ? keyof V extends never
      ? IfAny<V, V, D>
      : V
    : V
  : T

type PublicRequiredKeys<T> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never
}[keyof T]

type PublicOptionalKeys<T> = Exclude<keyof T, PublicRequiredKeys<T>>

declare module 'vue' {
  // compatible with higher versions of Vue
  /**
   * Extract prop types from a runtime props options object.
   * The extracted types are **public** - i.e. the expected props that can be
   * passed to component.
   */
  export type __ExtractPublicPropTypes<O> = {
    [K in keyof Pick<O, PublicRequiredKeys<O>>]: InferPropType<O[K]>
  } & {
    [K in keyof Pick<O, PublicOptionalKeys<O>>]?: InferPropType<O[K]>
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface GlobalComponents {}
}

export {}
// delete when upgrade to vue 3.3 : end
