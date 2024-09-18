import {
  computed,
  getCurrentInstance,
  isVNode,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  shallowRef,
  unref,
  useSlots,
  watch,
} from 'vue'
import { throttle } from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import { debugWarn, flattedChildren, isString } from '@element-plus/utils'
import { useOrderedChildren } from '@element-plus/hooks'
import { CAROUSEL_ITEM_NAME, carouselContextKey } from './constants'

import type { SetupContext } from 'vue'
import type { CarouselItemContext } from './constants'
import type { CarouselEmits, CarouselProps } from './carousel'

const THROTTLE_TIME = 300

export const useCarousel = (
  props: CarouselProps,
  emit: SetupContext<CarouselEmits>['emit'],
  componentName: string
) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem,
  } = useOrderedChildren<CarouselItemContext>(
    getCurrentInstance()!,
    CAROUSEL_ITEM_NAME
  )

  const slots = useSlots()

  // refs
  const activeIndex = ref(-1)
  const timer = ref<ReturnType<typeof setInterval> | null>(null)
  const hover = ref(false)
  const root = ref<HTMLDivElement>()
  const containerHeight = ref<number>(0)
  const isItemsTwoLength = ref(true)
  const isFirstCall = ref(true)
  const isTransitioning = ref(false)

  // computed
  const arrowDisplay = computed(
    () => props.arrow !== 'never' && !unref(isVertical)
  )

  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0)
  })

  const isCardType = computed(() => props.type === 'card')
  const isVertical = computed(() => props.direction === 'vertical')

  const containerStyle = computed(() => {
    if (props.height !== 'auto') {
      return {
        height: props.height,
      }
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: 'hidden',
    }
  })

  // methods
  const throttledArrowClick = throttle(
    (index: number) => {
      setActiveItem(index)
    },
    THROTTLE_TIME,
    { trailing: true }
  )

  const throttledIndicatorHover = throttle((index: number) => {
    handleIndicatorHover(index)
  }, THROTTLE_TIME)

  const isTwoLengthShow = (index: number) => {
    if (!isItemsTwoLength.value) return true
    return activeIndex.value <= 1 ? index <= 1 : index > 1
  }

  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  }

  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value) return
    timer.value = setInterval(() => playSlides(), props.interval)
  }

  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true
    }
    isFirstCall.value = false

    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1
    } else if (props.loop) {
      activeIndex.value = 0
    } else {
      isTransitioning.value = false
    }
  }

  function setActiveItem(index: number | string) {
    if (!isFirstCall.value) {
      isTransitioning.value = true
    }
    isFirstCall.value = false

    if (isString(index)) {
      const filteredItems = items.value.filter(
        (item) => item.props.name === index
      )
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0])
      }
    }
    index = Number(index)
    if (Number.isNaN(index) || index !== Math.floor(index)) {
      debugWarn(componentName, 'index must be integer.')
      return
    }
    const itemCount = items.value.length
    const oldIndex = activeIndex.value
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1
    } else {
      activeIndex.value = index
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex)
    }
    resetTimer()
  }

  function resetItemPosition(oldIndex?: number) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex)
    })
  }

  function itemInStage(item: CarouselItemContext, index: number) {
    const _items = unref(items)
    const itemCount = _items.length
    if (itemCount === 0 || !item.states.inStage) return false
    const nextItemIndex = index + 1
    const prevItemIndex = index - 1
    const lastItemIndex = itemCount - 1
    const isLastItemActive = _items[lastItemIndex].states.active
    const isFirstItemActive = _items[0].states.active
    const isNextItemActive = _items[nextItemIndex]?.states?.active
    const isPrevItemActive = _items[prevItemIndex]?.states?.active

    if ((index === lastItemIndex && isFirstItemActive) || isNextItemActive) {
      return 'left'
    } else if ((index === 0 && isLastItemActive) || isPrevItemActive) {
      return 'right'
    }
    return false
  }

  function handleMouseEnter() {
    hover.value = true
    if (props.pauseOnHover) {
      pauseTimer()
    }
  }

  function handleMouseLeave() {
    hover.value = false
    startTimer()
  }

  function handleTransitionEnd() {
    isTransitioning.value = false
  }

  function handleButtonEnter(arrow: 'left' | 'right') {
    if (unref(isVertical)) return
    items.value.forEach((item, index) => {
      if (arrow === itemInStage(item, index)) {
        item.states.hover = true
      }
    })
  }

  function handleButtonLeave() {
    if (unref(isVertical)) return
    items.value.forEach((item) => {
      item.states.hover = false
    })
  }

  function handleIndicatorClick(index: number) {
    if (index !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true
      }
    }
    activeIndex.value = index
  }

  function handleIndicatorHover(index: number) {
    if (props.trigger === 'hover' && index !== activeIndex.value) {
      activeIndex.value = index
      if (!isFirstCall.value) {
        isTransitioning.value = true
      }
    }
  }

  function prev() {
    setActiveItem(activeIndex.value - 1)
  }

  function next() {
    setActiveItem(activeIndex.value + 1)
  }

  function resetTimer() {
    pauseTimer()
    if (!props.pauseOnHover) startTimer()
  }

  function setContainerHeight(height: number) {
    if (props.height !== 'auto') return
    containerHeight.value = height
  }

  function PlaceholderItem() {
    // fix: https://github.com/element-plus/element-plus/issues/12139
    const defaultSlots = slots.default?.()
    if (!defaultSlots) return null

    const flatSlots = flattedChildren(defaultSlots)

    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && (slot.type as any).name === CAROUSEL_ITEM_NAME
    })

    if (normalizeSlots?.length === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true
      return normalizeSlots
    }
    isItemsTwoLength.value = false
    return null
  }

  // watch
  watch(
    () => activeIndex.value,
    (current, prev) => {
      resetItemPosition(prev)
      if (isItemsTwoLength.value) {
        current = current % 2
        prev = prev % 2
      }
      if (prev > -1) {
        emit('change', current, prev)
      }
    }
  )
  watch(
    () => props.autoplay,
    (autoplay) => {
      autoplay ? startTimer() : pauseTimer()
    }
  )
  watch(
    () => props.loop,
    () => {
      setActiveItem(activeIndex.value)
    }
  )

  watch(
    () => props.interval,
    () => {
      resetTimer()
    }
  )

  const resizeObserver = shallowRef<ReturnType<typeof useResizeObserver>>()
  // lifecycle
  onMounted(() => {
    watch(
      () => items.value,
      () => {
        if (items.value.length > 0) setActiveItem(props.initialIndex)
      },
      {
        immediate: true,
      }
    )

    resizeObserver.value = useResizeObserver(root.value, () => {
      resetItemPosition()
    })
    startTimer()
  })

  onBeforeUnmount(() => {
    pauseTimer()
    if (root.value && resizeObserver.value) resizeObserver.value.stop()
  })

  // provide
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    cardScale: props.cardScale,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight,
  })

  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover,
  }
}
