import { rAF, cAF } from '@element-plus/utils-v2'
import { isFF } from '../utils'
import { HORIZONTAL, VERTICAL } from '../defaults'

import type { ComputedRef } from 'vue'
import type { LayoutDirection } from '../types'

const LayoutKeys = {
  [HORIZONTAL]: 'deltaX',
  [VERTICAL]: 'deltaY',
}

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

  // let scrollLock = false
  // let lockHandle = null

  // const lockScroll = () => {
  //   clearTimeout(lockHandle)
  //   scrollLock = true
  //   lockHandle = setTimeout(() => scrollLock = false, 50)
  // }

  const hasReachedEdge = (offset: number) => {
    const edgeReached =
      (offset < 0 && atStartEdge.value) || (offset > 0 && atEndEdge.value)

    return edgeReached
  }

  const onWheel = (e: WheelEvent) => {
    cAF(frameHandle)

    const newOffset = e[LayoutKeys[layout.value]]

    if (hasReachedEdge(offset) && hasReachedEdge(offset + newOffset)) return

    offset += newOffset

    if (!isFF) {
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
