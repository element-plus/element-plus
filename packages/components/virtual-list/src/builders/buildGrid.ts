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
} from 'vue'
import { hasOwn } from '@vue/shared'
import memo from 'lodash/memoize'

import { isNumber, isString, $ } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'
import getScrollBarWidth from '@element-plus/utils/scrollbar-width'

import { getScrollDir, getRTLOffsetType, isRTL } from '../utils'
import {
  DefaultGridProps,
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

import type { VNode, CSSProperties } from 'vue'
import type { GridConstructorProps, Alignment } from '../types'

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
}: GridConstructorProps<typeof DefaultGridProps>) => {

  return defineComponent({
    name: name ?? 'ElVirtualList',
    props: DefaultGridProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose }) {

      validateProps(props)
      const instance = getCurrentInstance()
      const cache = ref(initCache(props, instance))
      // refs
      // here windowRef and innerRef can be type of HTMLElement
      // or user defined component type, depends on the type passed
      // by user
      const windowRef = ref<HTMLElement>(null)
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

      // computed
      const columnsToRender = computed(() => {
        const { totalColumn, totalRow, columnCache } = props
        const { isScrolling, xAxisScrollDir, scrollLeft } = $(states)

        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getColumnStartIndexForOffset(
          props,
          scrollLeft,
          $(cache),
        )
        const stopIndex = getColumnStopIndexForStartIndex(
          props,
          startIndex,
          scrollLeft,
          $(cache),
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
          Math.max(0, Math.min(totalColumn - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const rowsToRender = computed(() => {
        const { totalColumn, totalRow, rowCache } = props
        const { isScrolling, yAxisScrollDir, scrollTop } = $(states)

        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getRowStartIndexForOffset(
          props,
          scrollTop,
          $(cache),
        )
        const stopIndex = getRowStopIndexForStartIndex(
          props,
          startIndex,
          scrollTop,
          $(cache),
        )

        const cacheBackward =
          !isScrolling || yAxisScrollDir === BACKWARD
            ? Math.max(1, rowCache)
            : 1
        const cacheForward =
          !isScrolling || yAxisScrollDir === FORWARD
            ? Math.max(1, rowCache)
            : 1

        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(totalRow - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const estimatedTotalHeight = computed(() => getEstimatedTotalHeight(props, $(cache)))
      const estimatedTotalWidth = computed(() => getEstimatedTotalWidth(props, $(cache)))

      const windowStyle = computed(() => ([
        {
          position: 'relative',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
        }, {
          direction: props.direction,
          height: isNumber(props.height) ? `${props.height}px` : props.height,
          width: isNumber(props.width) ? `${props.width}px` : props.width,
          ...props.style,
        },
      ]))

      const innerStyle = computed(() => {
        const width = `${$(estimatedTotalWidth)}px`
        const height = `${$(estimatedTotalHeight)}px`

        return {
          height,
          pointerEvents: $(states).isScrolling ? 'none' : undefined,
          width,
        }
      })

      // methods
      const emitEvents = () => {
        const { totalColumn, totalRow } = props

        if (totalColumn > 0 && totalRow > 0) {
          const [columnCacheStart, columnCacheEnd, columnVisibleStart, columnVisibleEnd] = $(columnsToRender)
          const [rowCacheStart, rowCacheEnd, rowVisibleStart, rowVisibleEnd] = $(rowsToRender)
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
            rowVisibleEnd,
          )
        }

        const { scrollLeft, scrollTop, updateRequested, xAxisScrollDir, yAxisScrollDir } = $(states)
        emit(
          SCROLL_EVT,
          xAxisScrollDir,
          scrollLeft,
          yAxisScrollDir,
          scrollTop,
          updateRequested,
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

        const _states = $(states)
        if (_states.scrollTop === scrollTop && _states.scrollLeft === scrollLeft) {
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
          scrollTop: Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight)),
          updateRequested: false,
          xAxisScrollDir: getScrollDir(_states.scrollLeft, _scrollLeft),
          yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
        }

        nextTick(resetIsScrolling)

        emitEvents()
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const getItemStyleCache = memo((_: any, __: any, ___: any) => ({}))

      const scrollTo = ({
        scrollLeft,
        scrollTop,
      }) => {
        scrollLeft = Math.max(scrollLeft, 0)
        scrollTop = Math.max(scrollTop, 0)
        const _states = $(states)
        if (scrollTop === _states.scrollTop && scrollLeft === _states.scrollLeft) {
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
        alignment: Alignment = AUTO_ALIGNMENT,
      ) => {
        const _states = $(states)
        columnIdx = Math.max(0, Math.min(columnIdx, props.totalColumn - 1))
        rowIndex = Math.max(0, Math.min(rowIndex, props.totalRow - 1))
        const scrollBarWidth = getScrollBarWidth()

        const _cache = $(cache)
        const estimatedHeight = getEstimatedTotalHeight(props, _cache)
        const estimatedWidth = getEstimatedTotalWidth(props, _cache)

        scrollTo({
          scrollLeft: getColumnOffset(
            props,
            columnIdx,
            alignment,
            _states.scrollLeft,
            _cache,
            estimatedWidth > props.width ? scrollBarWidth : 0,
          ),
          scrollTop: getRowOffset(
            props,
            rowIndex,
            alignment,
            _states.scrollTop,
            _cache,
            estimatedHeight > props.height ? scrollBarWidth : 0,
          ),
        })
      }

      const getItemStyle = (rowIndex: number, columnIndex: number): CSSProperties => {
        const { columnWidth, direction, rowHeight } = props

        const itemStyleCache = getItemStyleCache(
          clearCache && columnWidth,
          clearCache && rowHeight,
          clearCache && direction,
        )
        // since there was no need to introduce an nested array into cache object
        // we use row,column to construct the key for indexing the map.
        const key = `${rowIndex},${columnIndex}`

        if (hasOwn(itemStyleCache, key)) {
          return itemStyleCache[key]
        } else {
          const [, left] = getColumnPosition(props, columnIndex, $(cache))
          const _cache = $(cache)

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
          getItemStyleCache(-1, null, null)
        })

      }

      // life cycles
      onMounted(() => {
        // for SSR
        if (isServer) return
        const { initScrollLeft, initScrollTop } = props
        const windowElement = $(windowRef)
        if (windowElement !== null) {
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
        const { scrollLeft, scrollTop, updateRequested } = $(states)

        if (updateRequested && $(windowRef) !== null) {
          const windowElement = $(windowRef)

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
                windowElement.scrollLeft = scrollWidth - clientWidth - scrollLeft
                break
              }
            }
          } else {
            windowElement.scrollLeft = Math.max(0, scrollLeft)
          }

          windowElement.scrollTop = Math.max(0, scrollTop)
        }
      })


      const api = {
        windowStyle,
        windowRef,
        columnsToRender,
        innerRef,
        innerStyle,
        states,
        rowsToRender,
        getItemStyle,
        onScroll,
        scrollTo,
        scrollToItem,
      }

      expose({
        windowRef,
        innerRef,
        getItemStyleCache,
        scrollTo,
        scrollToItem,
        states,
      })

      return api
    },

    render(ctx: any) {
      const {
        $slots,
        className,
        containerElement,
        columnsToRender,
        data,
        getItemStyle,
        innerElement,
        innerStyle,
        rowsToRender,
        onScroll,
        states,
        useIsScrolling,
        windowStyle,
        totalColumn,
        totalRow,
      } = ctx

      const [columnStart, columnEnd] = columnsToRender
      const [rowStart, rowEnd] = rowsToRender

      const Container = resolveDynamicComponent(containerElement)
      const Inner = resolveDynamicComponent(innerElement)

      const children = []
      if (totalRow > 0 && totalColumn > 0) {
        for (let row = rowStart; row <= rowEnd; row ++) {
          for (let column = columnStart; column <= columnEnd; column ++) {
            children.push(
              $slots.default?.({
                columnIndex: column,
                data,
                key: column,
                isScrolling: useIsScrolling ? states.isScrolling : undefined,
                style: getItemStyle(row, column),
                rowIndex: row,
              }),
            )
          }
        }
      }

      const InnerNode = [h(Inner as VNode, {
        style: innerStyle,
        ref: 'innerRef',
      }, !isString(Inner) ? {
        default: () => children,
      } : children)]

      return h(Container as VNode, {
        class: className,
        style: windowStyle,
        onScroll,
        ref: 'windowRef',
      }, !isString(Container) ? { default: () => InnerNode } : InnerNode)
    },
  })
}
export default createGrid
