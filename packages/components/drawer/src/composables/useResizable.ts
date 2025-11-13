import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { addUnit } from '@element-plus/utils'
import { clamp, useEventListener, useWindowSize } from '@vueuse/core'

import type { Ref, SetupContext } from 'vue'
import type { DrawerEmits, DrawerProps } from '../drawer'

export function useResizable(
  props: DrawerProps,
  target: Ref<HTMLElement | undefined>,
  emit: SetupContext<DrawerEmits>['emit']
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

  const startSize = ref(0)
  const offset = ref(0)
  const isResizing = ref(false)
  const hasStartedDragging = ref(false)
  let startPos: number[] = []
  let cleanups: (() => void)[] = []

  const getActualSize = () => {
    const drawerEl = target.value?.closest('[aria-modal="true"]') as HTMLElement
    if (drawerEl) {
      return isHorizontal.value ? drawerEl.offsetWidth : drawerEl.offsetHeight
    }
    return 100
  }

  watch(
    () => [props.size, props.resizable] as const,
    () => {
      hasStartedDragging.value = false
      startSize.value = 0
      offset.value = 0
      onMouseUp()
    }
  )

  const onMousedown = (e: MouseEvent) => {
    if (!props.resizable) return

    if (!hasStartedDragging.value) {
      startSize.value = getActualSize()
      hasStartedDragging.value = true
    }

    startPos = [e.pageX, e.pageY]
    isResizing.value = true
    emit('resize-start', e)
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
    emit('resize', e, getSize.value)
  }

  const onMouseUp = (e?: MouseEvent) => {
    // premature interruption
    // avoid triggering meaningless execution due to watch size/resizable constraints.
    if (!isResizing.value) return

    startPos = []
    startSize.value = getSize.value
    offset.value = 0
    isResizing.value = false
    cleanups.forEach((cleanup) => cleanup?.())
    cleanups = []
    if (e) {
      emit('resize-end', e, startSize.value)
    }
  }

  const cleanup = useEventListener(target, 'mousedown', onMousedown)

  onBeforeUnmount(() => {
    cleanup()
    onMouseUp()
  })

  return {
    size: computed(() => {
      return hasStartedDragging.value
        ? `${getSize.value}px`
        : addUnit(props.size)
    }),
    isResizing,
    isHorizontal,
  }
}
