import type { GridEdgeState } from '../types'

export const useGridEdge = ({
  atXEndEdge,
  atXStartEdge,
  atYEndEdge,
  atYStartEdge,
}: GridEdgeState) => {
  /**
   * 检测是否已经到达滚动边缘
   * @param x X轴滚动偏移量
   * @param y Y轴滚动偏移量
   * @returns 是否到达边缘（X和Y方向都到达边缘时返回true）
   */
  const hasReachedEdge = (x: number, y: number) => {
    const xEdgeReached =
      (x <= 0 && atXStartEdge.value) || (x >= 0 && atXEndEdge.value)
    const yEdgeReached =
      (y <= 0 && atYStartEdge.value) || (y >= 0 && atYEndEdge.value)
    return xEdgeReached && yEdgeReached
  }

  return {
    hasReachedEdge,
  }
}
