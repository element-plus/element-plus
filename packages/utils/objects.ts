import { hasOwn } from '@vue/shared'
import { throwError } from './error'
import type { Entries } from 'type-fest'

const SCOPE = 'UtilV2/objects'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr) as Entries<T>
export { hasOwn } from '@vue/shared'

/** @deprecated TODO: improve it, use lodash */
export function getPropByPath(
  obj: any,
  path: string,
  strict: boolean
): {
  o: any
  k: string
  v: any
} {
  let tempObj = obj
  let key, value

  if (obj && hasOwn(obj, path)) {
    key = path
    value = tempObj?.[path]
  } else {
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
          throwError(SCOPE, 'Please transfer a valid prop path to form item!')
        }
        break
      }
    }
    key = keyArr[i]
    value = tempObj?.[keyArr[i]]
  }
  return {
    o: tempObj,
    k: key,
    v: value,
  }
}
