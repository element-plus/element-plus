// @ts-nocheck
import {
  computed,
  nextTick,
  onMounted,
  ref,
  unref,
  watch,
  watchEffect,
} from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { isNumber, isString } from '@element-plus/utils'
import { useSize } from '@element-plus/hooks'
import { parseHeight } from '../util'

import type { Table, TableProps } from './defaults'
import type { Store } from '../store'
import type TableLayout from '../table-layout'
import type { TableColumnCtx } from '../table-column/defaults'

function useStyle<T>(
  props: TableProps<T>,
  layout: TableLayout<T>,
  store: Store<T>,
  table: Table<T>
) {
  const isHidden = ref(false)
  const renderExpanded = ref(null)
  const resizeProxyVisible = ref(false)
  const setDragVisible = (visible: boolean) => {
    resizeProxyVisible.value = visible
  }
  const resizeState = ref<{
    width: null | number
    height: null | number
  }>({
    width: null,
    height: null,
  })
  const isGroup = ref(false)
  const scrollbarViewStyle = {
    display: 'block',
    verticalAlign: 'middle',
  }
  const tableWidth = ref()

  watchEffect(() => {
    layout.setHeight(props.height)
  })
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight)
  })
  watch(
    () => [props.currentRowKey, store.states.rowKey],
    ([currentRowKey, rowKey]) => {
      if (!unref(rowKey)) return
      store.setCurrentRowKey(`${currentRowKey}`)
    },
    {
      immediate: true,
    }
  )
  watch(
    () => props.data,
    (data) => {
      table.store.commit('setData', data)
    },
    {
      immediate: true,
      deep: true,
    }
  )
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys)
    }
  })

  const handleMouseLeave = () => {
    table.store.commit('setHoverRow', null)
    if (table.hoverState) table.hoverState = null
  }

  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5
    }
  }

  const shouldUpdateHeight = computed(() => {
    return (
      props.height ||
      props.maxHeight ||
      store.states.fixedColumns.value.length > 0 ||
      store.states.rightFixedColumns.value.length > 0
    )
  })

  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : '',
    }
  })

  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight()
    }
    layout.updateColumnsWidth()
    requestAnimationFrame(syncPostion)
  }
  onMounted(async () => {
    await nextTick()
    store.updateColumns()
    bindEvents()
    requestAnimationFrame(doLayout)

    const el: HTMLElement = table.vnode.el as HTMLElement
    if (props.flexible && el && el.parentElement) {
      // Automatic minimum size of flex-items
      // Ensure that the main axis does not follow the width of the items
      el.parentElement.style.minWidth = '0'
    }

    resizeState.value = {
      width: (tableWidth.value = el.offsetWidth),
      height: el.offsetHeight,
    }

    // init filters
    store.states.columns.value.forEach((column: TableColumnCtx<T>) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit('filterChange', {
          column,
          values: column.filteredValue,
          silent: true,
        })
      }
    })
    table.$ready = true
  })
  const setScrollClassByEl = (el: HTMLElement, className: string) => {
    if (!el) return
    const classList = Array.from(el.classList).filter(
      (item) => !item.startsWith('is-scrolling-')
    )
    classList.push(layout.scrollX.value ? className : 'is-scrolling-none')
    el.className = classList.join(' ')
  }
  const setScrollClass = (className: string) => {
    const { tableWrapper } = table.refs
    setScrollClassByEl(tableWrapper, className)
  }
  const hasScrollClass = (className: string) => {
    const { tableWrapper } = table.refs
    return !!(tableWrapper && tableWrapper.classList.contains(className))
  }
  const syncPostion = function () {
    if (!table.refs.scrollBarRef) return
    if (!layout.scrollX.value) {
      const scrollingNoneClass = 'is-scrolling-none'
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass)
      }
      return
    }
    const scrollContainer = table.refs.scrollBarRef.wrap$
    if (!scrollContainer) return
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer
    const { headerWrapper, footerWrapper } = table.refs
    if (headerWrapper) headerWrapper.scrollLeft = scrollLeft
    if (footerWrapper) footerWrapper.scrollLeft = scrollLeft
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass('is-scrolling-right')
    } else if (scrollLeft === 0) {
      setScrollClass('is-scrolling-left')
    } else {
      setScrollClass('is-scrolling-middle')
    }
  }

  const bindEvents = () => {
    if (!table.refs.scrollBarRef) return
    if (table.refs.scrollBarRef.wrap$) {
      useEventListener(table.refs.scrollBarRef.wrap$, 'scroll', syncPostion, {
        passive: true,
      })
    }
    if (props.fit) {
      useResizeObserver(table.vnode.el as HTMLElement, resizeListener)
    } else {
      useEventListener(window, 'resize', resizeListener)
    }
  }
  const resizeListener = () => {
    if (!table.$ready) return
    let shouldUpdateLayout = false
    const el = table.vnode.el
    const { width: oldWidth, height: oldHeight } = resizeState.value

    const width = (tableWidth.value = el.offsetWidth)
    if (oldWidth !== width) {
      shouldUpdateLayout = true
    }

    const height = el.offsetHeight
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true
    }

    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height,
      }
      doLayout()
    }
  }
  const tableSize = useSize()
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout
    return bodyWidth_.value
      ? `${(bodyWidth_.value as number) - (scrollY.value ? gutterWidth : 0)}px`
      : ''
  })

  const tableLayout = computed(() => {
    if (props.maxHeight) return 'fixed'
    return props.tableLayout
  })

  function calcMaxHeight(
    maxHeight: string | number,
    footerHeight: number,
    headerHeight: number
  ) {
    const parsedMaxHeight = parseHeight(maxHeight)
    const tableHeaderHeight = props.showHeader ? headerHeight : 0
    if (parsedMaxHeight === null) return
    if (isString(parsedMaxHeight)) {
      return `calc(${parsedMaxHeight} - ${footerHeight}px - ${tableHeaderHeight}px)`
    }
    return parsedMaxHeight - footerHeight - tableHeaderHeight
  }

  const height = computed(() => {
    const headerHeight = layout.headerHeight.value || 0
    const bodyHeight = layout.bodyHeight.value
    const footerHeight = layout.footerHeight.value || 0
    if (props.height) {
      return bodyHeight ? bodyHeight : undefined
    } else if (props.maxHeight) {
      return calcMaxHeight(props.maxHeight, footerHeight, headerHeight)
    }
    return undefined
  })

  const bodyHeight = computed(() => {
    const headerHeight = layout.headerHeight.value || 0
    const bodyHeight = layout.bodyHeight.value
    const footerHeight = layout.footerHeight.value || 0
    if (props.height) {
      return {
        height: bodyHeight ? `${bodyHeight}px` : '',
      }
    } else if (props.maxHeight) {
      const maxHeight = calcMaxHeight(
        props.maxHeight,
        footerHeight,
        headerHeight
      )
      if (maxHeight !== null) {
        return {
          'max-height': `${maxHeight}${isNumber(maxHeight) ? 'px' : ''}`,
        }
      }
    }
    return {}
  })
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length) return null
    let height = '100%'
    if (layout.appendHeight.value) {
      height = `calc(100% - ${layout.appendHeight.value}px)`
    }
    return {
      width: tableWidth.value ? `${tableWidth.value}px` : '',
      height,
    }
  })
  /**
   * fix layout
   */
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault()
      }
      if (
        data.pixelY > 0 &&
        bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop
      ) {
        event.preventDefault()
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5)
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5)
    }
  }
  const fixedHeight = computed(() => {
    if (props.maxHeight) {
      if (props.showSummary) {
        return {
          bottom: 0,
        }
      }
      return {
        bottom:
          layout.scrollX.value && props.data.length
            ? `${layout.gutterWidth}px`
            : '',
      }
    } else {
      if (props.showSummary) {
        return {
          height: layout.tableHeight.value
            ? `${layout.tableHeight.value}px`
            : '',
        }
      }
      return {
        height: layout.viewportHeight.value
          ? `${layout.viewportHeight.value}px`
          : '',
      }
    }
  })
  const fixedBodyHeight = computed(() => {
    if (props.height) {
      return {
        height: layout.fixedBodyHeight.value
          ? `${layout.fixedBodyHeight.value}px`
          : '',
      }
    } else if (props.maxHeight) {
      let maxHeight = parseHeight(props.maxHeight)
      if (typeof maxHeight === 'number') {
        maxHeight = layout.scrollX.value
          ? maxHeight - layout.gutterWidth
          : maxHeight
        if (props.showHeader) {
          maxHeight -= layout.headerHeight.value
        }
        maxHeight -= layout.footerHeight.value
        return {
          'max-height': `${maxHeight}px`,
        }
      }
    }
    return {}
  })

  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    bodyHeight,
    height,
    emptyBlockStyle,
    handleFixedMousewheel,
    fixedHeight,
    fixedBodyHeight,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
  }
}

export default useStyle
