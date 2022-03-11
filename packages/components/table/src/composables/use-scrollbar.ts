import { ref } from 'vue'
import { isNumber } from '@element-plus/utils'

export const useScrollbar = () => {
  const scrollBarRef = ref()

  const scrollTo = ({ top, left }: { top?: number; left?: number }) => {
    setScrollTop(top)
    setScrollLeft(left)
  }

  const setScrollTop = (top?: number) => {
    const scrollbar = scrollBarRef.value
    if (scrollbar && isNumber(top)) {
      scrollbar.setScrollTop(top)
    }
  }

  const setScrollLeft = (left?: number) => {
    const scrollbar = scrollBarRef.value
    if (scrollbar && isNumber(left)) {
      scrollbar.setScrollLeft(left)
    }
  }

  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft,
  }
}
