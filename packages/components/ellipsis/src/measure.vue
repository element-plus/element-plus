<template>
  <span ref="spanRef" aria-hidden :style="style">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElMeasure',
})

const spanRef = ref<HTMLSpanElement>()

const style: CSSProperties = {
  position: 'fixed',
  display: 'block',
  left: 0,
  top: 0,
  pointerEvents: 'none',
  backgroundColor: 'rgba(255, 0, 0, 0.65)',
  whiteSpace: 'normal',
  margin: 0,
  padding: 0,
}

const isExceed = () => {
  const span = spanRef.value!
  return span.scrollHeight > span.clientHeight
}

const getHeight = () => spanRef.value!.clientHeight

defineExpose({
  isExceed,
  getHeight,
})
</script>
