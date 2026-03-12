<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

interface FooterProps {
  /**
   * @description height of the footer
   */
  height?: string | null
}

defineOptions({
  name: 'GFooter',
})
const props = withDefaults(defineProps<FooterProps>(), {
  height: null,
})

const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties
)
</script>
