<template>
  <div :style="arrowStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tooltipV2ArrowProps } from './arrow'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElTooltipV2Arrow',
})

const props = defineProps(tooltipV2ArrowProps)

const arrowStyle = computed<CSSProperties>(() => {
  return {
    position: 'absolute',
    width: `${props.width}px`,
    height: `${props.height}px`,
    ...(props.style || {}),
  }
})
</script>
