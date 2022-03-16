<template>
  <div
    v-show="ready"
    :class="[
      ns.e('item'),
      ns.is('active', active),
      ns.is('in-stage', inStage),
      ns.is('hover', hover),
      ns.is('animating', animating),
      { [ns.em('item', 'card')]: type === 'card' },
    ]"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="type === 'card'" v-show="!active" :class="ns.e('mask')" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  inject,
  computed,
  getCurrentInstance,
  onUnmounted,
  ref,
} from 'vue'
import { debugWarn } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import type { CSSProperties } from 'vue'
import { carouselItemProps } from './carousel-item'
import { carouselContextKey } from '@element-plus/tokens'

defineOptions({
  name: 'ElCarouselItem',
})

const props = defineProps(carouselItemProps)

// inject
const carouselContext = inject(carouselContextKey)

const ns = useNamespace('carousel')
const CARD_SCALE = 0.83
const type = carouselContext?.type

// instance
const instance = getCurrentInstance()

const hover = ref(false)
const translate = ref(0)
const scale = ref(1)
const active = ref(false)
const ready = ref(false)
const inStage = ref(false)
const animating = ref(false)

// computed
const parentDirection = computed(() => {
  return carouselContext?.direction
})

const itemStyle = computed(() => {
  const translateType =
    parentDirection.value === 'vertical' ? 'translateY' : 'translateX'
  const value = `${translateType}(${translate.value}px) scale(${scale.value})`
  const style: CSSProperties = {
    transform: value,
  }
  return style
})

// methods

function processIndex(index, activeIndex, length) {
  if (activeIndex === 0 && index === length - 1) {
    return -1
  } else if (activeIndex === length - 1 && index === 0) {
    return length
  } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
    return length + 1
  } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
    return -2
  }
  return index
}

function calcCardTranslate(index, activeIndex) {
  const parentWidth = carouselContext?.root.value?.offsetWidth || 0
  if (inStage.value) {
    return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
  } else if (index < activeIndex) {
    return (-(1 + CARD_SCALE) * parentWidth) / 4
  } else {
    return ((3 + CARD_SCALE) * parentWidth) / 4
  }
}

function calcTranslate(index, activeIndex, isVertical) {
  const distance =
    (isVertical
      ? carouselContext?.root.value?.offsetHeight
      : carouselContext?.root.value?.offsetWidth) || 0
  return distance * (index - activeIndex)
}

const translateItem = (
  index: number,
  activeIndex: number,
  oldIndex: number
) => {
  const parentType = carouselContext?.type
  const length = carouselContext?.items.value.length ?? NaN
  if (parentType !== 'card' && oldIndex !== undefined) {
    animating.value = index === activeIndex || index === oldIndex
  }
  if (index !== activeIndex && length > 2 && carouselContext?.loop) {
    index = processIndex(index, activeIndex, length)
  }
  if (parentType === 'card') {
    if (parentDirection.value === 'vertical') {
      debugWarn('Carousel', 'vertical direction is not supported in card mode')
    }
    inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1
    active.value = index === activeIndex
    translate.value = calcCardTranslate(index, activeIndex)
    scale.value = active.value ? 1 : CARD_SCALE
  } else {
    active.value = index === activeIndex
    const isVertical = parentDirection.value === 'vertical'
    translate.value = calcTranslate(index, activeIndex, isVertical)
  }
  ready.value = true
}

function handleItemClick() {
  if (carouselContext && carouselContext?.type === 'card') {
    const index = carouselContext?.items.value
      .map((d) => d.uid)
      .indexOf(instance?.uid)
    carouselContext?.setActiveItem(index)
  }
}

// lifecycle
onMounted(() => {
  if (carouselContext?.addItem) {
    carouselContext?.addItem({
      uid: instance?.uid,
      ...props,
      hover,
      translate,
      scale,
      active,
      ready,
      inStage,
      animating,
      translateItem,
    })
  }
})

onUnmounted(() => {
  if (carouselContext?.removeItem) {
    carouselContext?.removeItem(instance?.uid)
  }
})
</script>
