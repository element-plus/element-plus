export const unique = <T>(arr: T[]) => [...new Set(arr)]

type Many<T> = T | ReadonlyArray<T>
// TODO: rename to `ensureArray`
/** like `_.castArray`, except falsy value returns empty array. */
export const castArray = <T>(arr: Many<T> | null | undefined): T[] => {
  if (!arr) return []
  return Array.isArray(arr) ? arr : [arr as T]
}

// TODO: remove import alias
// avoid naming conflicts
export { castArray as ensureArray } from 'lodash-unified'
