import { cAF, isFirefox, rAF } from '@element-plus/utils'
import { HORIZONTAL } from '../defaults'

import type { ComputedRef } from 'vue'
import type { LayoutDirection } from '../types'

interface ListWheelState {
  atStartEdge: ComputedRef<boolean> // exclusive to reachEnd
  atEndEdge: ComputedRef<boolean>
  layout: ComputedRef<LayoutDirection>
}

type ListWheelHandler = (offset: number) => void

const useWheel = (
  { atEndEdge, atStartEdge, layout }: ListWheelState,
  onWheelDelta: ListWheelHandler
) => {
  let frameHandle: number
  let offset = 0

  const hasReachedEdge = (offset: number) => {
    const edgeReached =
      (offset < 0 && atStartEdge.value) || (offset > 0 && atEndEdge.value)

    return edgeReached
  }

  const onWheel = (e: WheelEvent) => {
    cAF(frameHandle)

    let { deltaX, deltaY } = e
    // Special case for windows machine with shift key + wheel scrolling
    if (e.shiftKey && deltaY !== 0) {
      deltaX = deltaY
      deltaY = 0
    }

    const newOffset = layout.value === HORIZONTAL ? deltaX : deltaY

    if (hasReachedEdge(offset) && hasReachedEdge(offset + newOffset)) return

    offset += newOffset

    if (!isFirefox()) {
      e.preventDefault()
    }

    frameHandle = rAF(() => {
      onWheelDelta(offset)
      offset = 0
    })
  }

  return {
    hasReachedEdge,
    onWheel,
  }
}

export default useWheel
