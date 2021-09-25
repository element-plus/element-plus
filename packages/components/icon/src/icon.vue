<template>
  <i class="el-icon" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElIcon',
  inheritAttrs: false,

  props: iconProps,

  setup(props) {
    return {
      style: computed<CSSProperties>(() => {
        if (!props.size && !props.color) {
          return {}
        }
        return {
          ...(props.size ? { '--font-size': `${props.size}px` } : {}),
          ...(props.color ? { '--color': props.color } : {}),
        } as CSSProperties
      }),
    }
  },
})
</script>
