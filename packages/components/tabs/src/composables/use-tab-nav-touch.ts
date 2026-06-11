import { computed, ref } from 'vue'
import { clamp, isUndefined } from 'lodash-unified'
import { getClientXY } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'

export interface Scrollable {
  next?: boolean
  prev?: number
}

interface TouchState {
  startX: number
  startY: number
  startOffset: number
}

const TOUCH_SCROLL_THRESHOLD = 5

interface UseTabNavTouchParams {
  scrollable: Ref<false | Scrollable>
  navOffset: Ref<number>
  navSize: ComputedRef<number>
  navContainerSize: ComputedRef<number>
  isHorizontal: ComputedRef<boolean>
}

export const useTabNavTouch = ({
  scrollable,
  navOffset,
  navSize,
  navContainerSize,
  isHorizontal,
}: UseTabNavTouchParams) => {
  const isTouchScrolling = ref(false)
  const maxOffset = computed(() =>
    Math.max(navSize.value - navContainerSize.value, 0)
  )
  let touchState: TouchState | undefined
  let isMainAxisTouch: boolean | undefined

  const handleTouchStart = (event: TouchEvent) => {
    if (!scrollable.value || event.touches.length !== 1) return

    const { clientX, clientY } = getClientXY(event)
    touchState = {
      startX: clientX,
      startY: clientY,
      startOffset: navOffset.value,
    }
    isMainAxisTouch = undefined
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (!touchState || !scrollable.value) return

    if (event.touches.length !== 1) {
      handleTouchEnd()
      return
    }

    const { clientX, clientY } = getClientXY(event)
    const deltaX = touchState.startX - clientX
    const deltaY = touchState.startY - clientY
    const mainAxisDelta = isHorizontal.value ? deltaX : deltaY
    const crossAxisDelta = isHorizontal.value ? deltaY : deltaX
    const mainAxisDistance = Math.abs(mainAxisDelta)
    const crossAxisDistance = Math.abs(crossAxisDelta)

    if (isUndefined(isMainAxisTouch)) {
      if (
        Math.max(mainAxisDistance, crossAxisDistance) <= TOUCH_SCROLL_THRESHOLD
      ) {
        return
      }
      isMainAxisTouch = mainAxisDistance > crossAxisDistance
    }

    if (!isMainAxisTouch) {
      return
    }

    const nextOffset = clamp(
      touchState.startOffset + mainAxisDelta,
      0,
      maxOffset.value
    )

    if (
      maxOffset.value <= 0 ||
      nextOffset === navOffset.value ||
      !event.cancelable
    ) {
      return
    }

    event.preventDefault()
    isTouchScrolling.value = true
    navOffset.value = nextOffset
  }

  const handleTouchEnd = () => {
    touchState = undefined
    isMainAxisTouch = undefined
    isTouchScrolling.value = false
  }

  return {
    isTouchScrolling,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
