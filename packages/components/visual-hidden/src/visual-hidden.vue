<template>
  <span v-bind="$attrs" :style="computedStyle">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { visualHiddenProps } from './visual-hidden'
import type { StyleValue } from 'vue'
const props = defineProps(visualHiddenProps)

defineOptions({
  name: 'ElVisuallyHidden',
})

const computedStyle = computed<StyleValue>(() => {
  return [
    props.style,
    {
      position: 'absolute',
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    },
  ]
})
</script>
