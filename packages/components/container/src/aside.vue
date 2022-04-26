<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const ns = useNamespace('aside')

    return {
      style: computed(() => {
        return props.width
          ? (ns.cssVarBlock({ width: props.width }) as CSSProperties)
          : {}
      }),
      ns,
    }
  },
})
</script>
