import { isRef, unref } from 'vue'

export function extractRefObj<T extends Record<string, any>>(obj: T) {
  const bindings: { [P in keyof T]?: any } = {}
  for (const key in obj) {
    bindings[key] = isRef(obj[key]) ? unref(obj[key]) : obj[key]
  }
  return bindings
}
