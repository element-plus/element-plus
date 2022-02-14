<template>
  <footer :class="ns.b()" :style="style">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'

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
    const ns = useNamespace('footer')

    return {
      style: computed(
        () =>
          (props.height
            ? {
                '--el-footer-height': props.height,
              }
            : {}) as CSSProperties
      ),
      ns,
    }
  },
})
</script>
