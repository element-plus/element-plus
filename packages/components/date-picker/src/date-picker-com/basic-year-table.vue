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
import { defineComponent, computed } from 'vue'
import dayjs from 'dayjs'
import { useLocaleInject } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { hasClass } from '@element-plus/utils/dom'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'

import type { PropType } from 'vue'
import type { Dayjs } from 'dayjs'

const datesInYear = (year: Dayjs, lang: string) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf('year')
  const lastDay = firstDay.endOf('year')
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

export default defineComponent({
  props: {
    disabledDate: {
      type: Function as PropType<(_: Date) => void>,
    },
    parsedValue: {
      type: Object as PropType<Dayjs>,
    },
    date: {
      type: Object as PropType<Dayjs>,
    },
  },

  emits: ['pick'],

  setup(props, ctx) {
    const { lang } = useLocaleInject()
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10
    })
    const getCellStyle = (year) => {
      const style = {} as any
      const today = dayjs().locale(lang.value)

      style.disabled = props.disabledDate
        ? datesInYear(year, lang.value).every(props.disabledDate)
        : false

      style.current =
        coerceTruthyValueToArray(props.parsedValue).findIndex(
          (_) => _.year() === year
        ) >= 0

      style.today = today.year() === year

      return style
    }

    const handleYearTableClick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (target.tagName === 'A') {
        if (hasClass((target as any).parentNode, 'disabled')) return
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
