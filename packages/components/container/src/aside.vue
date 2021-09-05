<template>
  <aside class="el-aside" :style="style">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

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
    return {
      style: computed(() => {
        return props.width
          ? ({ '--el-aside-width': props.width } as CSSProperties)
          : {}
      }),
    }
  },
})
</script>
