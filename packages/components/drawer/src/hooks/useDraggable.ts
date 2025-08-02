import { Ref, computed, onBeforeUnmount, ref, watch } from 'vue'
import { DrawerProps } from '../drawer'
import { addUnit, isString } from '@element-plus/utils'
import { clamp, useEventListener, useWindowSize } from '@vueuse/core'
import { toNumber } from 'lodash-unified'

function getNumberSize(size: number | string, windowSize: number) {
  if (isString(size)) {
    if (size.endsWith('%')) {
      return (toNumber(size.slice(0, -1)) / 100) * windowSize
    }
    if (size.endsWith('px')) {
      return toNumber(size.slice(0, -2))
    }
  }
  return toNumber(size)
}

export function useDraggable(
  props: DrawerProps,
  target: Ref<HTMLElement | undefined>
) {
  const { width, height } = useWindowSize()

  const isHorizontal = computed(() => ['ltr', 'rtl'].includes(props.direction))
  const sign = computed(() =>
    ['ltr', 'ttb'].includes(props.direction) ? 1 : -1
  )
  const windowSize = computed(() =>
    isHorizontal.value ? width.value : height.value
  )
  const getSize = computed(() => {
    return clamp(
      startSize.value + sign.value * offset.value,
      4,
      windowSize.value
    )
  })

  const startSize = ref(getNumberSize(props.size, windowSize.value))
  const offset = ref(0)
  const isDragging = ref(false)
  let startPos: number[] = []
  let cleanups: (() => void)[] = []

  watch(
    () => [props.size, props.draggable] as const,
    ([val]) => {
      startSize.value = getNumberSize(val, windowSize.value)
      offset.value = 0
      onMouseUp()
    }
  )

  const onMousedown = (e: MouseEvent) => {
    if (!props.draggable) return
    startPos = [e.pageX, e.pageY]
    isDragging.value = true
    cleanups.push(
      useEventListener(window, 'mouseup', onMouseUp),
      useEventListener(window, 'mousemove', onMouseMove)
    )
  }

  const onMouseMove = (e: MouseEvent) => {
    const { pageX, pageY } = e
    const offsetX = pageX - startPos[0]
    const offsetY = pageY - startPos[1]
    offset.value = isHorizontal.value ? offsetX : offsetY
  }

  const onMouseUp = () => {
    startPos = []
    startSize.value = getSize.value
    offset.value = 0
    isDragging.value = false
    cleanups.forEach((cleanup) => cleanup?.())
    cleanups = []
  }

  const cleanup = useEventListener(target, 'mousedown', onMousedown)

  onBeforeUnmount(() => {
    cleanup()
    onMouseUp()
  })

  return {
    size: computed(() => {
      return props.draggable ? `${getSize.value}px` : addUnit(props.size)
    }),
    isDragging,
  }
}
