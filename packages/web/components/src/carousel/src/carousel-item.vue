<template>
  <div
    v-show="ready"
    :class="[
      ns.e('item'),
      ns.is('active', active),
      ns.is('in-stage', inStage),
      ns.is('hover', hover),
      ns.is('animating', animating),
      { [ns.em('item', 'card')]: isCardType },
    ]"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="isCardType" v-show="!active" :class="ns.e('mask')" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  unref,
} from 'vue'
import { debugWarn, isUndefined } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { carouselContextKey } from '@element-plus/tokens'
import { carouselItemProps } from './carousel-item'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElCarouselItem',
})

const props = defineProps(carouselItemProps)
const ns = useNamespace('carousel')
const COMPONENT_NAME = 'ElCarouselItem'
// inject
const carouselContext = inject(carouselContextKey)!
// instance
const instance = getCurrentInstance()!
if (!carouselContext) {
  debugWarn(
    COMPONENT_NAME,
    'usage: <el-carousel></el-carousel-item></el-carousel>'
  )
}

if (!instance) {
  debugWarn(
    COMPONENT_NAME,
    'compositional hook can only be invoked inside setups'
  )
}

const CARD_SCALE = 0.83

const hover = ref(false)
const translate = ref(0)
const scale = ref(1)
const active = ref(false)
const ready = ref(false)
const inStage = ref(false)
const animating = ref(false)

// computed
const { isCardType, isVertical } = carouselContext

const itemStyle = computed<CSSProperties>(() => {
  const translateType = `translate${unref(isVertical) ? 'Y' : 'X'}`
  const _translate = `${translateType}(${unref(translate)}px)`
  const _scale = `scale(${unref(scale)})`
  const transform = [_translate, _scale].join(' ')

  return {
    transform,
  }
})

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
  const parentWidth = carouselContext.root.value?.offsetWidth || 0
  if (inStage.value) {
    return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
  } else if (index < activeIndex) {
    return (-(1 + CARD_SCALE) * parentWidth) / 4
  } else {
    return ((3 + CARD_SCALE) * parentWidth) / 4
  }
}

function calcTranslate(
  index: number,
  activeIndex: number,
  isVertical: boolean
) {
  const rootEl = carouselContext.root.value
  if (!rootEl) return 0

  const distance = (isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0
  return distance * (index - activeIndex)
}

const translateItem = (
  index: number,
  activeIndex: number,
  oldIndex?: number
) => {
  const _isCardType = unref(isCardType)
  const carouselItemLength = carouselContext.items.value.length ?? Number.NaN

  const isActive = index === activeIndex
  if (!_isCardType && !isUndefined(oldIndex)) {
    animating.value = isActive || index === oldIndex
  }

  if (!isActive && carouselItemLength > 2 && carouselContext.loop) {
    index = processIndex(index, activeIndex, carouselItemLength)
  }

  const _isVertical = unref(isVertical)
  active.value = isActive

  if (_isCardType) {
    if (_isVertical) {
      debugWarn('Carousel', 'vertical direction is not supported for card mode')
    }
    inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1
    translate.value = calcCardTranslate(index, activeIndex)
    scale.value = unref(active) ? 1 : CARD_SCALE
  } else {
    translate.value = calcTranslate(index, activeIndex, _isVertical)
  }

  ready.value = true
}

function handleItemClick() {
  if (carouselContext && unref(isCardType)) {
    const index = carouselContext.items.value.findIndex(
      ({ uid }) => uid === instance.uid
    )
    carouselContext.setActiveItem(index)
  }
}

// lifecycle
onMounted(() => {
  carouselContext.addItem({
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
    translateItem,
  })
})

onUnmounted(() => {
  carouselContext.removeItem(instance.uid)
})
</script>
