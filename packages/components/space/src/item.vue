<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'el-space',
    },
  },
  setup(props) {
    return {
      classes: computed(() => `${props.prefixCls}__item`),
    }
  },
})
</script>
