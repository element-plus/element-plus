<template>
  <i
    class="el-icon"
    :style="style"
    v-bind="$attrs"
  >
    <slot></slot>
  </i>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'ElIcon',
  props: {
    size: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    return {
      style: computed(() => {
        if (!props.size && !props.color) {
          return {}
        }
        return {
          ...(props.size ? { '--font-size': `${props.size}px` }: {}),
          ...(props.color ? { '--color': props.color } : {}),
        } as CSSProperties
      }),
    }
  },
})
</script>
