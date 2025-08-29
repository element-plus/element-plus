import { type Ref, computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { DrawerPropsPublic } from '../drawer'

export function useDragResize(
  props: DrawerPropsPublic,
  drawerRef: Ref<HTMLElement | undefined>
) {
  const isHorizontal = computed(
    () => props.direction === 'rtl' || props.direction === 'ltr'
  )

  const isEnterArea = ref(false)
  const isDragging = ref(false)
  const startPos = ref({ x: 0, y: 0 })
  const startSize = ref(0)

  const resizeSize = ref(0)
  const isResizing = computed(() => isEnterArea.value || isDragging.value)

  const isValidDirection = () => {
    return (
      props.direction && ['ltr', 'rtl', 'ttb', 'btt'].includes(props.direction)
    )
  }

  const getDirectionConfig = () => {
    const configs = {
      ltr: { isHorizontal: true, checkEdge: 'right', invertDelta: true },
      rtl: { isHorizontal: true, checkEdge: 'left', invertDelta: false },
      ttb: { isHorizontal: false, checkEdge: 'bottom', invertDelta: true },
      btt: { isHorizontal: false, checkEdge: 'top', invertDelta: false },
    } as const
    return configs[props.direction!]
  }

  const checkResizeArea = (event: MouseEvent, rect: DOMRect): boolean => {
    const threshold = 10
    const config = getDirectionConfig()

    const edgeChecks = {
      left: () => event.clientX - rect.left < threshold,
      right: () => rect.right - event.clientX < threshold,
      top: () => event.clientY - rect.top < threshold,
      bottom: () => rect.bottom - event.clientY < threshold,
    }

    return edgeChecks[config.checkEdge]()
  }

  const calculateResizeSize = (event: MouseEvent): number => {
    const config = getDirectionConfig()
    const delta = config.isHorizontal
      ? startPos.value.x - event.clientX
      : startPos.value.y - event.clientY

    return startSize.value + (config.invertDelta ? -delta : delta)
  }

  const clampSize = (size: number): number => {
    const minSize = 200
    const maxSize = isHorizontal.value ? window.innerWidth : window.innerHeight
    return Math.max(minSize, Math.min(maxSize, size))
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!drawerRef.value || !isValidDirection()) return

    const rect = drawerRef.value.getBoundingClientRect()
    isEnterArea.value = checkResizeArea(event, rect)
  }

  const handleMouseLeave = () => (isEnterArea.value = false)

  const handleMouseDown = (event: MouseEvent) => {
    if (!isEnterArea.value || !drawerRef.value) return
    event.preventDefault()

    isDragging.value = true
    startPos.value = { x: event.clientX, y: event.clientY }
    startSize.value = isHorizontal.value
      ? drawerRef.value.offsetWidth
      : drawerRef.value.offsetHeight

    const cleanupWindowMove = useEventListener(
      document,
      'mousemove',
      handleWindowMouseMove
    )
    const cleanupWindowUp = useEventListener(document, 'mouseup', () => {
      if (isDragging.value) {
        isDragging.value = false
        cleanupWindowMove()
        cleanupWindowUp()
      }
    })
  }

  // window mouse event
  const handleWindowMouseMove = (event: MouseEvent) => {
    if (!isDragging.value) return

    const currentSize = calculateResizeSize(event)
    resizeSize.value = clampSize(currentSize)
  }

  const resizeEvent = () => {
    const cleanupMouseMove = useEventListener(
      drawerRef,
      'mousemove',
      handleMouseMove
    )
    const cleanupMouseLeave = useEventListener(
      drawerRef,
      'mouseleave',
      handleMouseLeave
    )
    const cleanupMouseDown = useEventListener(
      drawerRef,
      'mousedown',
      handleMouseDown
    )

    return () => {
      cleanupMouseMove()
      cleanupMouseLeave()
      cleanupMouseDown()
      isDragging.value = false
      isEnterArea.value = false
    }
  }

  return {
    isHorizontal,
    isResizing,
    resizeSize,
    resizeEvent,
  }
}
