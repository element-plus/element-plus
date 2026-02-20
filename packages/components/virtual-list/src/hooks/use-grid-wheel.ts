import { cAF, rAF } from '@element-plus/utils'

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

  const hasXReachedEdge = (x: number) => {
    return (x < 0 && atXStartEdge.value) || (x > 0 && atXEndEdge.value)
  }
  const hasYReachedEdge = (y: number) => {
    return (y < 0 && atYStartEdge.value) || (y > 0 && atYEndEdge.value)
  }
  const hasReachedEdge = (x: number, y: number) => {
    return hasXReachedEdge(x) || hasYReachedEdge(y)
  }

  const onWheel = (e: WheelEvent) => {
    cAF(frameHandle!)

    const { deltaX, deltaY } = e
    let x = deltaX
    let y = deltaY
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

    if (hasReachedEdge(x, y)) {
      // #23524
      if (
        deltaX < 0 &&
        deltaY < 0 &&
        !hasXReachedEdge(deltaX) &&
        hasYReachedEdge(deltaY)
      ) {
        e.preventDefault()
      }
      return
    }

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
