import { ref, unref, watch } from 'vue'

import type { Ref } from 'vue'
import type { Alignment as ScrollStrategy } from '@element-plus/components/src/virtual-list'
import type { TableV2Props } from '../table'
import type { TableGridInstance } from '../table-grid'

export type ScrollPos = { scrollLeft: number; scrollTop: number }
type GridInstanceRef = Ref<TableGridInstance | undefined>

type UseScrollBarProps = {
  mainTableRef: GridInstanceRef
  leftTableRef: GridInstanceRef
  rightTableRef: GridInstanceRef

  onMaybeEndReached: () => void
}

export type { ScrollStrategy }

export const useScrollbar = (
  props: TableV2Props,
  {
    mainTableRef,
    leftTableRef,
    rightTableRef,
    onMaybeEndReached,
  }: UseScrollBarProps
) => {
  const scrollPos = ref<ScrollPos>({ scrollLeft: 0, scrollTop: 0 })

  function doScroll(params: ScrollPos) {
    const { scrollTop } = params

    mainTableRef.value?.scrollTo(params)
    leftTableRef.value?.scrollToTop(scrollTop)
    rightTableRef.value?.scrollToTop(scrollTop)
  }

  // methods
  function scrollTo(params: ScrollPos) {
    scrollPos.value = params

    doScroll(params)
  }

  function scrollToTop(scrollTop: number) {
    scrollPos.value.scrollTop = scrollTop

    doScroll(unref(scrollPos))
  }

  function scrollToLeft(scrollLeft: number) {
    scrollPos.value.scrollLeft = scrollLeft

    mainTableRef.value?.scrollTo?.(unref(scrollPos))
  }

  function onScroll(params: ScrollPos) {
    scrollTo(params)
    props.onScroll?.(params)
  }

  function onVerticalScroll({ scrollTop }: ScrollPos) {
    const { scrollTop: currentScrollTop } = unref(scrollPos)
    if (scrollTop !== currentScrollTop) scrollToTop(scrollTop)
  }

  function scrollToRow(row: number, strategy: ScrollStrategy = 'auto') {
    mainTableRef.value?.scrollToRow(row, strategy)
  }

  // When scrollTop changes, maybe reaching the bottom
  watch(
    () => unref(scrollPos).scrollTop,
    (cur, prev) => {
      if (cur > prev) onMaybeEndReached()
    }
  )

  return {
    scrollPos,

    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll,
  }
}
