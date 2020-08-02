type OptionalKeys<T extends object> = {
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T]

type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>

type MonoArgEmitter<T, Keys extends keyof T> = <K extends Keys>(evt: K, arg?: T[K]) => void

type BiArgEmitter<T, Keys extends keyof T> = <K extends Keys>(evt: K, arg: T[K]) => void

export type EventEmitter<T extends object> =
  MonoArgEmitter<T, OptionalKeys<T>> & BiArgEmitter<T, RequiredKeys<T>>

type A = Required<{}>
