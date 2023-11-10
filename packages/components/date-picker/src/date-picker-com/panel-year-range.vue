<template>
  <div
    class="el-picker-panel el-date-range-picker"
    :class="[
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
      },
    ]"
  >
    <div class="el-picker-panel__body-wrapper">
      <slot name="sidebar" class="el-picker-panel__sidebar" />
      <div v-if="hasShortcuts" class="el-picker-panel__sidebar">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          class="el-picker-panel__shortcut"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div class="el-picker-panel__body">
        <div
          class="el-picker-panel__content el-date-range-picker__content is-left"
        >
          <div class="el-date-range-picker__header">
            <button
              type="button"
              class="el-picker-panel__icon-btn d-arrow-left"
              @click="leftPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="el-picker-panel__icon-btn d-arrow-right"
              @click="leftNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <year-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
        <div
          class="el-picker-panel__content el-date-range-picker__content is-right"
        >
          <div class="el-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="el-picker-panel__icon-btn d-arrow-left"
              @click="rightPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              type="button"
              class="el-picker-panel__icon-btn d-arrow-right"
              @click="rightNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <year-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, inject, ref, toRef, watch } from 'vue'
import dayjs from 'dayjs'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import { useLocale } from '@element-plus/hooks'
import {
  panelYearRangeEmits,
  panelYearRangeProps,
} from '../props/panel-year-range'
import { useShortcut } from '../composables/use-shortcut'
import { useYearRangeHeader } from '../composables/use-year-range-header'
import { isValidRange } from '../utils'
// import { ROOT_PICKER_INJECTION_KEY } from '../constants'
import YearTable from './basic-year-table.vue'

import type { Dayjs } from 'dayjs'
import type { RangeState } from '../props/shared'

defineOptions({
  name: 'DatePickerYearRange',
})

const props = defineProps(panelYearRangeProps)
const emit = defineEmits(panelYearRangeEmits)

const { lang } = useLocale()
const leftDate = ref(dayjs().locale(lang.value))
const rightDate = ref(leftDate.value.add(10, 'year'))
// const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY)!
// const drpNs = useNamespace('date-range-picker')

const hasShortcuts = computed(() => !!shortcuts.length)

const handleShortcutClick = useShortcut(lang)

const {
  leftPrevYear,
  rightNextYear,
  leftNextYear,
  rightPrevYear,
  leftLabel,
  rightLabel,
  leftYear,
  rightYear,
} = useYearRangeHeader({
  unlinkPanels: toRef(props, 'unlinkPanels'),
  leftDate,
  rightDate,
})

const enableYearArrow = computed(() => {
  return props.unlinkPanels && rightYear.value > leftYear.value + 1
})

const minDate = ref<Dayjs>()
const maxDate = ref<Dayjs>()

const rangeState = ref<RangeState>({
  endDate: null,
  selecting: false,
})

const handleChangeRange = (val: RangeState) => {
  rangeState.value = val
}

type RangePickValue = {
  minDate: Dayjs
  maxDate: Dayjs
}
const handleRangePick = (val: RangePickValue, close = true) => {
  const minDate_ = val.minDate
  const maxDate_ = val.maxDate
  if (maxDate.value === maxDate_ && minDate.value === minDate_) {
    return
  }
  emit('calendar-change', [minDate_.toDate(), maxDate_ && maxDate_.toDate()])
  maxDate.value = maxDate_
  minDate.value = minDate_

  if (!close) return
  handleConfirm()
}

const handleConfirm = (visible = false) => {
  if (isValidRange([minDate.value, maxDate.value])) {
    emit('pick', [minDate.value, maxDate.value], visible)
  }
}

const onSelect = (selecting: boolean) => {
  rangeState.value.selecting = selecting
  if (!selecting) {
    rangeState.value.endDate = null
  }
}

const formatToString = (days: Dayjs[]) => {
  return days.map((day) => day.format(format))
}
const getDefaultValue = () => {
  let start: Dayjs
  if (Array.isArray(defaultValue.value)) {
    const left = dayjs(defaultValue.value[0])
    let right = dayjs(defaultValue.value[1])
    if (!props.unlinkPanels) {
      right = left.add(10, 'year')
    }
    return [left, right]
  } else if (defaultValue.value) {
    start = dayjs(defaultValue.value)
  } else {
    start = dayjs()
  }
  start = start.locale(lang.value)
  return [start, start.add(10, 'year')]
}

emit('set-picker-option', ['formatToString', formatToString])
const pickerBase = inject('EP_PICKER_BASE') as any
const { shortcuts, disabledDate, format } = pickerBase.props
const defaultValue = toRef(pickerBase.props, 'defaultValue')

watch(
  () => defaultValue.value,
  (val) => {
    if (val) {
      const defaultArr = getDefaultValue()
      leftDate.value = defaultArr[0]
      rightDate.value = defaultArr[1]
    }
  },
  { immediate: true }
)

watch(
  () => props.parsedValue,
  (newVal) => {
    if (newVal && newVal.length === 2) {
      minDate.value = newVal[0]
      maxDate.value = newVal[1]
      leftDate.value = minDate.value
      if (props.unlinkPanels && maxDate.value) {
        const minDateYear = minDate.value.year()
        const maxDateYear = maxDate.value.year()
        rightDate.value =
          minDateYear === maxDateYear
            ? maxDate.value.add(10, 'year')
            : maxDate.value
      } else {
        rightDate.value = leftDate.value.add(10, 'year')
      }
    } else {
      const defaultArr = getDefaultValue()
      minDate.value = undefined
      maxDate.value = undefined
      leftDate.value = defaultArr[0]
      rightDate.value = defaultArr[1]
    }
  },
  { immediate: true }
)
</script>
