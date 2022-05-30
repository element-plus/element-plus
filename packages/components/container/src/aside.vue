<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: null,
  },
})
defineOptions({
  name: 'ElAside',
})
const ns = useNamespace('aside')
const style = computed(
  () =>
    (props.width ? ns.cssVarBlock({ width: props.width }) : {}) as CSSProperties
)
</script>
<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>
