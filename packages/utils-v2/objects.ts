import type { Entries } from 'type-fest'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr) as Entries<T>
export { hasOwn } from '@vue/shared'
