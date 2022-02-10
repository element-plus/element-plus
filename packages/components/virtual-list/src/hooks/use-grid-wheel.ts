import { rAF, cAF } from '@element-plus/utils-v2'
import { isFF } from '../utils'

import type { ComputedRef } from 'vue'

interface GridWheelState {
  atXStartEdge: ComputedRef<boolean>
  atXEndEdge: ComputedRef<boolean>
  atYStartEdge: ComputedRef<boolean>
  atYEndEdge: ComputedRef<boolean>
}

type GridWheelHandler = (x: number, y: number) => void

export const useGridWheel = (
  { atXEndEdge, atXStartEdge, atYEndEdge, atYStartEdge }: GridWheelState,
  onWheelDelta: GridWheelHandler
) => {
  let frameHandle: number | null = null
  let xOffset = 0
  let yOffset = 0

  const hasReachedEdge = (x: number, y: number) => {
    const xEdgeReached =
      (x < 0 && atXStartEdge.value) || (x > 0 && atXEndEdge.value)
    const yEdgeReached =
      (y < 0 && atYStartEdge.value) || (y > 0 && atYEndEdge.value)
    return xEdgeReached && yEdgeReached
  }

  const onWheel = (e: WheelEvent) => {
    cAF(frameHandle!)

    const x = e.deltaX
    const y = e.deltaY

    if (
      hasReachedEdge(xOffset, yOffset) &&
      hasReachedEdge(xOffset + x, yOffset + y)
    )
      return

    xOffset += x
    yOffset += y

    if (!isFF) {
      e.preventDefault()
    }

    frameHandle = rAF(() => {
      onWheelDelta(xOffset, yOffset)
      xOffset = 0
      yOffset = 0
    })
  }

  return {
    hasReachedEdge,
    onWheel,
  }
}
