import { isArray } from './types'

export const unique = <T>(arr: T[]) => [...new Set(arr)]

type Many<T> = T | ReadonlyArray<T>
// TODO: rename to `ensureArray`
/** like `_.castArray`, except falsy value returns empty array. */
export const castArray = <T>(arr: Many<T>): T[] => {
  if (!arr && (arr as any) !== 0) return []
  return isArray(arr) ? arr : [arr as T]
}

// TODO: remove import alias
// avoid naming conflicts
export { castArray as ensureArray } from 'lodash-unified'

// Deduplicates an array by a key or callback function.
type KeyType = string | number | symbol
export const uniqueByKey = <T>(
  arr: T[],
  getKey: ((item: T) => KeyType) | keyof T
): T[] => {
  const seen = new Set<KeyType>()
  return arr.filter((item) => {
    const key =
      typeof getKey === 'function' ? getKey(item) : (item[getKey] as KeyType)
    if (!seen.has(key)) {
      seen.add(key)
      return true
    }
    return false
  })
}
