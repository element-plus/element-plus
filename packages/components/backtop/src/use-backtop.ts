import { onMounted, ref, shallowRef } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { easeInOutCubic, throwError } from '@element-plus/utils'

import type { SetupContext } from 'vue'
import type { BacktopEmits, BacktopProps } from './backtop'

export const useBackTop = (
  props: BacktopProps,
  emit: SetupContext<BacktopEmits>['emit'],
  componentName: string
) => {
  const el = shallowRef<HTMLElement>()
  const container = shallowRef<Document | HTMLElement>()
  const visible = ref(false)

  const scrollToTop = () => {
    // TODO: use https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo, with behavior: 'smooth'

    if (!el.value) return
    const beginTime = Date.now()
    const beginValue = el.value.scrollTop
    const frameFunc = () => {
      if (!el.value) return
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        requestAnimationFrame(frameFunc)
      } else {
        el.value.scrollTop = 0
      }
    }
    requestAnimationFrame(frameFunc)
  }
  const handleScroll = () => {
    if (el.value) visible.value = el.value.scrollTop >= props.visibilityHeight
  }

  const handleClick = (event: MouseEvent) => {
    scrollToTop()
    emit('click', event)
  }

  const handleScrollThrottled = useThrottleFn(handleScroll, 300, true)

  useEventListener(container, 'scroll', handleScrollThrottled)
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
  })

  return {
    visible,
    handleClick,
  }
}
