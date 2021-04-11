import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  nextTick,
  onMounted,
  onUpdated,
  resolveDynamicComponent,
  isVNode,
  h,
} from 'vue'
import memo from 'lodash/memoize'

import { isNumber, $ } from '@element-plus/utils/util'

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
}: ListConstructorProps<typeof DefaultListProps>) => {
  return defineComponent({
    name: name ?? 'ElVirtualList',
    props: DefaultListProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose }) {

      const instance = getCurrentInstance()
      const initProps = ref(initCache(props, instance))
      // refs
      const containerRef = ref<HTMLElement>(null)
      const innerRef = ref(null)
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
          $(initProps),
        )
        const stopIndex = getStopIndexForStartIndex(
          props,
          startIndex,
          scrollOffset,
          $(initProps),
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

      const estimatedTotalSize = computed(() => getEstimatedTotalSize(props, $(initProps)))

      const _isHorizontal = computed(() => isHorizontal(props.layout))

      const containerStyle = computed(() => ([
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
        if ($(states).scrollOffset === scrollTop) {
          return
        }

        const scrollOffset = Math.max(
          0,
          Math.min(scrollTop, scrollHeight - clientHeight),
        )

        states.value = {
          ...$(states),
          isScrolling: true,
          scrollDir:
              $(states).scrollOffset < scrollOffset ? FORWARD : BACKWARD,
          scrollOffset,
          updateRequested: false,
        }

        nextTick(() => {
          resetIsScrolling()
        })
      }

      const scrollHorizontally = (e: Event) => {
        const { clientWidth, scrollLeft, scrollWidth } = (e.currentTarget) as HTMLElement
        if ($(states).scrollOffset === scrollLeft) {
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
            case RTL_OFFSET_NAG:
              scrollOffset = -scrollLeft
              break
            case RTL_OFFSET_POS_DESC:
              scrollOffset = scrollWidth - clientWidth - scrollLeft
              break
          }
        }

        scrollOffset = Math.max(
          0,
          Math.min(scrollOffset, scrollWidth - clientWidth),
        )

        states.value = {
          ...$(states),
          isScrolling: true,
          scrollDir:
              $(states).scrollOffset < scrollLeft ? FORWARD : BACKWARD,
          scrollOffset,
          updateRequested: false,
        }

        nextTick(() => {
          resetIsScrolling()
        })
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
          scrollDir: getScrollDir($(states).scrollOffset, offset),
          updateRequested: true,
        }

        nextTick(() => {
          resetIsScrolling
        })
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
            $(initProps),
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
        if (itemStyleCache.hasOwnProperty(idx)) {
          style = itemStyleCache[idx]
        } else {
          const offset = getItemOffset(props, idx, $(initProps))
          const size = getItemSize(props, idx, $(initProps))

          // TODO Deprecate direction "horizontal"
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

      // resetIsScrollingDebounced = () => {
      //   if (timer !== null) {
      //     cancelTimeout
      //   }
      //   if (this._resetIsScrollingTimeoutId !== null) {
      //     cancelTimeout(this._resetIsScrollingTimeoutId)
      //   }

      //   this._resetIsScrollingTimeoutId = requestTimeout(
      //     this._resetIsScrolling,
      //     IS_SCROLLING_DEBOUNCE_INTERVAL,
      //   )
      // }

      const resetIsScrolling = () => {
        // timer = null

        states.value.isScrolling = false
        nextTick(() => {
          getItemStyleCache(-1, null, null)
        })

      }

      // life cycles
      onMounted(() => {
        const { initScrollOffset } = props
        const container = $(containerRef)
        if (isNumber(initScrollOffset) && container !== null) {
          if ($(_isHorizontal)) {
            container.scrollLeft = initScrollOffset
          } else {
            container.scrollTop = initScrollOffset
          }
        }
        emitEvents()
      })

      onUpdated(() => {
        const { direction, layout } = props
        const { scrollOffset, updateRequested } = $(states)

        if (updateRequested && $(containerRef) !== null) {
          const container = $(containerRef)

          if (layout === HORIZONTAL) {
            if (direction === RTL) {
              // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
              // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
              // So we need to determine which browser behavior we're dealing with, and mimic it.
              switch (getRTLOffsetType()) {
                case 'negative': {
                  container.scrollLeft = -scrollOffset
                  break
                }
                case 'positive-ascending': {
                  container.scrollLeft = scrollOffset
                  break
                }
                default: {
                  const { clientWidth, scrollWidth } = container
                  container.scrollLeft = scrollWidth - clientWidth - scrollOffset
                  break
                }
              }
            } else {
              container.scrollLeft = scrollOffset
            }
          } else {
            container.scrollTop = scrollOffset
          }
        }
      })


      const api = {
        containerStyle,
        containerRef,
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
        containerRef,
        innerRef,
        getItemStyleCache,
        scrollTo,
        scrollToItem,
      })

      return api
    },

    render(ctx: any) {
      const {
        $slots,
        className,
        containerElement,
        containerStyle,
        getItemStyle,
        itemData,
        innerElement,
        itemsToRender,
        innerStyle,
        onScroll,
        useIsScrolling,
        states,
      } = ctx

      const [start, end] = itemsToRender

      const Container = resolveDynamicComponent(containerElement)
      const Inner = resolveDynamicComponent(innerElement)

      const children = []

      for (let i = start; i <= end; i++) {
        children.push(
          $slots.default?.({
            data: itemData,
            key: i,
            index: i,
            isScrolling: useIsScrolling ? states.isScrolling : undefined,
            style: getItemStyle(i),
          }),
        )
      }

      const InnerNode = [h(Inner as VNode, {
        style: innerStyle,
        ref: 'innerRef',
      }, isVNode(Inner) ? {
        default: () => children,
      } : children)]

      return h(Container as VNode, {
        class: className,
        style: containerStyle,
        onScroll,
        ref: 'containerRef',
      }, isVNode(Container) ? { default: () => InnerNode } : InnerNode)
    },
  })
}

export default createList
