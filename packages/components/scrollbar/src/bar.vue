<template>
  <thumb :move="moveX" :size="sizeWidth" :always="always" />
  <thumb :move="moveY" :size="sizeHeight" vertical :always="always" />
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { clamp } from '@vueuse/core'
import { GAP } from './util'
import Thumb from './thumb.vue'
import { scrollbarContextKey } from './constants'

import type { BarProps } from './bar'

const props = withDefaults(defineProps<BarProps>(), {
  always: true,
})

const scrollbar = inject(scrollbarContextKey)

const moveX = ref(0)
const moveY = ref(0)
const sizeWidth = ref('')
const sizeHeight = ref('')

// Scroll progress in percent. It keeps the sign of the scroll offset, which
// is negative for horizontal scrolling in RTL.
const getMove = (scroll: number, scrollSize: number, clientSize: number) => {
  const maxScroll = scrollSize - clientSize
  if (maxScroll <= 0) return 0
  return clamp((scroll * 100) / maxScroll, -100, 100)
}

// The thumb size is a percentage of the track, so it adapts to the actual
// track size even when it has been changed with CSS.
const getSize = (
  offsetSize: number,
  clientSize: number,
  scrollSize: number
) => {
  // Hide the thumb when it would not fit in the default track size
  const trackSize = offsetSize - GAP
  const size = Math.max(trackSize ** 2 / scrollSize, props.minSize)
  if (size + GAP >= trackSize) return ''

  return `max(${props.minSize}px, ${(clientSize * 100) / scrollSize}%)`
}

const handleScroll = (wrap: HTMLDivElement) => {
  if (wrap) {
    moveY.value = getMove(wrap.scrollTop, wrap.scrollHeight, wrap.clientHeight)
    moveX.value = getMove(wrap.scrollLeft, wrap.scrollWidth, wrap.clientWidth)
  }
}

const update = () => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return

  sizeHeight.value = getSize(
    wrap.offsetHeight,
    wrap.clientHeight,
    wrap.scrollHeight
  )
  sizeWidth.value = getSize(
    wrap.offsetWidth,
    wrap.clientWidth,
    wrap.scrollWidth
  )
}

defineExpose({
  handleScroll,
  update,
})
</script>
