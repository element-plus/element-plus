<template>
  <span ref="arrowRef" :style="arrowStyle" :class="ns.e('arrow')" />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { tooltipV2ContentKey, tooltipV2RootKey } from '@element-plus/tokens'
import { tooltipV2ArrowProps, tooltipV2ArrowSpecialProps } from './arrow'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElTooltipV2Arrow',
})

const props = defineProps({
  ...tooltipV2ArrowProps,
  ...tooltipV2ArrowSpecialProps,
})

const { ns } = inject(tooltipV2RootKey)!
const { arrowRef } = inject(tooltipV2ContentKey)!

const arrowStyle = computed<CSSProperties>(() => {
  const { style, width, height } = props
  const namespace = ns.namespace.value

  return {
    [`--${namespace}-tooltip-v2-arrow-width`]: `${width}px`,
    [`--${namespace}-tooltip-v2-arrow-height`]: `${height}px`,
    [`--${namespace}-tooltip-v2-arrow-border-width`]: `${width / 2}px`,
    [`--${namespace}-tooltip-v2-arrow-cover-width`]: width / 2 - 1,
    ...(style || {}),
  }
})
</script>
