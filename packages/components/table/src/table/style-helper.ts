import {
  onMounted,
  onUnmounted,
  computed,
  ref,
  watchEffect,
  watch,
  unref,
  nextTick,
} from 'vue'
import throttle from 'lodash/throttle'
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import { useGlobalConfig } from '@element-plus/utils/util'
import { on, off } from '@element-plus/utils/dom'
import { parseHeight } from '../util'

import type { ResizableElement } from '@element-plus/utils/resize-event'
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
  const $ELEMENT = useGlobalConfig()
  const isHidden = ref(false)
  const renderExpanded = ref(null)
  const resizeProxyVisible = ref(false)
  const setDragVisible = (visible: boolean) => {
    resizeProxyVisible.value = visible
  }
  const resizeState = ref({
    width: null,
    height: null,
  })
  const isGroup = ref(false)

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

  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight()
    }
    layout.updateColumnsWidth()
    syncPostion()
  }
  onMounted(async () => {
    setScrollClass('is-scrolling-left')
    store.updateColumns()
    await nextTick()
    bindEvents()
    doLayout()

    resizeState.value = {
      width: table.vnode.el.offsetWidth,
      height: table.vnode.el.offsetHeight,
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
    const { bodyWrapper } = table.refs
    setScrollClassByEl(bodyWrapper, className)
  }
  const syncPostion = throttle(function () {
    if (!table.refs.bodyWrapper) return
    const { scrollLeft, scrollTop, offsetWidth, scrollWidth } =
      table.refs.bodyWrapper
    const {
      headerWrapper,
      footerWrapper,
      fixedBodyWrapper,
      rightFixedBodyWrapper,
    } = table.refs
    if (headerWrapper) headerWrapper.scrollLeft = scrollLeft
    if (footerWrapper) footerWrapper.scrollLeft = scrollLeft
    if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop
    if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass('is-scrolling-right')
    } else if (scrollLeft === 0) {
      setScrollClass('is-scrolling-left')
    } else {
      setScrollClass('is-scrolling-middle')
    }
  }, 10)

  const bindEvents = () => {
    table.refs.bodyWrapper.addEventListener('scroll', syncPostion, {
      passive: true,
    })
    if (props.fit) {
      addResizeListener(table.vnode.el as ResizableElement, resizeListener)
    } else {
      on(window, 'resize', doLayout)
    }
  }
  onUnmounted(() => {
    unbindEvents()
  })
  const unbindEvents = () => {
    table.refs.bodyWrapper?.removeEventListener('scroll', syncPostion, true)
    if (props.fit) {
      removeResizeListener(table.vnode.el as ResizableElement, resizeListener)
    } else {
      off(window, 'resize', doLayout)
    }
  }
  const resizeListener = () => {
    if (!table.$ready) return
    let shouldUpdateLayout = false
    const el = table.vnode.el
    const { width: oldWidth, height: oldHeight } = resizeState.value

    const width = el.offsetWidth
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
  const tableSize = computed(() => {
    return props.size || $ELEMENT.size
  })
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout
    return bodyWidth_.value
      ? `${(bodyWidth_.value as number) - (scrollY.value ? gutterWidth : 0)}px`
      : ''
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
      const maxHeight = parseHeight(props.maxHeight)
      if (typeof maxHeight === 'number') {
        return {
          'max-height': `${
            maxHeight - footerHeight - (props.showHeader ? headerHeight : 0)
          }px`,
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
      width: bodyWidth.value,
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
    emptyBlockStyle,
    handleFixedMousewheel,
    fixedHeight,
    fixedBodyHeight,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
  }
}

export default useStyle
