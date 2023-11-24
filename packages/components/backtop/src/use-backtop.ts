import { onMounted, ref, shallowRef } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { throwError } from '@element-plus/utils'
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

  const cubic = (value: number): number => value ** 3
  const easeInOutCubic = (value: number): number =>
    value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2
  const rAF = (callback: any) => {
    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      return window.requestAnimationFrame(callback)
    } else {
      return +setTimeout(callback, 16)
    }
  }
  const scrollToTop = () => {
    if (!el.value) return
    const beginTime = Date.now()
    const beginValue = el.value.scrollTop
    const frameFunc = () => {
      if (!el.value) return
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        el.value.scrollTop = 0
      }
    }
    rAF(frameFunc)
  }

  const handleScroll = () => {
    if (el.value) visible.value = el.value.scrollTop >= props.visibilityHeight
  }

  const handleClick = (event: MouseEvent) => {
    // el.value?.scrollTo({ top: 0, behavior: 'smooth' })
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
    // Give visible an initial value, fix #13066
    handleScroll()
  })

  return {
    visible,
    handleClick,
  }
}
