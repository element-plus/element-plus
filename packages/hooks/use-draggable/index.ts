import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import { addUnit } from '@element-plus/utils'
import type { ComputedRef, Ref } from 'vue'

export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>
) => {
  let transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const getRectLimit = () => {
    const { offsetX, offsetY } = transform

    const targetRect = targetRef.value!.getBoundingClientRect()
    const targetLeft = targetRect.left
    const targetTop = targetRect.top
    const targetWidth = targetRect.width
    const targetHeight = targetRect.height

    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    return {
      minLeft: -targetLeft + offsetX,
      minTop: -targetTop + offsetY,
      maxLeft: clientWidth - targetLeft - targetWidth + offsetX,
      maxTop: clientHeight - targetTop - targetHeight + offsetY,
    }
  }

  const onMousedown = (e: MouseEvent) => {
    const downX = e.clientX
    const downY = e.clientY
    const { offsetX, offsetY } = transform
    const { minLeft, minTop, maxLeft, maxTop } = getRectLimit()

    const onMousemove = (e: MouseEvent) => {
      const moveX = Math.min(
        Math.max(offsetX + e.clientX - downX, minLeft),
        maxLeft
      )
      const moveY = Math.min(
        Math.max(offsetY + e.clientY - downY, minTop),
        maxTop
      )

      transform = {
        offsetX: moveX,
        offsetY: moveY,
      }
      targetRef.value!.style.transform = `translate(${addUnit(
        moveX
      )}, ${addUnit(moveY)})`
    }

    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mouseup', onMouseup)
    }

    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  }

  const useWindowResizeObserver = (fn: () => any) => {
    let resizeTimeout: ReturnType<typeof setTimeout> | null
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null
          fn()
        }, 66)
      }
    }
    window.addEventListener('resize', resizeThrottler, false)
    return {
      clear: () => {
        window.removeEventListener('resize', resizeThrottler)
      },
    }
  }

  let windowResizeObserver: ReturnType<typeof useWindowResizeObserver> | null
  const windowResizeHandle = () => {
    const { offsetX, offsetY } = transform
    const { minLeft, minTop, maxLeft, maxTop } = getRectLimit()
    const moveX = Math.min(Math.max(offsetX, minLeft), maxLeft)
    const moveY = Math.min(Math.max(offsetY, minTop), maxTop)

    transform = {
      offsetX: moveX,
      offsetY: moveY,
    }
    targetRef.value!.style.transform = `translate(${addUnit(moveX)}, ${addUnit(
      moveY
    )})`
  }
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener('mousedown', onMousedown)
      windowResizeObserver = useWindowResizeObserver(windowResizeHandle)
    }
  }

  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener('mousedown', onMousedown)
    }
    if (windowResizeObserver) {
      windowResizeObserver.clear()
    }
  }

  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable()
      } else {
        offDraggable()
      }
    })
  })

  onBeforeUnmount(() => {
    offDraggable()
  })
}
