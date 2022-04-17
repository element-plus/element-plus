import { addUnit, isArray, isFunction } from '@element-plus/utils'

import type { CSSProperties } from 'vue'

const sumReducer = (sum: number, num: number) => sum + num

export const sum = (listLike: number | number[]) => {
  return isArray(listLike) ? listLike.reduce(sumReducer, 0) : listLike
}

export const tryCall = <T>(
  fLike: T,
  params: T extends (...args: infer K) => unknown ? K : any,
  defaultRet = {}
) => {
  return isFunction(fLike) ? fLike(params) : fLike ?? defaultRet
}

export const enforceUnit = (style: CSSProperties) => {
  ;['width', 'maxWidth', 'minWidth', 'height'].forEach((key) => {
    style[key] = addUnit(style[key])
  })

  return style
}
