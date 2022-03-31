import { ref } from 'vue'
import { isNumber } from '@element-plus/utils'

export const useScrollbar = () => {
  const scrollBarRef = ref()

  const scrollTo = ({ top, left }: { top?: number; left?: number }) => {
    setScrollTop(top)
    setScrollLeft(left)
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
