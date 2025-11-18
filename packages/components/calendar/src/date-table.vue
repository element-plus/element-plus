<template>
  <table
    :class="[nsTable.b(), nsTable.is('range', isInRange)]"
    cellspacing="0"
    cellpadding="0"
  >
    <thead v-if="!hideHeader">
      <tr>
        <th v-for="day in weekDays" :key="day" scope="col">{{ day }}</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(row, index) in rows"
        :key="index"
        :class="{
          [nsTable.e('row')]: true,
          [nsTable.em('row', 'hide-border')]: index === 0 && hideHeader,
        }"
      >
        <td
          v-for="(cell, key) in row"
          :key="key"
          :class="getCellClass(cell)"
          @click="handlePickDay(cell)"
        >
          <div :class="nsDay.b()">
            <slot name="date-cell" :data="getSlotData(cell)">
              <span>{{ cell.text }}</span>
            </slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { dateTableEmits, dateTableProps } from './date-table'
import { useDateTable } from './use-date-table'

import type { CalendarDateCell } from './date-table'

defineOptions({
  name: 'DateTable',
})

const props = defineProps(dateTableProps)
const emit = defineEmits(dateTableEmits)

const {
  isInRange,
  now,
  rows,
  weekDays,
  getFormattedDate,
  handlePickDay,
  getSlotData,
} = useDateTable(props, emit)

const nsTable = useNamespace('calendar-table')
const nsDay = useNamespace('calendar-day')

const getCellClass = ({ text, type }: CalendarDateCell) => {
  const classes: string[] = [type]
  if (type === 'current') {
    const date = getFormattedDate(text, type)
    if (date.isSame(props.selectedDay, 'day')) {
      classes.push(nsDay.is('selected'))
    }
    if (date.isSame(now, 'day')) {
      classes.push(nsDay.is('today'))
    }
  }
  return classes
}

defineExpose({
  /** @description toggle date panel */
  getFormattedDate,
})
</script>
