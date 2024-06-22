export const unique = <T>(arr: T[]) => [...new Set(arr)]

type Many<T> = T | ReadonlyArray<T>

export const ensureArray = <T>(arr: Many<T>): T[] => {
  if (!arr && (arr as any) !== 0) return []
  return Array.isArray(arr) ? arr : [arr as T]
}

export { castArray } from 'lodash-unified'

// // TODO: rename to `ensureArray`
// /** like `_.castArray`, except falsy value returns empty array. */
// export const castArray = <T>(arr: Many<T>): T[] => {
//   if (!arr && (arr as any) !== 0) return []
//   return Array.isArray(arr) ? arr : [arr]
// }

// TODO: remove import alias
// avoid naming conflicts
// export { castArray as ensureArray } from 'lodash-unified'
