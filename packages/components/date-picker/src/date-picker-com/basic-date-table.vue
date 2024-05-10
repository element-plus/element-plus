<template>
  <table
    :aria-label="tableLabel"
    :class="tableKls"
    cellspacing="0"
    cellpadding="0"
    role="grid"
    @click="handlePickDate"
    @mousemove="handleMouseMove"
    @mousedown.prevent="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <tbody ref="tbodyRef">
      <tr>
        <th v-if="showWeekNumber" scope="col">{{ weekLabel }}</th>
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
          :ref="(el) => isSelectedCell(cell) && (currentCellRef = el as HTMLElement)"
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
const { tableLabel, tableKls, weekLabel, getCellClasses, getRowKls, t } =
  useBasicDateTableDOM(props, {
    isCurrent,
    isWeekActive,
  })

defineExpose({
  /**
   * @description focus on current cell
   */
  focus,
})
</script>
