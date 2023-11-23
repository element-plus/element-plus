import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import { addUnit } from '@element-plus/utils'
import type { ComputedRef, Ref } from 'vue'

import type { ElOverlay } from '@element-plus/components/overlay'

export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<InstanceType<typeof ElOverlay> | null>,
  draggable: ComputedRef<boolean>,
  overlayRef: Ref<HTMLElement | undefined>
) => {
  let transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const onMousedown = (e: MouseEvent) => {
    const downX = e.clientX
    const downY = e.clientY
    const { offsetX, offsetY } = transform

    const targetRect = targetRef.value!.getBoundingClientRect()
    const targetLeft = targetRect.left
    const targetTop = targetRect.top
    const targetWidth = targetRect.width
    const targetHeight = targetRect.height
    const clientDom = overlayRef?.value?.$el || document.documentElement
    const clientWidth = clientDom.clientWidth
    const clientHeight = clientDom.clientHeight

    const minLeft = -targetLeft + offsetX
    const minTop = -targetTop + offsetY
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
    const maxTop = clientHeight - targetTop - targetHeight + offsetY

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
