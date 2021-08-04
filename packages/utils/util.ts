import { getCurrentInstance } from 'vue'
import { camelize, capitalize, extend, hasOwn, hyphenate, isArray, isObject, isString, isFunction, looseEqual, toRawType } from '@vue/shared'
import isEqualWith from 'lodash/isEqualWith'
import isServer from './isServer'
import { warn } from './error'

import type { ComponentPublicInstance, Ref } from 'vue'
import type { AnyFunction } from './types'

export type Nullable<T> = null | T

// type polyfill for compat isIE method
declare global {
  interface Document {
    documentMode?: any
  }
}

export const SCOPE = 'Util'

export type PartialCSSStyleDeclaration = Partial<Pick<CSSStyleDeclaration, 'transform' | 'transition' | 'animation'>>

export function toObject<T>(arr: Array<T>): Record<string, T> {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const getValueByPath = (obj, paths = ''): unknown => {
  let ret: unknown = obj
  paths.split('.').map(path => {
    ret = ret?.[path]
  })
  return ret
}

export function getPropByPath(obj: any, path: string, strict: boolean): {
  o: unknown
  k: string
  v: Nullable<unknown>
} {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (i; i < keyArr.length - 1; i++) {
    if (!tempObj && !strict) break
    const key = keyArr[i]

    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
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

export const escapeRegexpString = (value = ''): string =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

// Use native Array.find, Array.findIndex instead

// coerce truthy value to array
export const coerceTruthyValueToArray = arr => {
  if (!arr && arr !== 0) {
    return []
  }
  return Array.isArray(arr) ? arr : [arr]
}

export const isIE = function (): boolean {
  return !isServer && !isNaN(Number(document.documentMode))
}

export const isEdge = function (): boolean {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}

export const isFirefox = function (): boolean {
  return !isServer && !!window.navigator.userAgent.match(/firefox/i)
}

export const autoprefixer = function (
  style: PartialCSSStyleDeclaration,
): PartialCSSStyleDeclaration {
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

export const kebabCase = hyphenate

// reexport from lodash & vue shared
export {
  hasOwn,
  // isEmpty,
  // isEqual,
  isObject,
  isArray,
  isString,
  capitalize,
  camelize,
  looseEqual,
  extend,
}

export const isBool = (val: unknown) => typeof val === 'boolean'
export const isNumber = (val: unknown) => typeof val === 'number'
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')

export function rafThrottle<T extends AnyFunction<any>>(fn: T): AnyFunction<void> {
  let locked = false
  return function (...args: any[]) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(() => {
      fn.apply(this, args)
      locked = false
    })
  }
}

export const clearTimer = (timer: Ref<TimeoutHandle>) => {
  clearTimeout(timer.value)
  timer.value = null
}

/**
 * Generating a random int in range (0, max - 1)
 * @param max {number}
 */
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function entries<T>(obj: Hash<T>): [string, T][] {
  return Object
    .keys(obj)
    .map((key: string) => ([key, obj[key]]))
}

export function isUndefined(val: any): val is undefined {
  return val === void 0
}

export { isVNode } from 'vue'

export function useGlobalConfig() {
  const vm: any = getCurrentInstance()
  if ('$ELEMENT' in vm.proxy) {
    return vm.proxy.$ELEMENT
  }
  return {}
}

export const arrayFindIndex = function <T = any>(
  arr: Array<T>,
  pred: (args: T) => boolean,
): number {
  return arr.findIndex(pred)
}

export const arrayFind = function <T>(
  arr: Array<T>,
  pred: (args: T) => boolean,
): T {
  return arr.find(pred)
}

export function isEmpty(val: unknown) {
  if (
    !val && val !== 0 ||
    isArray(val) && !val.length ||
    isObject(val) && !Object.keys(val).length
  ) return true

  return false
}

export function arrayFlat(arr: unknown[]) {
  return arr.reduce((acm: unknown[], item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item
    return acm.concat(val)
  }, [])
}

export function deduplicate<T>(arr: T[]) {
  return Array.from(new Set(arr))
}

/**
 * Unwraps refed value
 * @param ref Refed value
 */
export function $<T>(ref: Ref<T>) {
  return ref.value
}

export function addUnit(value: string | number) {
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return value + 'px'
  }
  if (process.env.NODE_ENV === 'development') {
    warn(SCOPE, 'binding value must be a string or number')
  }
  return ''
}

/**
 * Enhance `lodash.isEqual` for it always return false even two functions have completely same statements.
 * @param obj The value to compare
 * @param other The other value to compare
 * @returns Returns `true` if the values are equivalent, else `false`.
 * @example
 *  lodash.isEqual(() => 1, () => 1)      // false
 *  isEqualWith(() => 1, () => 1)         // true
 */
export function isEqualWithFunction (obj: any, other: any) {
  return isEqualWith(obj, other, (objVal, otherVal) => {
    return isFunction(objVal) && isFunction(otherVal) ? `${objVal}` === `${otherVal}` : undefined
  })
}

/**
 * Generate function for attach ref for the h renderer
 * @param ref Ref<HTMLElement | ComponentPublicInstance>
 * @returns (val: T) => void
 */

export const refAttacher =
  <T extends (HTMLElement | ComponentPublicInstance)>(ref: Ref<T>) => {
    return (val: T) => {
      ref.value = val
    }
  }
