import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'

import type { AutoResizerProps } from '../auto-resizer'

const useAutoResize = (props: AutoResizerProps) => {
  const sizer = ref<HTMLElement>()
  const width$ = ref(0)
  const height$ = ref(0)

  let resizerStopper: ReturnType<typeof useResizeObserver>['stop']
  onMounted(() => {
    resizerStopper = useResizeObserver(sizer, ([entry]) => {
      const { width, height } = entry.contentRect
      const { paddingLeft, paddingRight, paddingTop, paddingBottom } =
        getComputedStyle(entry.target)

      const left = Number.parseInt(paddingLeft) || 0
      const right = Number.parseInt(paddingRight) || 0
      const top = Number.parseInt(paddingTop) || 0
      const bottom = Number.parseInt(paddingBottom) || 0

      width$.value = width - left - right
      height$.value = height - top - bottom
    }).stop
  })

  onBeforeUnmount(() => {
    resizerStopper?.()
  })

  watch([width$, height$], ([width, height]) => {
    props.onResize?.({
      width,
      height,
    })
  })

  return {
    sizer,
    width: width$,
    height: height$,
  }
}

export { useAutoResize }
