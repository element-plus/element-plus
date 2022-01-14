<template>
  <header :class="prefixClass" :style="style">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const prefixClass = usePrefixClass('header')
    return {
      prefixClass,
      style: computed(
        () =>
          (props.height
            ? {
                '--el-header-height': props.height,
              }
            : {}) as CSSProperties
      ),
    }
  },
})
</script>
