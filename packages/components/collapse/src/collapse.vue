<template>
  <div :class="rootKls" role="tablist" aria-multiselectable="true">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { collapseEmits, collapseProps } from './collapse'
import { useCollapse, useCollapseDOM } from './use-collapse'

defineOptions({
  name: 'ElCollapse',
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

const { rootKls } = useCollapseDOM()

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames,
})
</script>
