import {
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  reactive,
  ref,
  unref,
} from 'vue'
import { debugWarn, isUndefined } from '@element-plus/utils'
import { CAROUSEL_ITEM_NAME, carouselContextKey } from './constants'

import type { CarouselItemProps } from './carousel-item'

export const useCarouselItem = (props: CarouselItemProps) => {
  const carouselContext = inject(carouselContextKey)!
  // instance
  const instance = getCurrentInstance()!
  if (!carouselContext) {
    debugWarn(
      CAROUSEL_ITEM_NAME,
      'usage: <el-carousel></el-carousel-item></el-carousel>'
    )
  }

  if (!instance) {
    debugWarn(
      CAROUSEL_ITEM_NAME,
      'compositional hook can only be invoked inside setups'
    )
  }

  const carouselItemRef = ref<HTMLElement>()
  const hover = ref(false)
  const translate = ref(0)
  const scale = ref(1)
  const active = ref(false)
  const ready = ref(false)
  const inStage = ref(false)
  const animating = ref(false)

  // computed
  const { isCardType, isVertical, cardScale } = carouselContext

  // methods

  function processIndex(index: number, activeIndex: number, length: number) {
    const lastItemIndex = length - 1
    const prevItemIndex = activeIndex - 1
    const nextItemIndex = activeIndex + 1
    const halfItemIndex = length / 2

    if (activeIndex === 0 && index === lastItemIndex) {
      return -1
    } else if (activeIndex === lastItemIndex && index === 0) {
      return length
    } else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
      return length + 1
    } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
      return -2
    }
    return index
  }

  function calcCardTranslate(index: number, activeIndex: number) {
    const parentWidth = unref(isVertical)
      ? carouselContext.root.value?.offsetHeight || 0
      : carouselContext.root.value?.offsetWidth || 0

    if (inStage.value) {
      return (parentWidth * ((2 - cardScale) * (index - activeIndex) + 1)) / 4
    } else if (index < activeIndex) {
      return (-(1 + cardScale) * parentWidth) / 4
    } else {
      return ((3 + cardScale) * parentWidth) / 4
    }
  }

  function calcTranslate(
    index: number,
    activeIndex: number,
    isVertical: boolean
  ) {
    const rootEl = carouselContext.root.value
    if (!rootEl) return 0

    const distance =
      (isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0
    return distance * (index - activeIndex)
  }

  // Calculate shortest distance and direction for carousel navigation
  function calcDistanceAndDirection(
    activeIndex: number,
    oldIndex: number,
    total: number,
    loopEnabled: boolean
  ) {
    if (loopEnabled) {
      const forwardDist = (activeIndex - oldIndex + total) % total
      const backwardDist = (oldIndex - activeIndex + total) % total
      return {
        shortestDist: Math.min(forwardDist, backwardDist),
        direction: forwardDist <= backwardDist ? 1 : -1,
      }
    }
    return {
      shortestDist: Math.abs(activeIndex - oldIndex),
      direction: activeIndex > oldIndex ? 1 : -1,
    }
  }

  // Check if index is between oldIndex and activeIndex
  function isIndexBetween(
    index: number,
    oldIndex: number,
    activeIndex: number,
    direction: number,
    loopEnabled: boolean
  ) {
    if (!loopEnabled) {
      return direction > 0
        ? index > oldIndex && index < activeIndex
        : index < oldIndex && index > activeIndex
    }

    const isWrapping =
      direction > 0 ? oldIndex >= activeIndex : oldIndex <= activeIndex

    if (isWrapping) {
      return direction > 0
        ? index > oldIndex || index < activeIndex
        : index < oldIndex || index > activeIndex
    }

    return direction > 0
      ? index > oldIndex && index < activeIndex
      : index < oldIndex && index > activeIndex
  }

  // Calculate animation state for carousel items
  function calcAnimatingState(
    index: number,
    activeIndex: number,
    oldIndex: number,
    total: number,
    loopEnabled: boolean
  ) {
    const isActive = index === activeIndex
    const { shortestDist, direction } = calcDistanceAndDirection(
      activeIndex,
      oldIndex,
      total,
      loopEnabled
    )

    if (shortestDist <= 1) {
      return isActive || index === oldIndex
    }

    const isBetween = isIndexBetween(
      index,
      oldIndex,
      activeIndex,
      direction,
      loopEnabled
    )
    return isActive || index === oldIndex || isBetween
  }

  const translateItem = (
    index: number,
    activeIndex: number,
    oldIndex?: number
  ) => {
    const _isCardType = unref(isCardType)
    const carouselItemLength = carouselContext.items.value.length ?? Number.NaN
    const isActive = index === activeIndex

    // Calculate animation state for non-card type
    if (!_isCardType && !isUndefined(oldIndex)) {
      const loopEnabled =
        carouselContext.loop &&
        Number.isFinite(carouselItemLength) &&
        carouselItemLength > 0

      animating.value = calcAnimatingState(
        index,
        activeIndex,
        oldIndex,
        carouselItemLength,
        loopEnabled
      )
    }

    // Process index for loop mode positioning
    if (!isActive && carouselItemLength > 2 && carouselContext.loop) {
      index = processIndex(index, activeIndex, carouselItemLength)
    }

    // Set active state and calculate transform
    const _isVertical = unref(isVertical)
    active.value = isActive

    if (_isCardType) {
      inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1
      translate.value = calcCardTranslate(index, activeIndex)
      scale.value = unref(active) ? 1 : cardScale
    } else {
      translate.value = calcTranslate(index, activeIndex, _isVertical)
    }

    ready.value = true

    if (isActive && carouselItemRef.value) {
      carouselContext.setContainerHeight(carouselItemRef.value.offsetHeight)
    }
  }

  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(
        ({ uid }) => uid === instance.uid
      )
      carouselContext.setActiveItem(index)
    }
  }

  const carouselItemContext = {
    props,
    states: reactive({
      hover,
      translate,
      scale,
      active,
      ready,
      inStage,
      animating,
    }),
    uid: instance.uid,
    getVnode: () => instance.vnode,
    translateItem,
  }

  carouselContext.addItem(carouselItemContext)

  onBeforeUnmount(() => {
    carouselContext.removeItem(carouselItemContext)
  })

  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick,
  }
}
