import { hasOwn } from '@vue/shared'
import { throwError } from '@element-plus/utils-v2'
import type { Nullable } from '@element-plus/utils-v2'

const SCOPE = 'Util'

export const getValueByPath = (obj, paths = ''): unknown => {
  let ret: unknown = obj
  paths.split('.').map((path) => {
    ret = (ret as any)?.[path]
  })
  return ret
}

export function getPropByPath(
  obj: any,
  path: string,
  strict: boolean
): {
  o: unknown
  k: string
  v: Nullable<unknown>
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

// coerce truthy value to array
export const coerceTruthyValueToArray = (arr) => {
  if (!arr && arr !== 0) {
    return []
  }
  return Array.isArray(arr) ? arr : [arr]
}
