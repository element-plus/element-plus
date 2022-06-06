import { ref } from 'vue'
import { isNumber } from '@element-plus/utils'

export const useScrollbar = () => {
  const scrollBarRef = ref()

  const scrollTo = (options: ScrollToOptions | number, yCoord?: number) => {
    const scrollbar = scrollBarRef.value
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord)
    }
  }

  const setScrollPosition = (position: 'Top' | 'Left', offset?: number) => {
    const scrollbar = scrollBarRef.value
    if (scrollbar && isNumber(offset) && ['Top', 'Left'].includes(position)) {
      scrollbar[`setScroll${position}`](offset)
    }
  }

  const setScrollTop = (top?: number) => setScrollPosition('Top', top)
  const setScrollLeft = (left?: number) => setScrollPosition('Left', left)

  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft,
  }
}
