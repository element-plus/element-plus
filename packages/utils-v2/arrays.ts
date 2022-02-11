export const unique = <T>(arr: T[]) => [...new Set(arr)]

/** like `_.castArray`, except falsy value returns empty array. */
export const castArray = (arr: any): any[] => {
  if (!arr && arr !== 0) return []
  return Array.isArray(arr) ? arr : [arr]
}
