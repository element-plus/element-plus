import { isArray } from '@element-plus/utils'

export const sumHeights = (heights: number | number[]) => {
  return isArray(heights)
    ? heights.reduce((sum, height) => sum + height, 0)
    : heights
}
