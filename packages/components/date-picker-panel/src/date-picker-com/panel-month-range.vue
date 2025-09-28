<template>
  <div
    :class="[
      ppNs.b(),
      drpNs.b(),
      ppNs.is('border', border),
      ppNs.is('disabled', disabled),
      {
        'has-sidebar': Boolean($slots.sidebar) || hasShortcuts,
      },
    ]"
  >
    <div :class="ppNs.e('body-wrapper')">
      <slot name="sidebar" :class="ppNs.e('sidebar')" />
      <div v-if="hasShortcuts" :class="ppNs.e('sidebar')">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          :class="ppNs.e('shortcut')"
          :disabled="disabled"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div :class="ppNs.e('body')">
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-left">
          <div :class="drpNs.e('header')">
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-left"
              :disabled="disabled"
              @click="leftPrevYear"
            >
              <slot name="prev-year">
                <el-icon><d-arrow-left /></el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow || disabled"
              :class="[
                ppNs.e('icon-btn'),
                { [ppNs.is('disabled')]: !enableYearArrow },
              ]"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
            </button>
            <span
              role="button"
              :class="dpNs.e('header-label')"
              aria-live="polite"
              tabindex="0"
              @keydown.enter="showLeftPicker('year')"
              @click="showLeftPicker('year')"
            >
              {{ leftLabel }}
            </span>
          </div>
          <month-table
            v-if="leftCurrentView === 'month'"
            ref="leftCurrentViewRef"
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :disabled="disabled"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
          <year-table
            v-if="leftCurrentView === 'year'"
            ref="leftCurrentViewRef"
            selection-mode="year"
            :date="leftDate"
            :parsed-value="leftDate"
            :disabled-date="disabledDate"
            :disabled="disabled"
            :cell-class-name="cellClassName"
            @pick="handleLeftYearPick"
          />
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-right">
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow || disabled"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              class="d-arrow-left"
              @click="rightPrevYear"
            >
              <slot name="prev-year">
                <el-icon><d-arrow-left /></el-icon>
              </slot>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-right"
              :disabled="disabled"
              @click="rightNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
            </button>
            <span
              role="button"
              :class="dpNs.e('header-label')"
              aria-live="polite"
              tabindex="0"
              @keydown.enter="showRightPicker('year')"
              @click="showRightPicker('year')"
            >
              {{ rightLabel }}
            </span>
          </div>
          <month-table
            v-if="rightCurrentView === 'month'"
            ref="rightCurrentViewRef"
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :disabled="disabled"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
          <year-table
            v-if="rightCurrentView === 'year'"
            ref="rightCurrentViewRef"
            selection-mode="year"
            :date="rightDate"
            :parsed-value="rightDate"
            :disabled-date="disabledDate"
            :disabled="disabled"
            :cell-class-name="cellClassName"
            @pick="handleRightYearPick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRef, unref, watch } from 'vue'
import dayjs from 'dayjs'
import ElIcon from '@element-plus/components/icon'
import { isArray } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { PICKER_BASE_INJECTION_KEY } from '@element-plus/components/time-picker'
import {
  correctlyParseUserInput,
  getDefaultValue,
  isValidRange,
} from '../utils'
import {
  panelMonthRangeEmits,
  panelMonthRangeProps,
} from '../props/panel-month-range'
import { useMonthRangeHeader } from '../composables/use-month-range-header'
import { useRangePicker } from '../composables/use-range-picker'
import { usePanelDateRange } from '../composables/use-panel-date-range'
import { ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY } from '../constants'
import MonthTable from './basic-month-table.vue'
import YearTable from './basic-year-table.vue'

import type { Dayjs } from 'dayjs'

defineOptions({
  name: 'DatePickerMonthRange',
})

const props = defineProps(panelMonthRangeProps)
const emit = defineEmits(panelMonthRangeEmits)
const unit = 'year'

const { lang } = useLocale()
const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
const dpNs = useNamespace('date-picker')
const isDefaultFormat = inject(
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY,
  undefined
) as any
const { shortcuts, disabledDate, cellClassName } = pickerBase.props
const format = toRef(pickerBase.props, 'format')
const defaultValue = toRef(pickerBase.props, 'defaultValue')
const leftDate = ref(dayjs().locale(lang.value))
const rightDate = ref(dayjs().locale(lang.value).add(1, unit))

const {
  minDate,
  maxDate,
  rangeState,
  ppNs,
  drpNs,

  handleChangeRange,
  handleRangeConfirm,
  handleShortcutClick,
  onSelect,
  parseValue,
} = useRangePicker(props, {
  defaultValue,
  leftDate,
  rightDate,
  unit,
  sortDates,
})

const hasShortcuts = computed(() => !!shortcuts.length)

const {
  leftPrevYear,
  rightNextYear,
  leftNextYear,
  rightPrevYear,
  leftLabel,
  rightLabel,
  leftYear,
  rightYear,
} = useMonthRangeHeader({
  unlinkPanels: toRef(props, 'unlinkPanels'),
  leftDate,
  rightDate,
})

const panelProps = {
  ...props,
  type: 'monthrange' as const,
  showNow: true,
  showWeekNumber: false,
}
const {
  leftCurrentView,
  rightCurrentView,
  leftCurrentViewRef,
  rightCurrentViewRef,
  showLeftPicker,
  showRightPicker,
  handleLeftYearPick,
  handleRightYearPick,
} = usePanelDateRange(panelProps, emit, leftDate, rightDate)

leftCurrentView.value = 'month'
rightCurrentView.value = 'month'

const enableYearArrow = computed(() => {
  return props.unlinkPanels && rightYear.value > leftYear.value + 1
})

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
  handleRangeConfirm()
}

const handleClear = () => {
  leftDate.value = getDefaultValue(unref(defaultValue), {
    lang: unref(lang),
    unit: 'year',
    unlinkPanels: props.unlinkPanels,
  })[0]
  rightDate.value = leftDate.value.add(1, 'year')
  emit('pick', null)
}

const formatToString = (value: Dayjs | Dayjs[]) => {
  return isArray(value)
    ? value.map((_) => _.format(format.value))
    : value.format(format.value)
}

const parseUserInput = (value: Dayjs | Dayjs[]) => {
  return correctlyParseUserInput(
    value,
    format.value,
    lang.value,
    isDefaultFormat
  )
}

function sortDates(minDate: Dayjs | undefined, maxDate: Dayjs | undefined) {
  if (props.unlinkPanels && maxDate) {
    const minDateYear = minDate?.year() || 0
    const maxDateYear = maxDate.year()
    rightDate.value =
      minDateYear === maxDateYear ? maxDate.add(1, unit) : maxDate
  } else {
    rightDate.value = leftDate.value.add(1, unit)
  }
}

watch(
  () => props.visible,
  (visible) => {
    if (!visible && rangeState.value.selecting) {
      parseValue(props.parsedValue)
      onSelect(false)
    }
  }
)

emit('set-picker-option', ['isValidValue', isValidRange])
emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['handleClear', handleClear])
</script>
