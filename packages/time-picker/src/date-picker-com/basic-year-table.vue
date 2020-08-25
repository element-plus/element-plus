<template>
  <table class="el-year-table" @click="handleYearTableClick">
    <tbody>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 0)">
          <a class="cell">{{ startYear }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 1)">
          <a class="cell">{{ startYear + 1 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 2)">
          <a class="cell">{{ startYear + 2 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 3)">
          <a class="cell">{{ startYear + 3 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 4)">
          <a class="cell">{{ startYear + 4 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 5)">
          <a class="cell">{{ startYear + 5 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 6)">
          <a class="cell">{{ startYear + 6 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 7)">
          <a class="cell">{{ startYear + 7 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 8)">
          <a class="cell">{{ startYear + 8 }}</a>
        </td>
        <td class="available" :class="getCellStyle(startYear + 9)">
          <a class="cell">{{ startYear + 9 }}</a>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { hasClass } from '@element-plus/utils/dom'
import { isDate, range, nextDate, getDayCountOfYear } from '../time-picker-com/time-picker-utils'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'
import {
  defineComponent,
  computed,
  ref,
  PropType,
} from 'vue'
const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

const datesInYear = year => {
  const numOfDays = getDayCountOfYear(year)
  const firstDay = new Date(year, 0, 1)
  return range(numOfDays).map(n => nextDate(firstDay, n))
}

export default defineComponent({
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator:(val:any):boolean  => (
        // null or valid Date Object
        val === null || (val instanceof Date && isDate(val))
      ),
    },
    date: {
      type: Date as PropType<Date>,
    },
  },

  emits: ['pick'],

  setup(props, ctx) {
    const startYear = computed(() =>{
      return Math.floor(props.date.getFullYear() / 10) * 10
    })
    const getCellStyle = year => {
      const style = {} as any
      const today = new Date()

      style.disabled = typeof props.disabledDate === 'function'
        ? datesInYear(year).every(props.disabledDate)
        : false
      style.current = arrayFindIndex(coerceTruthyValueToArray(props.date), date => date.getFullYear() === year) >= 0
      style.today = today.getFullYear() === year
      style.default = props.defaultValue && props.defaultValue.getFullYear() === year

      return style
    }

    const handleYearTableClick = event => {
      const target = event.target
      if (target.tagName === 'A') {
        if (hasClass(target.parentNode, 'disabled')) return
        const year = target.textContent || target.innerText
        ctx.emit('pick', Number(year))
      }
    }
    return {
      startYear,
      getCellStyle,
      handleYearTableClick,
    }
  },
})
</script>
