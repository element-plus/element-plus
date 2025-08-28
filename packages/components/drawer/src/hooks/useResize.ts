import { type Ref, computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

export function useDragResize(drawerRef: Ref<HTMLElement | undefined>) {
  const isEnterArea = ref(false)
  const isDragging = ref(false)
  const startX = ref(0)
  const startWidth = ref(0)

  const resizeSize = ref(0)
  const isResizing = computed(() => isEnterArea.value || isDragging.value)

  const handleMouseMove = (event: MouseEvent) => {
    const drawerLeft = drawerRef.value?.getBoundingClientRect().x ?? 0
    isEnterArea.value = event.clientX - drawerLeft < 10
  }

  const handleMouseLeave = () => (isEnterArea.value = false)

  const handleMouseDown = (event: MouseEvent) => {
    if (isEnterArea.value) {
      event.preventDefault()

      isDragging.value = true
      startX.value = event.clientX
      startWidth.value = drawerRef.value?.offsetWidth || 0

      document.addEventListener('mousemove', handleWindowMouseMove)
      document.addEventListener('mouseup', handleWindowMouseUp)
    }
  }

  // window mouse event
  const handleWindowMouseMove = (event: MouseEvent) => {
    if (isDragging.value && drawerRef.value) {
      const deltaX = startX.value - event.clientX
      const calculatedWidth = startWidth.value + deltaX

      const minWidth = 200
      const maxWidth = window.innerWidth
      const clampedWidth = Math.max(
        minWidth,
        Math.min(maxWidth, calculatedWidth)
      )

      resizeSize.value = clampedWidth
    }
  }

  const handleWindowMouseUp = () => {
    if (isDragging.value) {
      isDragging.value = false

      document.removeEventListener('mousemove', handleWindowMouseMove)
      document.removeEventListener('mouseup', handleWindowMouseUp)
    }
  }

  const resizeEvent = () => {
    useEventListener(drawerRef, 'mousemove', handleMouseMove)
    useEventListener(drawerRef, 'mouseleave', handleMouseLeave)
    useEventListener(drawerRef, 'mousedown', handleMouseDown)
  }

  return {
    isEnterArea,
    isDragging,
    isResizing,
    resizeSize,
    resizeEvent,
  }
}
