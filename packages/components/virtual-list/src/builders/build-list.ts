import {
  Fragment,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  mergeProps,
  nextTick,
  onActivated,
  onMounted,
  onUpdated,
  ref,
  resolveDynamicComponent,
  unref,
  watch,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import {
  hasOwn,
  isClient,
  isGreaterThan,
  isNumber,
  isString,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useCache } from '../hooks/use-cache'
import useWheel from '../hooks/use-wheel'
import Scrollbar from '../components/scrollbar'
import { getRTLOffsetType, getScrollDir, isHorizontal } from '../utils'
import { virtualizedListProps } from '../props'
import {
  AUTO_ALIGNMENT,
  BACKWARD,
  END_REACHED_EVT,
  FORWARD,
  HORIZONTAL,
  ITEM_RENDER_EVT,
  RTL,
  RTL_OFFSET_NAG,
  RTL_OFFSET_POS_ASC,
  RTL_OFFSET_POS_DESC,
  SCROLL_EVT,
} from '../defaults'

import type { CSSProperties, Slot, VNode, VNodeChild } from 'vue'
import type { Alignment, ListConstructorProps, ScrollDirection } from '../types'
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
    emits: [ITEM_RENDER_EVT, SCROLL_EVT, END_REACHED_EVT],
    setup(props, { emit, expose }) {
      validateProps(props)
      const instance = getCurrentInstance()!

      const ns = useNamespace('vl')

      const dynamicSizeCache = ref(initCache(props, instance))

      const getItemStyleCache = useCache<CSSProperties>()
      // refs
      // here windowRef and innerRef can be type of HTMLElement
      // or user defined component type, depends on the type passed
      // by user
      const windowRef = ref<HTMLElement>()
      const innerRef = ref<HTMLElement>()
      const scrollbarRef = ref()
      const states = ref({
        isScrolling: false,
        scrollDir: FORWARD as ScrollDirection,
        scrollOffset: isNumber(props.initScrollOffset)
          ? props.initScrollOffset
          : 0,
        updateRequested: false,
        isScrollbarDragging: false,
        scrollbarAlwaysOn: props.scrollbarAlwaysOn,
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
          [`overflow-${_isHorizontal.value ? 'x' : 'y'}`]: 'scroll',
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

          // fix scrolling issues in Firefox.
          margin: 0,
          boxSizing: 'border-box',
        }
      })

      const clientSize = computed(() =>
        _isHorizontal.value ? props.width : props.height
      )

      const maxOffset = computed(() =>
        Math.max(0, estimatedTotalSize.value - (clientSize.value as number))
      )

      const normalizeOffset = (offset: number) =>
        Math.max(0, Math.min(offset, maxOffset.value))

      // Tolerance must cover sub-pixel differences that arise when the
      // browser's actual scrollHeight−clientHeight (affected by DPR
      // rounding) doesn't exactly match our computed maxOffset.
      // Without this, the native scroll event after onUpdated resets
      // edgeState and causes a duplicate end-reached emission.
      const EDGE_TOLERANCE = 1

      const getEdgeState = (normalizedOffset: number) => ({
        start: !isGreaterThan(normalizedOffset, 0, EDGE_TOLERANCE),
        end: !isGreaterThan(maxOffset.value, normalizedOffset, EDGE_TOLERANCE),
      })

      const edgeState = ref(
        getEdgeState(normalizeOffset(unref(states).scrollOffset))
      )

      const startEdgeReached = computed(
        () => getEdgeState(normalizeOffset(states.value.scrollOffset)).start
      )
      const endEdgeReached = computed(
        () => getEdgeState(normalizeOffset(states.value.scrollOffset)).end
      )

      // methods
      const { onWheel } = useWheel(
        {
          atStartEdge: startEdgeReached,
          atEndEdge: endEdgeReached,
          layout: computed(() => props.layout),
        },
        (offset) => {
          ;(
            scrollbarRef.value as {
              onMouseUp: () => void
            }
          ).onMouseUp?.()
          scrollTo(
            Math.min(states.value.scrollOffset + offset, maxOffset.value)
          )
        }
      )

      useEventListener(windowRef, 'wheel', onWheel, {
        passive: false,
      })

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

      const emitEndReached = (direction: ScrollDirection, offset: number) => {
        const nextEdgeState = getEdgeState(offset)
        const horizontalEnd = props.direction === RTL ? 'left' : 'right'
        const horizontalStart = props.direction === RTL ? 'right' : 'left'

        if (
          direction === FORWARD &&
          nextEdgeState.end &&
          !edgeState.value.end
        ) {
          emit(END_REACHED_EVT, _isHorizontal.value ? horizontalEnd : 'bottom')
        }

        if (
          direction === BACKWARD &&
          nextEdgeState.start &&
          !edgeState.value.start
        ) {
          emit(END_REACHED_EVT, _isHorizontal.value ? horizontalStart : 'top')
        }

        edgeState.value = nextEdgeState
      }

      const updateScrollOffset = (
        offset: number,
        {
          isScrolling,
          updateRequested,
        }: {
          isScrolling: boolean
          updateRequested: boolean
        }
      ) => {
        const currentState = unref(states)
        const nextOffset = Math.max(offset, 0)

        if (nextOffset === currentState.scrollOffset) {
          return
        }

        const scrollDir = getScrollDir(currentState.scrollOffset, nextOffset)

        states.value = {
          ...currentState,
          isScrolling,
          scrollDir,
          scrollOffset: nextOffset,
          updateRequested,
        }
        emitEndReached(scrollDir, normalizeOffset(nextOffset))

        nextTick(resetIsScrolling)
      }

      const scrollVertically = (e: Event) => {
        const { clientHeight, scrollHeight, scrollTop } =
          e.currentTarget as HTMLElement
        const _states = unref(states)
        if (_states.scrollOffset === scrollTop) {
          return
        }

        updateScrollOffset(Math.min(scrollTop, scrollHeight - clientHeight), {
          isScrolling: true,
          updateRequested: false,
        })
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

        updateScrollOffset(Math.min(scrollOffset, scrollWidth - clientWidth), {
          isScrolling: true,
          updateRequested: false,
        })
      }

      const onScroll = (e: Event) => {
        unref(_isHorizontal) ? scrollHorizontally(e) : scrollVertically(e)
        emitEvents()
      }

      const onScrollbarScroll = (distanceToGo: number, totalSteps: number) => {
        const offset = (maxOffset.value / totalSteps) * distanceToGo
        scrollTo(Math.min(maxOffset.value, offset))
      }

      const scrollTo = (offset: number) => {
        updateScrollOffset(offset, {
          isScrolling: unref(states).isScrolling,
          updateRequested: true,
        })
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

      // TODO: perf optimization here, reset isScrolling with debounce.

      const resetIsScrolling = () => {
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
        if (!isClient) return
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
                case RTL_OFFSET_NAG: {
                  windowElement.scrollLeft = -scrollOffset
                  break
                }
                case RTL_OFFSET_POS_ASC: {
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

      onActivated(() => {
        unref(windowRef)!.scrollTop = unref(states).scrollOffset
      })

      watch(maxOffset, () => {
        edgeState.value = getEdgeState(
          normalizeOffset(unref(states).scrollOffset)
        )
      })

      const api = {
        ns,
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
        states,
        useIsScrolling,
        windowStyle,
        ns,
      } = ctx

      const [start, end] = itemsToRender

      const Container = resolveDynamicComponent(containerElement)
      const Inner = resolveDynamicComponent(innerElement)

      const children = [] as VNodeChild[]

      if (total > 0) {
        for (let i = start; i <= end; i++) {
          children.push(
            h(
              Fragment,
              { key: i },
              ($slots.default as Slot)?.({
                data,
                index: i,
                isScrolling: useIsScrolling ? states.isScrolling : undefined,
                style: getItemStyle(i),
              })
            )
          )
        }
      }

      const InnerNode = [
        h(
          Inner as VNode,
          mergeProps(ctx.innerProps, {
            style: innerStyle,
            ref: 'innerRef',
          }),
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
        alwaysOn: states.scrollbarAlwaysOn,
      })

      const listContainer = h(
        Container as VNode,
        {
          class: [ns.e('window'), className],
          style: windowStyle,
          onScroll,
          ref: 'windowRef',
          key: 0,
        },
        !isString(Container) ? { default: () => [InnerNode] } : [InnerNode]
      )

      return h(
        'div',
        {
          key: 0,
          class: [ns.e('wrapper'), states.scrollbarAlwaysOn ? 'always-on' : ''],
        },
        [listContainer, scrollbar]
      )
    },
  })
}

export default createList
