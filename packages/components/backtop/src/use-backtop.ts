import { onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { throwError } from '@element-plus/utils'

import type { SetupContext } from 'vue'
import type { BacktopEmits, BacktopProps } from './backtop'

export const useBackTop = (
  props: Required<BacktopProps>,
  emit: SetupContext<BacktopEmits>['emit'],
  componentName: string
) => {
  const el = shallowRef<HTMLElement>()
  const container = shallowRef<Document | HTMLElement>()
  const visible = ref(false)
  const scrollProgress = ref(0)
  let animationFrameId: number | undefined

  const handleScroll = () => {
    if (!el.value) return

    const { clientHeight, scrollHeight, scrollTop } = el.value
    visible.value = scrollTop >= props.visibilityHeight
    if (!props.showProgress) return

    const maxScrollTop = scrollHeight - clientHeight
    scrollProgress.value =
      maxScrollTop > 0 ? Math.min(Math.max(scrollTop / maxScrollTop, 0), 1) : 0
  }

  const handleClick = (event: MouseEvent) => {
    el.value?.scrollTo({ top: 0, behavior: 'smooth' })
    emit('click', event)
  }

  const scheduleScrollUpdate = () => {
    if (animationFrameId !== undefined) return

    animationFrameId = requestAnimationFrame(() => {
      handleScroll()
      animationFrameId = undefined
    })
  }

  const handleResize = () => {
    if (props.showProgress) scheduleScrollUpdate()
  }

  useEventListener(container, 'scroll', scheduleScrollUpdate)
  useEventListener('resize', handleResize)
  watch(
    () => props.showProgress,
    () => handleScroll()
  )
  onUnmounted(() => {
    if (animationFrameId !== undefined) {
      cancelAnimationFrame(animationFrameId)
    }
  })
  onMounted(() => {
    container.value = document
    el.value = document.documentElement

    if (props.target) {
      el.value = document.querySelector<HTMLElement>(props.target) ?? undefined
      if (!el.value) {
        throwError(componentName, `target does not exist: ${props.target}`)
      }
      container.value = el.value
    }
    // Give visible an initial value, fix #13066
    handleScroll()
  })

  return {
    visible,
    scrollProgress,
    handleClick,
  }
}
