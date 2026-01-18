<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

export interface FooterProps {
  /**
   * @description height of the footer
   */
  height?: string
}

defineOptions({
  name: 'ElFooter',
})
const props = defineProps<FooterProps>()

const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties
)
</script>
