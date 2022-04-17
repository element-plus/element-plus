import { addUnit, isArray, isFunction } from '@element-plus/utils'

import type { CSSProperties } from 'vue'

export const sumHeights = (heights: number | number[]) => {
  return isArray(heights)
    ? heights.reduce((sum, height) => sum + height, 0)
    : heights
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
