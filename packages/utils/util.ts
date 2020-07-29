import isServer from './isServer'
import { isObject, castArray, isEmpty, isEqual, capitalize } from 'lodash-es'

const { hasOwnProperty } = Object.prototype

type Any = Record<string, unknown> | unknown

export function hasOwn(obj: Any, key: string): boolean {
  return hasOwnProperty.call(obj, key)
}

function extend<T, K>(to: T, _from: K): T & K  {
  return Object.assign(to, _from)
}

export function toObject<T>(arr: Array<T>): Record<string, T> {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const getValueByPath = (obj: Any, paths = ''): unknown => {
  let ret: unknown = obj
  paths.split('.').map(path => {
    ret = ret?.[path]
  })
  return ret
}

export function getPropByPath(obj: Any, path: string, strict: boolean): {
  o: unknown,
  k: string,
  v: Nullable<unknown>,
} {
  // we can't use any here, the only option here is unknown
  let tempObj: unknown = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (i; i < keyArr.length - 1; i++) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    tempObj = tempObj?.[key]
    if (!tempObj && strict) {
      throw new Error('please transfer a valid prop path to form item!')
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj?.[keyArr[i]],
  }
}

/**
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */
export const generateId = (): number => Math.floor(Math.random() * 10000)

// use isEqual instead
// export const valueEquals


export const escapeRegexpString = (value = ''): string=>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

// Use native Array.find, Array.findIndex instead

// coerce truthy value to array
export const coerceTruthyValueToArray = castArray

export const isIE = function(): boolean {
  return !isServer && !isNaN(Number(document.DOCUMENT_NODE))
}

export const isEdge = function(): boolean {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}

export const isFirefox = function(): boolean {
  return (
    !isServer && !!window.navigator.userAgent.match(/firefox/i)
  )
}

export const autoprefixer = function(style: CSSStyleDeclaration): CSSStyleDeclaration {
  if (typeof style !== 'object') return style
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

export const kebabCase = function(str: string): string {
  const hyphenateRE = /([^-])([A-Z])/g
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

export const looseEqual = function<T, K>(a: T, b: K): boolean {
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

// reexport from lodash
export {
  isEmpty,
  isEqual,
  capitalize,
}

export function rafThrottle(fn: (args: Record<string, unknown>) => unknown): (...args: unknown[]) => unknown {
  let locked = false
  return function(...args) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(() => {
      fn.apply(this, args)
      locked = false
    })
  }
}

export const objToArray = castArray

export { isVNode } from 'vue'
