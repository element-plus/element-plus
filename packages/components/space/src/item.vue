<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buildProps } from '@element-plus/utils/props'

const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: 'el-space',
  },
} as const)

export default defineComponent({
  props: spaceItem,

  setup(props) {
    const classes = computed(() => [`${props.prefixCls}__item`])

    return {
      classes,
    }
  },
})
</script>
