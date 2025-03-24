import { cAF, rAF } from '@element-plus/utils'
import { useGridEdge } from './use-grid-edge'
import type { GridEdgeState, ScrollDeltaHandler } from '../types'

export const useGridWheel = (
  gridEdgeState: GridEdgeState,
  onWheelDelta: ScrollDeltaHandler
) => {
  let frameHandle: number | null = null
  let xOffset = 0
  let yOffset = 0

  const { hasReachedEdge } = useGridEdge(gridEdgeState)

  const onWheel = (e: WheelEvent) => {
    cAF(frameHandle!)

    let x = e.deltaX
    let y = e.deltaY
    // Simulate native behavior when using touch pad/track pad for wheeling.
    if (Math.abs(x) > Math.abs(y)) {
      y = 0
    } else {
      x = 0
    }

    // Special case for windows machine with shift key + wheel scrolling
    if (e.shiftKey && y !== 0) {
      x = y
      y = 0
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
