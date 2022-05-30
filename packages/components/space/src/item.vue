<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buildProps } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'

const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: '',
  },
} as const)

export default defineComponent({
  props: spaceItem,

  setup(props) {
    const ns = useNamespace('space')

    const classes = computed(() => `${props.prefixCls || ns.b()}__item`)

    return {
      classes,
    }
  },
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
