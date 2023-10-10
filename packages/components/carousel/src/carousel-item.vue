<template>
  <div
    v-show="ready"
    ref="carouselItemRef"
    :class="[
      ns.e('item'),
      ns.is('active', active),
      ns.is('in-stage', inStage),
      ns.is('hover', hover),
      ns.is('animating', animating),
      {
        [ns.em('item', 'card')]: isCardType,
        [ns.em('item', 'card-vertical')]: isCardType && isVertical,
      },
    ]"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="isCardType" v-show="!active" :class="ns.e('mask')" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, unref, watch } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { carouselItemProps } from './carousel-item'
import { useCarouselItem } from './use-carousel-item'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElCarouselItem',
})

const props = defineProps(carouselItemProps)
const ns = useNamespace('carousel')
const COMPONENT_NAME = 'ElCarouselItem'
// inject
const {
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
  isSide,
  isLastItem,
  handleItemClick,
} = useCarouselItem(props, COMPONENT_NAME)

const zIndex = ref<any>('')
const timer = ref<ReturnType<typeof setTimeout> | null>(null)

watch(isSide, (newVal) => {
  if (newVal) {
    if (isLastItem.value) {
      zIndex.value = -10
    } else {
      if (timer.value) {
        clearTimeout(timer.value)
      }
      // set timeout to the same value as the transition-duration(0.4s) specified in carousel-item.scss
      timer.value = setTimeout(() => {
        zIndex.value = -10
      }, 400)
    }
  } else {
    if (isLastItem.value) {
      if (timer.value) {
        clearTimeout(timer.value)
      }
      timer.value = setTimeout(() => {
        zIndex.value = ''
      }, 400)
    } else {
      zIndex.value = ''
    }
  }
})

function pauseTimer() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

onUnmounted(() => {
  pauseTimer()
})

const itemStyle = computed<CSSProperties>(() => {
  const translateType = `translate${unref(isVertical) ? 'Y' : 'X'}`
  const _translate = `${translateType}(${unref(translate)}px)`
  const _scale = `scale(${unref(scale)})`
  const transform = [_translate, _scale].join(' ')

  type Style = {
    transform: string
    zIndex: any
  }

  const style: Style = {
    transform,
    zIndex: zIndex.value,
  }

  return style
})
</script>
