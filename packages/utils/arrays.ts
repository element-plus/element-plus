export const unique = <T>(arr: T[]) => [...new Set(arr)]

// TODO: rename to `ensureArray`
/** like `_.castArray`, except falsy value returns empty array. */
export const castArray = (arr: any): any[] => {
  if (!arr && arr !== 0) return []
  return Array.isArray(arr) ? arr : [arr]
}

// TODO: remove import alias
// avoid naming conflicts
export { castArray as ensureArray } from 'lodash-unified'
