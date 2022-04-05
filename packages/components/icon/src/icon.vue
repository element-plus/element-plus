<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, isUndefined } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElIcon',
  inheritAttrs: false,
})
const props = defineProps(iconProps)
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>
