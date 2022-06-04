export function isValidValue(val: any) {
  return val || val === 0
}

export function isValidArray(val: any) {
  return Array.isArray(val) && val.length
}

export function toValidArray(val: any) {
  return Array.isArray(val) ? val : isValidValue(val) ? [val] : []
}

export function treeFind<T extends Record<string, any>>(
  treeData: T[],
  findCallback: (data: T) => boolean,
  getChildren: (data: T) => any
): T | undefined {
  for (const data of treeData) {
    if (findCallback(data)) {
      return data
    } else {
      const children = getChildren(data)
      if (isValidArray(children)) {
        const find = treeFind(children, findCallback, getChildren)
        if (find) return find
      }
    }
  }
}
