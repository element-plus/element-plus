import { cAF, rAF } from '@element-plus/utils'
import { useGridEdge } from './use-grid-edge'
import type { GridEdgeState, ScrollDeltaHandler } from '../types'

export const useGridTouch = (
  gridEdgeState: GridEdgeState,
  onTouchDelta: ScrollDeltaHandler
) => {
  let frameHandle: number | null = null
  let lastTouchX = 0
  let lastTouchY = 0
  let xOffset = 0
  let yOffset = 0

  const { hasReachedEdge } = useGridEdge(gridEdgeState)

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      // 重置偏移量
      xOffset = 0
      yOffset = 0

      // 记录开始触摸的位置
      lastTouchX = e.touches[0].clientX
      lastTouchY = e.touches[0].clientY
    }
  }

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length !== 1) return

    cAF(frameHandle!)

    // 计算移动的距离
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY

    // deltaX/Y是相对于上次位置的偏移量
    const deltaX = lastTouchX - currentX
    const deltaY = lastTouchY - currentY

    // 更新最后触摸位置
    lastTouchX = currentX
    lastTouchY = currentY

    // 确定主导方向（水平或垂直）
    let x = deltaX
    let y = deltaY

    // 模拟原生行为，只在一个方向上滚动
    if (Math.abs(x) > Math.abs(y)) {
      y = 0
    } else {
      x = 0
    }

    if (
      hasReachedEdge(xOffset, yOffset) &&
      hasReachedEdge(xOffset + x, yOffset + y)
    )
      return

    xOffset += x
    yOffset += y

    e.preventDefault()

    frameHandle = rAF(() => {
      onTouchDelta(xOffset, yOffset)
      xOffset = 0
      yOffset = 0
    })
  }

  const onTouchEnd = () => {
    // 清除任何待处理的帧
    if (frameHandle !== null) {
      cAF(frameHandle)
      if (xOffset !== 0 || yOffset !== 0) {
        // 处理最后一次偏移
        onTouchDelta(xOffset, yOffset)
      }
    }

    // 重置状态
    xOffset = 0
    yOffset = 0
    frameHandle = null
  }

  return {
    hasReachedEdge,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
