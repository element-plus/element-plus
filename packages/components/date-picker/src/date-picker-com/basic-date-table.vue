<template>
  <table
    :aria-label="tableLabel"
    :class="tableKls"
    cellspacing="0"
    cellpadding="0"
    role="grid"
    @click="handlePickDate"
    @mousemove="handleMouseMove"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <tbody ref="tbodyRef">
      <tr>
        <th v-if="showWeekNumber" scope="col" :class="weekHeaderClass" />
        <th
          v-for="(week, key) in WEEKS"
          :key="key"
          :aria-label="t('el.datepicker.weeksFull.' + week)"
          scope="col"
        >
          {{ t('el.datepicker.weeks.' + week) }}
        </th>
      </tr>
      <tr
        v-for="(row, rowKey) in rows"
        :key="rowKey"
        :class="getRowKls(row[1])"
      >
        <td
          v-for="(cell, columnKey) in row"
          :key="`${rowKey}.${columnKey}`"
          :ref="(el) => !isUnmounting && isSelectedCell(cell) && (currentCellRef = el as HTMLElement)"
          :class="getCellClasses(cell)"
          :aria-current="cell.isCurrent ? 'date' : undefined"
          :aria-selected="cell.isCurrent"
          :tabindex="isSelectedCell(cell) ? 0 : -1"
          @focus="handleFocus"
        >
          <el-date-picker-cell :cell="cell" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from 'vue'
import {
  basicDateTableEmits,
  basicDateTableProps,
} from '../props/basic-date-table'
import {
  useBasicDateTable,
  useBasicDateTableDOM,
} from '../composables/use-basic-date-table'
import ElDatePickerCell from './basic-cell-render'

const props = defineProps(basicDateTableProps)
const emit = defineEmits(basicDateTableEmits)

const {
  WEEKS,
  rows,
  tbodyRef,
  currentCellRef,

  focus,
  isCurrent,
  isWeekActive,
  isSelectedCell,

  handlePickDate,
  handleMouseUp,
  handleMouseDown,
  handleMouseMove,
  handleFocus,
} = useBasicDateTable(props, emit)
const { tableLabel, tableKls, getCellClasses, getRowKls, weekHeaderClass, t } =
  useBasicDateTableDOM(props, {
    isCurrent,
    isWeekActive,
  })
let isUnmounting = false

onBeforeUnmount(() => {
  isUnmounting = true
})

defineExpose({
  /**
   * @description focus on current cell
   */
  focus,
})
</script>
