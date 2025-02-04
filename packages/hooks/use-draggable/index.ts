import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import { addUnit } from '@element-plus/utils'
import type { ComputedRef, Ref } from 'vue'

export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
  overflow?: ComputedRef<boolean>
) => {
  let transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const onMousedown = (e: MouseEvent) => {
    const downX = e.clientX
    const downY = e.clientY
    const { offsetX, offsetY } = transform
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    let minTop = 0
    let maxTop = 0
    let minLeft = 0
    let maxLeft = 0

    if (!overflow?.value) {
      const targetRect = targetRef.value!.getBoundingClientRect()
      const targetLeft = targetRect.left
      const targetTop = targetRect.top
      const targetWidth = targetRect.width
      const targetHeight = targetRect.height

      minLeft = -targetLeft + offsetX
      minTop = -targetTop + offsetY
      maxLeft = clientWidth - targetLeft - targetWidth + offsetX
      maxTop = clientHeight - targetTop - targetHeight + offsetY
    } else {
      const dragRect = dragRef.value!.getBoundingClientRect()
      const {
        left: dragLeft,
        top: dragTop,
        width: dragWidth,
        height: dragHeight,
      } = dragRect

      const dragPx = 20
      minLeft = offsetX - dragLeft - dragWidth + dragPx
      maxLeft = clientWidth - dragLeft + offsetX - dragPx
      minTop = offsetY - dragTop - dragHeight + dragPx
      maxTop = clientHeight - dragTop + offsetY - dragPx
    }

    const onMousemove = (e: MouseEvent) => {
      let moveX = offsetX + e.clientX - downX
      let moveY = offsetY + e.clientY - downY
      moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
      moveY = Math.min(Math.max(moveY, minTop), maxTop)
      transform = {
        offsetX: moveX,
        offsetY: moveY,
      }

      if (targetRef.value) {
        targetRef.value.style.transform = `translate(${addUnit(
          moveX
        )}, ${addUnit(moveY)})`
      }
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
    }
  }

  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener('mousedown', onMousedown)
    }
  }

  const resetPosition = () => {
    transform = {
      offsetX: 0,
      offsetY: 0,
    }
    if (targetRef.value) {
      targetRef.value.style.transform = 'none'
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

  return {
    resetPosition,
  }
}
