<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.yearTablePrompt')"
    :class="ns.b()"
    @click="handleYearTableClick"
    @mousemove="handleMouseMove"
  >
    <tbody ref="tbodyRef">
      <tr v-for="(_, i) in 3" :key="i">
        <template v-for="(__, j) in 4" :key="i + '_' + j">
          <td
            v-if="i * 4 + j < 10"
            :ref="
              (el) =>
                isSelectedCell(startYear + i * 4 + j) && (currentCellRef = el as HTMLElement)
            "
            class="available"
            :class="getCellKls(startYear + i * 4 + j)"
            :aria-selected="`${isSelectedCell(startYear + i * 4 + j)}`"
            :tabindex="isSelectedCell(startYear + i * 4 + j) ? 0 : -1"
            @keydown.space.prevent.stop="handleYearTableClick"
            @keydown.enter.prevent.stop="handleYearTableClick"
          >
            <div>
              <span class="cell">{{ startYear + i * 4 + j }}</span>
            </div>
          </td>
          <td v-else />
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { castArray, hasClass } from '@element-plus/utils'
import { basicYearTableProps } from '../props/basic-year-table'

const datesInYear = (year: number, lang: string) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf('year')
  const lastDay = firstDay.endOf('year')
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

const props = defineProps(basicYearTableProps)
const emit = defineEmits(['changerange', 'pick', 'select'])

const ns = useNamespace('year-table')

const { t, lang } = useLocale()
const tbodyRef = ref<HTMLElement>()
const currentCellRef = ref<HTMLElement>()
const startYear = computed(() => {
  return Math.floor(props.date.year() / 10) * 10
})

const focus = () => {
  currentCellRef.value?.focus()
}

const getCellKls = (year: number) => {
  const kls: Record<string, boolean> = {}
  const today = dayjs().locale(lang.value)

  kls.disabled = props.disabledDate
    ? datesInYear(year, lang.value).every(props.disabledDate)
    : false

  kls.current =
    castArray(props.parsedValue).findIndex((d) => d!.year() === year) >= 0

  kls.today = today.year() === year

  const startYear = props.minDate?.year()
  const endYear =
    props.rangeState?.endDate?.year() ||
    props.maxDate?.year() ||
    (props.rangeState.selecting && props.minDate?.year()) // 第一次select

  const isRange =
    (startYear && endYear && year >= startYear && year <= endYear) ||
    (startYear && endYear && year <= startYear && year >= endYear)

  if (isRange) {
    kls['in-range'] = true

    if (startYear <= endYear) {
      if (startYear === year) {
        kls['start-date'] = true
      }

      if (endYear === year) {
        kls['end-date'] = true
      }
    } else {
      if (endYear === year) {
        kls['start-date'] = true
      }

      if (startYear === year) {
        kls['end-date'] = true
      }
    }
  }

  return kls
}

const isSelectedCell = (year: number) => {
  return (
    (year === startYear.value &&
      props.date.year() < startYear.value &&
      props.date.year() > startYear.value + 9) ||
    castArray(props.date).findIndex((date) => date.year() === year) >= 0 ||
    castArray(props.parsedValue).findIndex((date) => date?.year() === year) >= 0
  )
}

const handleMouseMove = (event: MouseEvent) => {
  if (!props.rangeState.selecting) return

  const target = event.target as HTMLElement
  if (hasClass(target, 'disabled')) return
  const year = target.textContent || target.innerText

  emit('changerange', {
    selecting: true,
    endDate: dayjs().year(+year),
  })
}

const handleYearTableClick = (event: MouseEvent | KeyboardEvent) => {
  const clickTarget = event.target as HTMLDivElement
  const target = clickTarget.closest('td')
  if (target && target.textContent) {
    if (hasClass(target, 'disabled')) return
    const year = target.textContent || target.innerText
    if (props.selectionMode === 'years') {
      if (event.type === 'keydown') {
        emit('pick', castArray(props.parsedValue), false)
        return
      }
      const newValue = hasClass(target, 'current')
        ? castArray(props.parsedValue).filter((d) => d?.year() !== Number(year))
        : castArray(props.parsedValue).concat([dayjs(year)])
      emit('pick', newValue)
    } else if (props.selectionMode === 'range') {
      const newDate = dayjs().year(Number(year))
      if (!props.rangeState.selecting) {
        emit('pick', { minDate: newDate, maxDate: null })
        emit('select', true)
      } else {
        if (props.minDate && newDate >= props.minDate) {
          emit('pick', { minDate: props.minDate, maxDate: newDate })
        } else {
          emit('pick', { minDate: newDate, maxDate: props.minDate })
        }
        emit('select', false)
      }
    } else {
      emit('pick', Number(year))
    }
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
