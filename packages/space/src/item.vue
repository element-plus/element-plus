<template>
  <div :class="classes">
    <slot>
    </slot>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { defaultProps } from './useSpace'
export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'el-space',
    },
    direction: defaultProps.direction,

  },

  setup(props) {
    return {
      classes: computed(() => `${props.prefixCls}-item`),
    }
  },
})
</script>
