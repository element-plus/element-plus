<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.yearTablePrompt')"
    class="el-year-table"
    @click="handleYearTableClick"
  >
    <tbody ref="tbodyRef">
      <tr v-for="(n, i) in 3" :key="i">
        <template v-for="(nn, j) in 4" :key="i + '_' + j">
          <td
            v-if="i * 4 + j < 10"
            :ref="
              (el) =>
                isSelectedCell(startYear + i * 4 + j) && (currentCellRef = el)
            "
            class="available"
            :class="getCellStyle(startYear + i * 4 + j)"
            :aria-selected="`${isSelectedCell(startYear + i * 4 + j)}`"
            :tabindex="isSelectedCell(startYear + i * 4 + j) ? 0 : -1"
            @keydown.space.prevent.stop="handleYearTableClick"
            @keydown.enter.prevent.stop="handleYearTableClick"
          >
            <span class="cell">{{ startYear + i * 4 + j }}</span>
          </td>
          <td v-else />
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { useLocale } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { castArray, hasClass } from '@element-plus/utils'

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
  expose: ['focus'],

  setup(props, ctx) {
    const { t, lang } = useLocale()
    const tbodyRef = ref<HTMLElement>()
    const currentCellRef = ref<HTMLElement>()
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10
    })

    watch(
      () => props.date,
      async () => {
        if (tbodyRef.value?.contains(document.activeElement)) {
          await nextTick()
          currentCellRef.value?.focus()
        }
      }
    )

    const focus = () => {
      currentCellRef.value?.focus()
    }

    const getCellStyle = (year) => {
      const style = {} as any
      const today = dayjs().locale(lang.value)

      style.disabled = props.disabledDate
        ? datesInYear(year, lang.value).every(props.disabledDate)
        : false

      style.current =
        castArray(props.parsedValue).findIndex((_) => _.year() === year) >= 0

      style.today = today.year() === year

      return style
    }

    const isSelectedCell = (year) => {
      return (
        (year === startYear.value &&
          props.date.year() < startYear.value &&
          props.date.year() > startYear.value + 9) ||
        castArray(props.date).findIndex((_) => _.year() === year) >= 0
      )
    }

    const handleYearTableClick = (event: MouseEvent) => {
      const clickTarget = event.target as HTMLDivElement
      const target = clickTarget.closest('td')
      if (target) {
        if (hasClass((target as any).parentNode, 'disabled')) return
        const year = target.textContent || target.innerText
        ctx.emit('pick', Number(year))
      }
    }
    return {
      t,
      tbodyRef,
      currentCellRef,
      startYear,
      focus,
      isSelectedCell,
      getCellStyle,
      handleYearTableClick,
    }
  },
})
</script>
