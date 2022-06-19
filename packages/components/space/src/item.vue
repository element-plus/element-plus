<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { buildProps } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'

const props = buildProps({
  prefixCls: {
    type: String,
    default: '',
  },
} as const)

const ns = useNamespace('space')

const classes = computed(() => `${props.prefixCls || ns.b()}__item`)
</script>
