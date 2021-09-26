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
import { hasOwn } from '@vue/shared'

import { isNumber, isString } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'

import { useCache } from '../hooks/useCache'
import useWheel from '../hooks/useWheel'
import Scrollbar from '../components/scrollbar'
import { getScrollDir, isHorizontal, getRTLOffsetType } from '../utils'
import { virtualizedListProps } from '../props'
import {
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

import type { VNode, CSSProperties, Slot, VNodeChild } from 'vue'
import type { ListConstructorProps, Alignment } from '../types'
import type { VirtualizedListProps } from '../props'

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
}: ListConstructorProps<VirtualizedListProps>) => {
  return defineComponent({
    name: name ?? 'ElVirtualList',
    props: virtualizedListProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose }) {
      validateProps(props)
      const instance = getCurrentInstance()!
      const dynamicSizeCache = ref(initCache(props, instance))

      const getItemStyleCache = useCache()
      // refs
      // here windowRef and innerRef can be type of HTMLElement
      // or user defined component type, depends on the type passed
      // by user
      const windowRef = ref<HTMLElement>()
      const innerRef = ref<HTMLElement>()
      const scrollbarRef = ref(null)

      const states = ref({
        isScrolling: false,
        scrollDir: 'forward',
        scrollOffset: isNumber(props.initScrollOffset)
          ? props.initScrollOffset
          : 0,
        updateRequested: false,
        isScrollbarDragging: false,
      })

      // computed
      const itemsToRender = computed(() => {
        const { total, cache } = props
        const { isScrolling, scrollDir, scrollOffset } = unref(states)

        if (total === 0) {
          return [0, 0, 0, 0]
        }

        const startIndex = getStartIndexForOffset(
          props,
          scrollOffset,
          unref(dynamicSizeCache)
        )
        const stopIndex = getStopIndexForStartIndex(
          props,
          startIndex,
          scrollOffset,
          unref(dynamicSizeCache)
        )

        const cacheBackward =
          !isScrolling || scrollDir === BACKWARD ? Math.max(1, cache) : 1
        const cacheForward =
          !isScrolling || scrollDir === FORWARD ? Math.max(1, cache) : 1

        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(total! - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex,
        ]
      })

      const estimatedTotalSize = computed(() =>
        getEstimatedTotalSize(props, unref(dynamicSizeCache))
      )

      const _isHorizontal = computed(() => isHorizontal(props.layout))

      const windowStyle = computed(() => [
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
        props.style,
      ])

      const innerStyle = computed(() => {
        const size = unref(estimatedTotalSize)
        const horizontal = unref(_isHorizontal)
        return {
          height: horizontal ? '100%' : `${size}px`,
          pointerEvents: unref(states).isScrolling ? 'none' : undefined,
          width: horizontal ? `${size}px` : '100%',
        }
      })

      const clientSize = computed(() =>
        _isHorizontal.value ? props.width : props.height
      )

      // methods
      const { onWheel } = useWheel(
        {
          atStartEdge: computed(() => states.value.scrollOffset <= 0),
          atEndEdge: computed(
            () => states.value.scrollOffset >= estimatedTotalSize.value
          ),
          layout: computed(() => props.layout),
        },
        (offset) => {
          ;(
            scrollbarRef.value as any as {
              onMouseUp: () => void
            }
          ).onMouseUp?.()
          scrollTo(
            Math.min(
              states.value.scrollOffset + offset,
              estimatedTotalSize.value - (clientSize.value as number)
            )
          )
        }
      )

      const emitEvents = () => {
        const { total } = props

        if (total! > 0) {
          const [cacheStart, cacheEnd, visibleStart, visibleEnd] =
            unref(itemsToRender)
          emit(ITEM_RENDER_EVT, cacheStart, cacheEnd, visibleStart, visibleEnd)
        }

        const { scrollDir, scrollOffset, updateRequested } = unref(states)
        emit(SCROLL_EVT, scrollDir, scrollOffset, updateRequested)
      }

      const scrollVertically = (e: Event) => {
        const { clientHeight, scrollHeight, scrollTop } =
          e.currentTarget as HTMLElement
        const _states = unref(states)
        if (_states.scrollOffset === scrollTop) {
          return
        }

        const scrollOffset = Math.max(
          0,
          Math.min(scrollTop, scrollHeight - clientHeight)
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
        const { clientWidth, scrollLeft, scrollWidth } =
          e.currentTarget as HTMLElement
        const _states = unref(states)

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
          Math.min(scrollOffset, scrollWidth - clientWidth)
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
        unref(_isHorizontal) ? scrollHorizontally(e) : scrollVertically(e)
        emitEvents()
      }

      const onScrollbarScroll = (distanceToGo: number, totalSteps: number) => {
        const offset =
          ((estimatedTotalSize.value - (clientSize.value as number)) /
            totalSteps) *
          distanceToGo
        scrollTo(
          Math.min(
            estimatedTotalSize.value - (clientSize.value as number),
            offset
          )
        )
      }

      const scrollTo = (offset: number) => {
        offset = Math.max(offset, 0)

        if (offset === unref(states).scrollOffset) {
          return
        }

        states.value = {
          ...unref(states),
          scrollOffset: offset,
          scrollDir: getScrollDir(unref(states).scrollOffset, offset),
          updateRequested: true,
        }

        nextTick(resetIsScrolling)
      }

      const scrollToItem = (
        idx: number,
        alignment: Alignment = AUTO_ALIGNMENT
      ) => {
        const { scrollOffset } = unref(states)

        idx = Math.max(0, Math.min(idx, props.total! - 1))
        scrollTo(
          getOffset(
            props,
            idx,
            alignment,
            scrollOffset,
            unref(dynamicSizeCache)
          )
        )
      }

      const getItemStyle = (idx: number) => {
        const { direction, itemSize, layout } = props

        const itemStyleCache = getItemStyleCache.value(
          clearCache && itemSize,
          clearCache && layout,
          clearCache && direction
        )

        let style: CSSProperties
        if (hasOwn(itemStyleCache, String(idx))) {
          style = itemStyleCache[idx]
        } else {
          const offset = getItemOffset(props, idx, unref(dynamicSizeCache))
          const size = getItemSize(props, idx, unref(dynamicSizeCache))
          const horizontal = unref(_isHorizontal)

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
          getItemStyleCache.value(-1, null, null)
        })
      }

      const resetScrollTop = () => {
        const window = windowRef.value
        if (window) {
          window.scrollTop = 0
        }
      }

      // life cycles
      onMounted(() => {
        if (isServer) return
        const { initScrollOffset } = props
        const windowElement = unref(windowRef)
        if (isNumber(initScrollOffset) && windowElement) {
          if (unref(_isHorizontal)) {
            windowElement.scrollLeft = initScrollOffset
          } else {
            windowElement.scrollTop = initScrollOffset
          }
        }

        emitEvents()
      })

      onUpdated(() => {
        const { direction, layout } = props
        const { scrollOffset, updateRequested } = unref(states)
        const windowElement = unref(windowRef)

        if (updateRequested && windowElement) {
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
                  windowElement.scrollLeft =
                    scrollWidth - clientWidth - scrollOffset
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
        clientSize,
        estimatedTotalSize,
        windowStyle,
        windowRef,
        innerRef,
        innerStyle,
        itemsToRender,
        scrollbarRef,
        states,
        getItemStyle,
        onScroll,
        onScrollbarScroll,
        onWheel,
        scrollTo,
        scrollToItem,
        resetScrollTop,
      }

      expose({
        windowRef,
        innerRef,
        getItemStyleCache,
        scrollTo,
        scrollToItem,
        resetScrollTop,
        states,
      })

      return api
    },

    render(ctx: any) {
      const {
        $slots,
        className,
        clientSize,
        containerElement,
        data,
        getItemStyle,
        innerElement,
        itemsToRender,
        innerStyle,
        layout,
        total,
        onScroll,
        onScrollbarScroll,
        onWheel,
        states,
        useIsScrolling,
        windowStyle,
      } = ctx

      const [start, end] = itemsToRender

      const Container = resolveDynamicComponent(containerElement)
      const Inner = resolveDynamicComponent(innerElement)

      const children = [] as VNodeChild[]

      if (total > 0) {
        for (let i = start; i <= end; i++) {
          children.push(
            ($slots.default as Slot)?.({
              data,
              key: i,
              index: i,
              isScrolling: useIsScrolling ? states.isScrolling : undefined,
              style: getItemStyle(i),
            })
          )
        }
      }

      const InnerNode = [
        h(
          Inner as VNode,
          {
            style: innerStyle,
            ref: 'innerRef',
          },
          !isString(Inner)
            ? {
                default: () => children,
              }
            : children
        ),
      ]

      const scrollbar = h(Scrollbar, {
        ref: 'scrollbarRef',
        clientSize,
        layout,
        onScroll: onScrollbarScroll,
        ratio: (clientSize * 100) / this.estimatedTotalSize,
        scrollFrom:
          states.scrollOffset / (this.estimatedTotalSize - clientSize),
        total,
        visible: true,
      })

      const listContainer = h(
        Container as VNode,
        {
          class: className,
          style: windowStyle,
          onScroll,
          onWheel,
          ref: 'windowRef',
          key: 0,
        },
        !isString(Container) ? { default: () => [InnerNode] } : [InnerNode]
      )

      return h(
        'div',
        {
          key: 0,
          class: 'el-vl__wrapper',
        },
        [listContainer, scrollbar]
      )
    },
  })
}

export default createList
