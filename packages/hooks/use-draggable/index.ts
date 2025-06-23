import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import { addUnit } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'

export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
  overflow?: ComputedRef<boolean>
) => {
  const transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const adjustPosition = (moveX: number, moveY: number) => {
    if (targetRef.value) {
      const { offsetX, offsetY } = transform
      const targetRect = targetRef.value.getBoundingClientRect()
      const targetLeft = targetRect.left
      const targetTop = targetRect.top
      const targetWidth = targetRect.width
      const targetHeight = targetRect.height

      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight

      const minLeft = -targetLeft + offsetX
      const minTop = -targetTop + offsetY
      const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
      const maxTop =
        clientHeight -
        targetTop -
        (targetHeight < clientHeight ? targetHeight : 0) +
        offsetY

      if (!overflow?.value) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
        moveY = Math.min(Math.max(moveY, minTop), maxTop)
      }

      transform.offsetX = moveX
      transform.offsetY = moveY

      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(
        moveY
      )})`
    }
  }

  const onMousedown = (e: MouseEvent) => {
    const downX = e.clientX
    const downY = e.clientY
    const { offsetX, offsetY } = transform

    const onMousemove = (e: MouseEvent) => {
      const moveX = offsetX + e.clientX - downX
      const moveY = offsetY + e.clientY - downY

      adjustPosition(moveX, moveY)
    }

    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mouseup', onMouseup)
    }

    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  }

  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener('mousedown', onMousedown)
      window.addEventListener('resize', updatePosition)
    }
  }

  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener('mousedown', onMousedown)
      window.removeEventListener('resize', updatePosition)
    }
  }

  const resetPosition = () => {
    transform.offsetX = 0
    transform.offsetY = 0

    if (targetRef.value) {
      targetRef.value.style.transform = ''
    }
  }

  const updatePosition = () => {
    const { offsetX, offsetY } = transform

    adjustPosition(offsetX, offsetY)
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

  return {
    resetPosition,
    updatePosition,
  }
}
