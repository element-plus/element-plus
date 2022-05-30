<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: null,
  },
})
defineOptions({
  name: 'ElFooter',
})
const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties
)
</script>
<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>
