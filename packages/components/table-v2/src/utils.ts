import { isArray, isFunction } from '@element-plus/utils'

export const sumHeights = (heights: number | number[]) => {
  return isArray(heights)
    ? heights.reduce((sum, height) => sum + height, 0)
    : heights
}

export const tryCall = <T>(
  fLike: T,
  params: T extends (...args: infer K) => unknown ? K : any
) => {
  return isFunction(fLike) ? fLike(params) : fLike ?? {}
}
