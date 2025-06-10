import { ComputedRef, Ref, ref, unref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { GridScrollOptions, GridStates } from '../types'

export const useGardTouch = (
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

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.value = event.touches[0].clientX
    touchStartY.value = event.touches[0].clientY
  }

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault()
    const deltaX = touchStartX.value - event.touches[0].clientX
    const deltaY = touchStartY.value - event.touches[0].clientY

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

    handleTouchStart(event)
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
