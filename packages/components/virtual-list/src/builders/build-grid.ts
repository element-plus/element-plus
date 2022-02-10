import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  nextTick,
  onMounted,
  onUpdated,
  resolveDynamicComponent,
  h,
  unref,
} from 'vue'
import { isClient } from '@vueuse/core'
import {
  hasOwn,
  isNumber,
  isString,
  getScrollBarWidth,
} from '@element-plus/utils-v2'
import Scrollbar from '../components/scrollbar'
import { useGridWheel } from '../hooks/use-grid-wheel'
import { useCache } from '../hooks/use-cache'
import { virtualizedGridProps } from '../props'
import { getScrollDir, getRTLOffsetType, isRTL } from '../utils'
import {
  AUTO_ALIGNMENT,
  BACKWARD,
  FORWARD,
  RTL,
  ITEM_RENDER_EVT,
  SCROLL_EVT,
  RTL_OFFSET_NAG,
  RTL_OFFSET_POS_DESC,
  RTL_OFFSET_POS_ASC,
} from '../defaults'

import type { CSSProperties, VNode, VNodeChild, StyleValue } from 'vue'
import type { GridConstructorProps, Alignment, ScrollbarExpose } from '../types'
import type { VirtualizedGridProps } from '../props'

const createGrid = ({
  name,
  clearCache,
  getColumnPosition,
  getColumnStartIndexForOffset,
  getColumnStopIndexForStartIndex,
  getEstimatedTotalHeight,
  getEstimatedTotalWidth,
  getColumnOffset,
  getRowOffset,
  getRowPosition,
  getRowStartIndexForOffset,
  getRowStopIndexForStartIndex,

  initCache,
  validateProps,
}: GridConstructorProps<VirtualizedGridProps>) => {
  return defineComponent({
    name: name ?? 'ElVirtualList',
    props: virtualizedGridProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose, slots }) {
      validateProps(props)
      const instance = getCurrentInstance()!
      const cache = ref(initCache(props, instance))
      // refs
      // here windowRef and innerRef can be type of HTMLElement
      // or user defined component type, depends on the type passed
      // by user
      const windowRef = ref<HTMLElement>()
      const hScrollbar = ref<ScrollbarExpose>()
      const vScrollbar = ref<ScrollbarExpose>()
      // innerRef is the actual container element which contains all the elements
      const innerRef = ref(null)
      const states = ref({
        isScrolling: false,
        scrollLeft: isNumber(props.initScrollLeft) ? props.initScrollLeft : 0,
        scrollTop: isNumber(props.initScrollTop) ? props.initScrollTop : 0,
        updateRequested: false,
        xAxisScrollDir: FORWARD,
        yAxisScrollDir: FORWARD,
      })

      const getItemStyleCache = useCache()

      // computed
      const parsedHeight = computed(() => parseInt(`${props.height}`, 10))
      const parsedWidth = computed(() => parseInt(`${props.width}`, 10))
      const columnsToRender = computed(() => {
        const { totalColumn, totalRow, columnCache } = props
        const { isScrolling, xAxisScrollDir, scrollLeft } = unref(states)

        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getColumnStartIndexForOffset(
          props,
          scrollLeft,
          unref(cache)
        )
        const stopIndex = getColumnStopIndexForStartIndex(
          props,
          startIndex,
          scrollLeft,
          unref(cache)
        )

        const cacheBackward =
          !isScrolling || xAxisScrollDir === BACKWARD
            ? Math.max(1, columnCache)
            : 1
        const cacheForward =
          !isScrolling || xAxisScrollDir === FORWARD
            ? Math.max(1, columnCache)
            : 1

        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(totalColumn! - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const rowsToRender = computed(() => {
        const { totalColumn, totalRow, rowCache } = props
        const { isScrolling, yAxisScrollDir, scrollTop } = unref(states)

        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getRowStartIndexForOffset(
          props,
          scrollTop,
          unref(cache)
        )
        const stopIndex = getRowStopIndexForStartIndex(
          props,
          startIndex,
          scrollTop,
          unref(cache)
        )

        const cacheBackward =
          !isScrolling || yAxisScrollDir === BACKWARD
            ? Math.max(1, rowCache)
            : 1
        const cacheForward =
          !isScrolling || yAxisScrollDir === FORWARD ? Math.max(1, rowCache) : 1

        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(totalRow! - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const estimatedTotalHeight = computed(() =>
        getEstimatedTotalHeight(props, unref(cache))
      )
      const estimatedTotalWidth = computed(() =>
        getEstimatedTotalWidth(props, unref(cache))
      )

      const windowStyle = computed<StyleValue>(() => [
        {
          position: 'relative',
          overflow: 'hidden',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
        },
        {
          direction: props.direction,
          height: isNumber(props.height) ? `${props.height}px` : props.height,
          width: isNumber(props.width) ? `${props.width}px` : props.width,
        },
        props.style ?? {},
      ])

      const innerStyle = computed(() => {
        const width = `${unref(estimatedTotalWidth)}px`
        const height = `${unref(estimatedTotalHeight)}px`

        return {
          height,
          pointerEvents: unref(states).isScrolling ? 'none' : undefined,
          width,
        }
      })

      // methods
      const emitEvents = () => {
        const { totalColumn, totalRow } = props

        if (totalColumn! > 0 && totalRow! > 0) {
          const [
            columnCacheStart,
            columnCacheEnd,
            columnVisibleStart,
            columnVisibleEnd,
          ] = unref(columnsToRender)
          const [rowCacheStart, rowCacheEnd, rowVisibleStart, rowVisibleEnd] =
            unref(rowsToRender)
          // emit the render item event with
          // [xAxisInvisibleStart, xAxisInvisibleEnd, xAxisVisibleStart, xAxisVisibleEnd]
          // [yAxisInvisibleStart, yAxisInvisibleEnd, yAxisVisibleStart, yAxisVisibleEnd]
          emit(
            ITEM_RENDER_EVT,
            columnCacheStart,
            columnCacheEnd,
            rowCacheStart,
            rowCacheEnd,
            columnVisibleStart,
            columnVisibleEnd,
            rowVisibleStart,
            rowVisibleEnd
          )
        }

        const {
          scrollLeft,
          scrollTop,
          updateRequested,
          xAxisScrollDir,
          yAxisScrollDir,
        } = unref(states)
        emit(
          SCROLL_EVT,
          xAxisScrollDir,
          scrollLeft,
          yAxisScrollDir,
          scrollTop,
          updateRequested
        )
      }

      const onScroll = (e: Event) => {
        const {
          clientHeight,
          clientWidth,
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth,
        } = e.currentTarget as HTMLElement

        const _states = unref(states)
        if (
          _states.scrollTop === scrollTop &&
          _states.scrollLeft === scrollLeft
        ) {
          return
        }

        let _scrollLeft = scrollLeft

        if (isRTL(props.direction)) {
          switch (getRTLOffsetType()) {
            case RTL_OFFSET_NAG:
              _scrollLeft = -scrollLeft
              break
            case RTL_OFFSET_POS_DESC:
              _scrollLeft = scrollWidth - clientWidth - scrollLeft
              break
          }
        }

        states.value = {
          ..._states,
          isScrolling: true,
          scrollLeft: _scrollLeft,
          scrollTop: Math.max(
            0,
            Math.min(scrollTop, scrollHeight - clientHeight)
          ),
          updateRequested: false,
          xAxisScrollDir: getScrollDir(_states.scrollLeft, _scrollLeft),
          yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
        }

        nextTick(resetIsScrolling)

        emitEvents()
      }

      const onVerticalScroll = (distance: number, totalSteps: number) => {
        const height = unref(parsedHeight)
        const offset =
          ((estimatedTotalHeight.value - height) / totalSteps) * distance
        scrollTo({
          scrollTop: Math.min(estimatedTotalHeight.value - height, offset),
        })
      }

      const onHorizontalScroll = (distance: number, totalSteps: number) => {
        const width = unref(parsedWidth)
        const offset =
          ((estimatedTotalWidth.value - width) / totalSteps) * distance
        scrollTo({
          scrollLeft: Math.min(estimatedTotalWidth.value - width, offset),
        })
      }

      const { onWheel } = useGridWheel(
        {
          atXStartEdge: computed(() => states.value.scrollLeft <= 0),
          atXEndEdge: computed(
            () => states.value.scrollLeft >= estimatedTotalWidth.value
          ),
          atYStartEdge: computed(() => states.value.scrollTop <= 0),
          atYEndEdge: computed(
            () => states.value.scrollTop >= estimatedTotalHeight.value
          ),
        },
        (x: number, y: number) => {
          hScrollbar.value?.onMouseUp?.()
          hScrollbar.value?.onMouseUp?.()
          const width = unref(parsedWidth)
          const height = unref(parsedHeight)
          scrollTo({
            scrollLeft: Math.min(
              states.value.scrollLeft + x,
              estimatedTotalWidth.value - width
            ),
            scrollTop: Math.min(
              states.value.scrollTop + y,
              estimatedTotalHeight.value - height
            ),
          })
        }
      )

      const scrollTo = ({
        scrollLeft = states.value.scrollLeft,
        scrollTop = states.value.scrollTop,
      }) => {
        scrollLeft = Math.max(scrollLeft, 0)
        scrollTop = Math.max(scrollTop, 0)
        const _states = unref(states)
        if (
          scrollTop === _states.scrollTop &&
          scrollLeft === _states.scrollLeft
        ) {
          return
        }

        states.value = {
          ..._states,
          xAxisScrollDir: getScrollDir(_states.scrollLeft, scrollLeft),
          yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
          scrollLeft,
          scrollTop,
          updateRequested: true,
        }

        nextTick(resetIsScrolling)
      }

      const scrollToItem = (
        rowIndex = 0,
        columnIdx = 0,
        alignment: Alignment = AUTO_ALIGNMENT
      ) => {
        const _states = unref(states)
        columnIdx = Math.max(0, Math.min(columnIdx, props.totalColumn! - 1))
        rowIndex = Math.max(0, Math.min(rowIndex, props.totalRow! - 1))
        const scrollBarWidth = getScrollBarWidth()

        const _cache = unref(cache)
        const estimatedHeight = getEstimatedTotalHeight(props, _cache)
        const estimatedWidth = getEstimatedTotalWidth(props, _cache)

        scrollTo({
          scrollLeft: getColumnOffset(
            props,
            columnIdx,
            alignment,
            _states.scrollLeft,
            _cache,
            estimatedWidth > props.width! ? scrollBarWidth : 0
          ),
          scrollTop: getRowOffset(
            props,
            rowIndex,
            alignment,
            _states.scrollTop,
            _cache,
            estimatedHeight > props.height! ? scrollBarWidth : 0
          ),
        })
      }

      const getItemStyle = (
        rowIndex: number,
        columnIndex: number
      ): CSSProperties => {
        const { columnWidth, direction, rowHeight } = props

        const itemStyleCache = getItemStyleCache.value(
          clearCache && columnWidth,
          clearCache && rowHeight,
          clearCache && direction
        )
        // since there was no need to introduce an nested array into cache object
        // we use row,column to construct the key for indexing the map.
        const key = `${rowIndex},${columnIndex}`

        if (hasOwn(itemStyleCache, key)) {
          return itemStyleCache[key]
        } else {
          const [, left] = getColumnPosition(props, columnIndex, unref(cache))
          const _cache = unref(cache)

          const rtl = isRTL(direction)
          const [height, top] = getRowPosition(props, rowIndex, _cache)
          const [width] = getColumnPosition(props, columnIndex, _cache)

          itemStyleCache[key] = {
            position: 'absolute',
            left: rtl ? undefined : `${left}px`,
            right: rtl ? `${left}px` : undefined,
            top: `${top}px`,
            height: `${height}px`,
            width: `${width}px`,
          }

          return itemStyleCache[key]
        }
      }

      // TODO: debounce setting is scrolling.

      const resetIsScrolling = () => {
        // timer = null

        states.value.isScrolling = false
        nextTick(() => {
          getItemStyleCache.value(-1, null, null)
        })
      }

      // life cycles
      onMounted(() => {
        // for SSR
        if (!isClient) return
        const { initScrollLeft, initScrollTop } = props
        const windowElement = unref(windowRef)
        if (windowElement) {
          if (isNumber(initScrollLeft)) {
            windowElement.scrollLeft = initScrollLeft
          }
          if (isNumber(initScrollTop)) {
            windowElement.scrollTop = initScrollTop
          }
        }
        emitEvents()
      })

      onUpdated(() => {
        const { direction } = props
        const { scrollLeft, scrollTop, updateRequested } = unref(states)

        const windowElement = unref(windowRef)

        if (updateRequested && windowElement) {
          if (direction === RTL) {
            switch (getRTLOffsetType()) {
              case RTL_OFFSET_NAG: {
                windowElement.scrollLeft = -scrollLeft
                break
              }
              case RTL_OFFSET_POS_ASC: {
                windowElement.scrollLeft = scrollLeft
                break
              }
              default: {
                const { clientWidth, scrollWidth } = windowElement
                windowElement.scrollLeft =
                  scrollWidth - clientWidth - scrollLeft
                break
              }
            }
          } else {
            windowElement.scrollLeft = Math.max(0, scrollLeft)
          }

          windowElement.scrollTop = Math.max(0, scrollTop)
        }
      })

      expose({
        windowRef,
        innerRef,
        getItemStyleCache,
        scrollTo,
        scrollToItem,
        states,
      })

      // rendering part

      const renderScrollbars = () => {
        const { totalColumn, totalRow } = props

        const width = unref(parsedWidth)
        const height = unref(parsedHeight)
        const estimatedWidth = unref(estimatedTotalWidth)
        const estimatedHeight = unref(estimatedTotalHeight)
        const { scrollLeft, scrollTop } = unref(states)
        const horizontalScrollbar = h(Scrollbar, {
          ref: hScrollbar,
          clientSize: width,
          layout: 'horizontal',
          onScroll: onHorizontalScroll,
          ratio: (width * 100) / estimatedWidth,
          scrollFrom: scrollLeft / (estimatedWidth - width),
          total: totalRow,
          visible: true,
        })

        const verticalScrollbar = h(Scrollbar, {
          ref: vScrollbar,
          clientSize: height,
          layout: 'vertical',
          onScroll: onVerticalScroll,
          ratio: (height * 100) / estimatedHeight,
          scrollFrom: scrollTop / (estimatedHeight - height),
          total: totalColumn,
          visible: true,
        })

        return {
          horizontalScrollbar,
          verticalScrollbar,
        }
      }

      const renderItems = () => {
        const [columnStart, columnEnd] = unref(columnsToRender)
        const [rowStart, rowEnd] = unref(rowsToRender)
        const { data, totalColumn, totalRow, useIsScrolling } = props
        const children: VNodeChild[] = []
        if (totalRow > 0 && totalColumn > 0) {
          for (let row = rowStart; row <= rowEnd; row++) {
            for (let column = columnStart; column <= columnEnd; column++) {
              children.push(
                slots.default?.({
                  columnIndex: column,
                  data,
                  key: column,
                  isScrolling: useIsScrolling
                    ? unref(states).isScrolling
                    : undefined,
                  style: getItemStyle(row, column),
                  rowIndex: row,
                })
              )
            }
          }
        }
        return children
      }

      const renderInner = () => {
        const Inner = resolveDynamicComponent(props.innerElement) as VNode
        const children = renderItems()
        return [
          h(
            Inner,
            {
              style: unref(innerStyle),
              ref: innerRef,
            },
            !isString(Inner)
              ? {
                  default: () => children,
                }
              : children
          ),
        ]
      }

      const renderWindow = () => {
        const Container = resolveDynamicComponent(
          props.containerElement
        ) as VNode
        const { horizontalScrollbar, verticalScrollbar } = renderScrollbars()
        const Inner = renderInner()

        return h(
          'div',
          {
            key: 0,
            class: 'el-vg__wrapper',
          },
          [
            h(
              Container,
              {
                class: props.className,
                style: unref(windowStyle),
                onScroll,
                onWheel,
                ref: windowRef,
              },
              !isString(Container) ? { default: () => Inner } : Inner
            ),
            horizontalScrollbar,
            verticalScrollbar,
          ]
        )
      }

      return renderWindow
    },
  })
}
export default createGrid
