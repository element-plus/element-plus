<template>
  <header :class="ns.b()" :style="style">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

interface HeaderProps {
  /**
   * @description height of the header
   */
  height?: string | null
}

defineOptions({
  name: 'ElHeader',
})

const props = withDefaults(defineProps<HeaderProps>(), {
  height: null,
})

const ns = useNamespace('header')
const style = computed(() =>
  props.height
    ? (ns.cssVarBlock({
        height: props.height,
      }) as CSSProperties)
    : {}
)
</script>
