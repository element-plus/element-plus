import { onMounted, ref, shallowRef } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { getElement, throwError } from '@element-plus/utils'

import type { SetupContext } from 'vue'
import type { BacktopEmits, BacktopProps } from './backtop'

export const useBackTop = (
  props: BacktopProps,
  emit: SetupContext<BacktopEmits>['emit'],
  componentName: string
) => {
  const el = shallowRef<HTMLElement | Window | undefined>()
  const container = shallowRef<Document | HTMLElement | Window | undefined>()
  const visible = ref(false)

  const getScrollTop = (target?: HTMLElement | Window | undefined) => {
    if (!target) return 0
    if (target === window)
      return window.pageYOffset || document.documentElement.scrollTop
    return (target as HTMLElement).scrollTop
  }

  const handleScroll = () => {
    visible.value = getScrollTop(el.value) >= props.visibilityHeight
  }

  const handleClick = (event: MouseEvent) => {
    if (!el.value) return
    if (el.value === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      ;(el.value as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' })
    }
    emit('click', event)
  }

  const handleScrollThrottled = useThrottleFn(handleScroll, 300, true)

  useEventListener(container, 'scroll', handleScrollThrottled)
  onMounted(() => {
    container.value = document
    el.value = document.documentElement as HTMLElement

    if (props.target) {
      const targetEl = getElement(props.target) as
        | HTMLElement
        | Window
        | null
        | undefined
      el.value = targetEl ?? undefined
      if (!el.value) {
        throwError(componentName, `target does not exist: ${props.target}`)
      }
      container.value = el.value as Document | HTMLElement | Window
    }
    // Give visible an initial value, fix #13066
    handleScroll()
  })

  return {
    visible,
    handleClick,
  }
}
