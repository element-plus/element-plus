<template>
  <thumb :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always" />
  <thumb
    :move="moveY"
    :ratio="ratioY"
    :size="sizeHeight"
    vertical
    :always="always"
    :start-gap="startGapY"
    :end-gap="endGapY"
  />
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
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
const ratioY = ref(1)
const ratioX = ref(1)
const startGapY = ref(0)
const endGapY = ref(0)

const normalizeGap = (gap: number | undefined) => {
  return Math.max(Number(gap) || 0, 0)
}

const getValidTrackGap = (
  trackSize: number,
  startGap: number | undefined,
  endGap: number | undefined,
  minTrackSize: number
) => {
  let start = normalizeGap(startGap)
  let end = normalizeGap(endGap)
  const maxGap = Math.max(trackSize - minTrackSize, 0)
  const total = start + end

  if (total > maxGap && total > 0) {
    const ratio = maxGap / total
    start *= ratio
    end *= ratio
  }

  return {
    start,
    end,
    size: Math.max(trackSize - start - end, 0),
  }
}

const getRatio = (
  viewportSize: number,
  scrollSize: number,
  trackSize: number,
  thumbSize: number
) => {
  const scrollRange = scrollSize - viewportSize
  const thumbRange = trackSize - thumbSize

  return scrollRange > 0 && thumbSize > 0
    ? (viewportSize / scrollRange) * (thumbRange / thumbSize)
    : 1
}

const handleScroll = (wrap: HTMLDivElement) => {
  if (wrap) {
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * ratioY.value
    moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * ratioX.value
  }
}

const update = () => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return
  const offsetHeight = wrap.offsetHeight - GAP
  const offsetWidth = wrap.offsetWidth - GAP
  const trackHeight = getValidTrackGap(
    offsetHeight,
    props.verticalStartGap,
    props.verticalEndGap,
    props.minSize + 1
  )

  startGapY.value = trackHeight.start
  endGapY.value = trackHeight.end

  const originalHeight = (trackHeight.size * offsetHeight) / wrap.scrollHeight
  const originalWidth = offsetWidth ** 2 / wrap.scrollWidth
  const height = Math.max(originalHeight, props.minSize)
  const width = Math.max(originalWidth, props.minSize)

  ratioY.value = getRatio(
    offsetHeight,
    wrap.scrollHeight,
    trackHeight.size,
    height
  )
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width))

  sizeHeight.value =
    wrap.scrollHeight > wrap.offsetHeight && height < trackHeight.size
      ? `${height}px`
      : ''
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
}

defineExpose({
  handleScroll,
  update,
})
</script>
