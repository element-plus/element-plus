<script setup lang="ts" generic="T extends DefaultRow">
import { ref } from 'vue';
import TableColumnImpl from './table-column-impl'

import type { ComponentPublicInstance } from 'vue';
import type { TableColumnCtx, TableColumnProps } from './defaults'
import type { DefaultRow } from '../table/defaults'

const exposed = ref<ComponentPublicInstance>()
const props = defineProps<TableColumnProps<T>>()
const slots = defineSlots<{
  default?: (scope: { row: T, column: TableColumnCtx<T>, $index: number }) => any
}>()
defineExpose(exposed.value)
</script>

<template>
  <TableColumnImpl ref="exposed" v-bind="props as any">
    <template #default="scope">
      <slot name="default" v-bind="scope" />
    </template>
  </TableColumnImpl>
</template>
