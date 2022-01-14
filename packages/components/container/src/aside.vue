<template>
  <aside :class="prefixClass" :style="style">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
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
    const prefixClass = usePrefixClass('aside')

    return {
      prefixClass,
      style: computed(() => {
        return props.width
          ? ({ '--el-aside-width': props.width } as CSSProperties)
          : {}
      }),
    }
  },
})
</script>
