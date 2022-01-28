export type AnyFunction<T> = (...args: any[]) => T

export type PartialReturnType<T extends (...args: unknown[]) => unknown> =
  Partial<ReturnType<T>>

export type Nullable<T> = T | null

export type RefElement = Nullable<HTMLElement>
