import { isFunction } from 'lodash'

const defineGetter = (obj: Record<string, unknown>, prop: string, value: any) => {
  const getter = isFunction(value) ? value : () => value
  Object.defineProperty(obj, prop, { get: getter })
}

export default defineGetter
