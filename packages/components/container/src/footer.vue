<template>
  <footer :class="prefixClass" :style="style">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElFooter',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const prefixClass = usePrefixClass('footer')
    return {
      prefixClass,
      style: computed(
        () =>
          (props.height
            ? {
                '--el-footer-height': props.height,
              }
            : {}) as CSSProperties
      ),
    }
  },
})
</script>
