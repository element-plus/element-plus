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

import { getScrollDir, isHorizontal, getRTLOffsetType } from '../utils'
import {
  DefaultListProps,
  AUTO_ALIGNMENT,
  BACKWARD,
  FORWARD,
  RTL,
  HORIZONTAL,
  ITEM_RENDER_EVT,
  SCROLL_EVT,
  RTL_OFFSET_NAG,
  RTL_OFFSET_POS_DESC,
} from '../defaults'

import type { VNode, CSSProperties } from 'vue'
import type { ListConstructorProps, Alignment } from '../types'

const createList = ({
  name,
  getOffset,
  getItemSize,
  getItemOffset,
  getEstimatedTotalSize,
  getStartIndexForOffset,
  getStopIndexForStartIndex,
  initCache,
  clearCache,
  validateProps,
}: ListConstructorProps<typeof DefaultListProps>) => {
  return defineComponent({
    name: name ?? 'ElVirtualList',
    props: DefaultListProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose }) {

      validateProps(props)
      const instance = getCurrentInstance()
      const dynamicSizeCache = ref(initCache(props, instance))
      // refs
      // here windowRef and innerRef can be type of HTMLElement
      // or user defined component type, depends on the type passed
      // by user
      const windowRef = ref<HTMLElement>(null)
      const innerRef = ref<HTMLElement>(null)
      const states = ref({
        isScrolling: false,
        scrollDir: 'forward',
        scrollOffset: isNumber(props.initScrollOffset) ? props.initScrollOffset : 0,
        updateRequested: false,
      })

      // computed
      const itemsToRender = computed(() => {
        const { total, cache } = props
        const { isScrolling, scrollDir, scrollOffset } = $(states)

        if (total === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getStartIndexForOffset(
          props,
          scrollOffset,
          $(dynamicSizeCache),
        )
        const stopIndex = getStopIndexForStartIndex(
          props,
          startIndex,
          scrollOffset,
          $(dynamicSizeCache),
        )

        const cacheBackward =
          !isScrolling || scrollDir === BACKWARD
            ? Math.max(1, cache)
            : 1
        const cacheForward =
          !isScrolling || scrollDir === FORWARD
            ? Math.max(1, cache)
            : 1

        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(total - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const estimatedTotalSize = computed(() => getEstimatedTotalSize(props, $(dynamicSizeCache)))

      const _isHorizontal = computed(() => isHorizontal(props.layout))

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
        const size = $(estimatedTotalSize)
        const horizontal = $(_isHorizontal)
        return {
          height: horizontal ? '100%' : `${size}px`,
          pointerEvents: $(states).isScrolling ? 'none' : undefined,
          width: horizontal ? `${size}px` : '100%',
        }
      })

      // methods
      const emitEvents = () => {
        const { total } = props

        if (total > 0) {
          const [cacheStart, cacheEnd, visibleStart, visibleEnd] = $(itemsToRender)
          emit(ITEM_RENDER_EVT, cacheStart, cacheEnd, visibleStart, visibleEnd)
        }

        const { scrollDir, scrollOffset, updateRequested } = $(states)
        emit(SCROLL_EVT, scrollDir, scrollOffset, updateRequested)
      }

      const scrollVertically = (e: Event) => {
        const { clientHeight, scrollHeight, scrollTop } = e.currentTarget as HTMLElement
        const _states = $(states)
        if (_states.scrollOffset === scrollTop) {
          return
        }

        const scrollOffset = Math.max(
          0,
          Math.min(scrollTop, scrollHeight - clientHeight),
        )

        states.value = {
          ..._states,
          isScrolling: true,
          scrollDir: getScrollDir(_states.scrollOffset, scrollOffset),
          scrollOffset,
          updateRequested: false,
        }

        nextTick(resetIsScrolling)
      }

      const scrollHorizontally = (e: Event) => {
        const { clientWidth, scrollLeft, scrollWidth } = (e.currentTarget) as HTMLElement
        const _states = $(states)

        if (_states.scrollOffset === scrollLeft) {
          return
        }

        const { direction } = props

        let scrollOffset = scrollLeft

        if (direction === RTL) {
          // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
          switch (getRTLOffsetType()) {
            case RTL_OFFSET_NAG: {
              scrollOffset = -scrollLeft
              break
            }
            case RTL_OFFSET_POS_DESC: {
              scrollOffset = scrollWidth - clientWidth - scrollLeft
              break
            }
          }
        }

        scrollOffset = Math.max(
          0,
          Math.min(scrollOffset, scrollWidth - clientWidth),
        )

        states.value = {
          ..._states,
          isScrolling: true,
          scrollDir: getScrollDir(_states.scrollOffset, scrollOffset),
          scrollOffset,
          updateRequested: false,
        }

        nextTick(resetIsScrolling)
      }

      const onScroll = (e: Event) => {
        $(_isHorizontal) ? scrollHorizontally(e) : scrollVertically(e)
        emitEvents()
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const getItemStyleCache = memo((_: any, __: any, ___: any) => ({}))

      const scrollTo = (offset: number) => {
        offset = Math.max(offset, 0)

        if (offset === $(states).scrollOffset) {
          return
        }

        states.value = {
          ...$(states),
          scrollOffset: offset,
          scrollDir: getScrollDir($(states).scrollOffset, offset),
          updateRequested: true,
        }

        nextTick(resetIsScrolling)
      }

      const scrollToItem = (idx: number, alignment: Alignment = AUTO_ALIGNMENT) => {
        const { scrollOffset } = $(states)

        idx = Math.max(0, Math.min(idx, props.total - 1))
        scrollTo(
          getOffset(
            props,
            idx,
            alignment,
            scrollOffset,
            $(dynamicSizeCache),
          ),
        )
      }

      const getItemStyle = (idx: number) => {
        const { direction, itemSize, layout } = props

        const itemStyleCache = getItemStyleCache(
          clearCache && itemSize,
          clearCache && layout,
          clearCache && direction,
        )

        let style: CSSProperties
        if (hasOwn(itemStyleCache, String(idx))) {
          style = itemStyleCache[idx]
        } else {
          const offset = getItemOffset(props, idx, $(dynamicSizeCache))
          const size = getItemSize(props, idx, $(dynamicSizeCache))
          const horizontal = $(_isHorizontal)

          const isRtl = direction === RTL
          const offsetHorizontal = horizontal ? offset : 0
          itemStyleCache[idx] = style = {
            position: 'absolute',
            left: isRtl ? undefined : `${offsetHorizontal}px`,
            right: isRtl ? `${offsetHorizontal}px` : undefined,
            top: !horizontal ? `${offset}px` : 0,
            height: !horizontal ? `${size}px` : '100%',
            width: horizontal ? `${size}px` : '100%',
          }
        }

        return style
      }

      // TODO:
      // perf optimization here, reset isScrolling with debounce.

      const resetIsScrolling = () => {
        // timer = null

        states.value.isScrolling = false
        nextTick(() => {
          getItemStyleCache(-1, null, null)
        })

      }

      // life cycles
      onMounted(() => {
        if (isServer) return
        const { initScrollOffset } = props
        const windowElement = $(windowRef)
        if (isNumber(initScrollOffset) && windowElement !== null) {
          if ($(_isHorizontal)) {
            windowElement.scrollLeft = initScrollOffset
          } else {
            windowElement.scrollTop = initScrollOffset
          }
        }
        emitEvents()
      })

      onUpdated(() => {
        const { direction, layout } = props
        const { scrollOffset, updateRequested } = $(states)

        if (updateRequested && $(windowRef) !== null) {
          const windowElement = $(windowRef)

          if (layout === HORIZONTAL) {
            if (direction === RTL) {
              // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
              // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
              // So we need to determine which browser behavior we're dealing with, and mimic it.
              switch (getRTLOffsetType()) {
                case 'negative': {
                  windowElement.scrollLeft = -scrollOffset
                  break
                }
                case 'positive-ascending': {
                  windowElement.scrollLeft = scrollOffset
                  break
                }
                default: {
                  const { clientWidth, scrollWidth } = windowElement
                  windowElement.scrollLeft = scrollWidth - clientWidth - scrollOffset
                  break
                }
              }
            } else {
              windowElement.scrollLeft = scrollOffset
            }
          } else {
            windowElement.scrollTop = scrollOffset
          }
        }
      })


      const api = {
        windowStyle,
        windowRef,
        innerRef,
        innerStyle,
        itemsToRender,
        states,
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
        data,
        getItemStyle,
        innerElement,
        itemsToRender,
        innerStyle,
        total,
        onScroll,
        states,
        useIsScrolling,
        windowStyle,
      } = ctx

      const [start, end] = itemsToRender

      const Container = resolveDynamicComponent(containerElement)
      const Inner = resolveDynamicComponent(innerElement)

      const children = []

      if (total > 0) {
        for (let i = start; i <= end; i++) {
          children.push(
            $slots.default?.({
              data,
              key: i,
              index: i,
              isScrolling: useIsScrolling ? states.isScrolling : undefined,
              style: getItemStyle(i),
            }),
          )
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

export default createList
