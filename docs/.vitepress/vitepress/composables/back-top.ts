import { ref, onMounted, onBeforeUnmount } from 'vue'
import { throttleAndDebounce } from '../utils'

const threshold = 960

const cubic = (value: number): number => Math.pow(value, 3)
const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

export const useBackTop = (offset = 200) => {
  const shouldShow = ref(false)
  const throttleResize = throttleAndDebounce(onResize, 300)
  const throttleScroll = throttleAndDebounce(onScroll, 160)

  onMounted(() => {
    onResize()
    onScroll()
    window.addEventListener('resize', throttleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', throttleResize)
    window.removeEventListener('scroll', throttleScroll)
  })

  const scrollToTop = () => {
    const beginTime = Date.now()
    const beginValue = document.documentElement.scrollTop
    const rAF = window.requestAnimationFrame
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        document.documentElement.scrollTop =
          beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        document.documentElement.scrollTop = 0
      }
    }
    rAF(frameFunc)
  }

  function onResize() {
    const { clientWidth } = document.body

    if (clientWidth < threshold) {
      window.addEventListener('scroll', throttleScroll)
    } else {
      window.removeEventListener('scroll', throttleScroll)
    }
  }

  function onScroll() {
    shouldShow.value = document.documentElement.scrollTop > offset
  }

  return {
    shouldShow,
    scrollToTop,
  }
}
