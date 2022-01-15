<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buildProps } from '@element-plus/utils/props'
import { usePrefixClass } from '@element-plus/hooks'
const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: 'space',
  },
} as const)

export default defineComponent({
  props: spaceItem,

  setup(props) {
    const prefixClass = props.prefixCls ==='space' ? usePrefixClass(props.prefixCls).value : props.prefixCls
    const classes = computed(() => [`${prefixClass}__item`])

    return {
      classes,
    }
  },
})
</script>
