<template>
  <header :class="ns.b()" :style="style">
    <slot />
  </header>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElHeader',
})

const props = defineProps({
  height: {
    type: String,
    default: null,
  },
})

const ns = useNamespace('header')
const style = computed(() => {
  return props.height
    ? (ns.cssVarBlock({
        height: props.height,
      }) as CSSProperties)
    : {}
})
</script>
