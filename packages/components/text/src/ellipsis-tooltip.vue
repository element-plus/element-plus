<template>
  <el-tooltip v-if="showTooltip" v-bind="tooltipProps">
    <slot />
  </el-tooltip>
  <slot v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'

import type { ElTooltipProps } from '@element-plus/components/tooltip'

defineOptions({
  name: 'EllipsisTooltip',
})
const props = defineProps<{
  enableEllipsis: boolean
  tooltipProps?: Partial<ElTooltipProps>
}>()

const showTooltip = computed(
  () => props.enableEllipsis && props.tooltipProps?.content
)
</script>
