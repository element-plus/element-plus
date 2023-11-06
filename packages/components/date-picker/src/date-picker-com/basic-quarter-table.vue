<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.quarterTablePrompt')"
    :class="ns.b()"
    @click="handleQuarterTableClick"
  >
    <tbody ref="tbodyRef">
      <tr>
        <td
          v-for="(__, j) in 4"
          :key="j"
          :ref="(el) => isSelectedCell(j + 1) && (currentCellRef = el as HTMLElement)"
          :class="getCellKls(j + 1)"
          :aria-selected="`${isSelectedCell(j + 1)}`"
          :aria-label="t(`el.datepicker.quarter${+j + 1}`)"
          :tabindex="isSelectedCell(j + 1) ? 0 : -1"
          @keydown.space.prevent.stop="handleQuarterTableClick"
          @keydown.enter.prevent.stop="handleQuarterTableClick"
        >
          <div>
            <span class="cell">
              {{ t(`el.datepicker.quarter${+j + 1}`) }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { castArray, hasClass } from '@element-plus/utils'
import { basicQuarterTableProps } from '../props/basic-quarter-table'

const datesInQuarter = (year: number, quarter: number, lang: string) => {
  const startMonthOfQuarter = (quarter - 1) * 3
  const quarterMonths = Array.from(
    { length: 3 },
    (_, i) => startMonthOfQuarter + i
  )
  const numOfDays = quarterMonths.reduce((acc, month) => {
    const firstDayOfMonth = dayjs()
      .locale(lang)
      .month(month)
      .year(year)
      .startOf('month')
    const daysInMonth = firstDayOfMonth.daysInMonth()
    return acc + daysInMonth
  }, 0)
  const firstDay = dayjs()
    .locale(lang)
    .startOf('month')
    .month(startMonthOfQuarter)
    .year(year)

  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

const props = defineProps(basicQuarterTableProps)
const emit = defineEmits(['pick'])

const ns = useNamespace('quarter-table')

const { t, lang } = useLocale()
const tbodyRef = ref<HTMLElement>()
const currentCellRef = ref<HTMLElement>()

const focus = () => {
  currentCellRef.value?.focus()
}

const getCellKls = (quarter: number) => {
  const kls: Record<string, boolean> = {}
  const today = dayjs().locale(lang.value)
  const year = props.date.year()

  kls.disabled = props.disabledDate
    ? datesInQuarter(year, quarter, lang.value).every(props.disabledDate)
    : false

  kls.current =
    castArray(props.parsedValue).findIndex(
      (d) => d!.year() === year && d!.quarter() === quarter
    ) >= 0

  kls.today = today.year() === year && today.quarter() === quarter
  return kls
}

const isSelectedCell = (quarter: number) => {
  const year = props.date.year()
  return (
    castArray(props.date).findIndex(
      (date) => date.year() === year && date.quarter() === quarter
    ) >= 0
  )
}

const handleQuarterTableClick = (event: MouseEvent | KeyboardEvent) => {
  const clickTarget = event.target as HTMLDivElement
  const target = clickTarget.closest('td')
  if (target && target.textContent) {
    if (hasClass(target, 'disabled')) return
    const quarter = target.textContent || target.innerText
    emit('pick', Number(quarter[quarter.length - 1]))
  }
}

watch(
  () => props.date,
  async () => {
    if (tbodyRef.value?.contains(document.activeElement)) {
      await nextTick()
      currentCellRef.value?.focus()
    }
  }
)

defineExpose({
  /**
   * @description focus on the current cell
   */
  focus,
})
</script>
