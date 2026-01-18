<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

export interface AsideProps {
  /**
   * @description width of the side section
   */
  width?: string | null
}

defineOptions({
  name: 'ElAside',
})
const props = withDefaults(defineProps<AsideProps>(), {
  width: null,
})

const ns = useNamespace('aside')
const style = computed(
  () =>
    (props.width ? ns.cssVarBlock({ width: props.width }) : {}) as CSSProperties
)
</script>
