import { ref, unref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { cAF, rAF } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'
import type { GridScrollOptions, GridStates } from '../types'

export const useGridTouch = (
  windowRef: Ref<HTMLElement | undefined>,
  states: Ref<GridStates>,
  scrollTo: (scrollOptions: GridScrollOptions) => void,
  estimatedTotalWidth: ComputedRef<number>,
  estimatedTotalHeight: ComputedRef<number>,
  parsedWidth: ComputedRef<number>,
  parsedHeight: ComputedRef<number>
) => {
  const touchStartX = ref(0)
  const touchStartY = ref(0)
  let frameHandle: number | undefined
  let deltaX = 0
  let deltaY = 0

  const handleTouchStart = (event: TouchEvent) => {
    cAF(frameHandle!)
    touchStartX.value = event.touches[0].clientX
    touchStartY.value = event.touches[0].clientY
    deltaX = 0
    deltaY = 0
  }

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault()
    cAF(frameHandle!)

    deltaX += touchStartX.value - event.touches[0].clientX
    deltaY += touchStartY.value - event.touches[0].clientY
    touchStartX.value = event.touches[0].clientX
    touchStartY.value = event.touches[0].clientY

    frameHandle = rAF(() => {
      const maxScrollLeft = estimatedTotalWidth.value - unref(parsedWidth)
      const maxScrollTop = estimatedTotalHeight.value - unref(parsedHeight)

      const safeScrollLeft = Math.min(
        states.value.scrollLeft + deltaX,
        maxScrollLeft
      )
      const safeScrollTop = Math.min(
        states.value.scrollTop + deltaY,
        maxScrollTop
      )

      scrollTo({
        scrollLeft: safeScrollLeft,
        scrollTop: safeScrollTop,
      })

      deltaX = 0
      deltaY = 0
    })
  }

  useEventListener(windowRef, 'touchstart', handleTouchStart, {
    passive: true,
  })
  useEventListener(windowRef, 'touchmove', handleTouchMove, {
    passive: false,
  })

  return {
    touchStartX,
    touchStartY,
    handleTouchStart,
    handleTouchMove,
  }
}
