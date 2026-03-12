<template>
  <div :class="rootKls">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { collapseEmits } from './collapse'
import { useCollapse, useCollapseDOM } from './use-collapse'

import type { CollapseProps } from './collapse'

defineOptions({
  name: 'GCollapse',
})
const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: () => [],
  expandIconPosition: 'right',
})
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

const { rootKls } = useCollapseDOM(props)

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames,
})
</script>
