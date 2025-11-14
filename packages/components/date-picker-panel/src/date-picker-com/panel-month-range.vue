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
                ppNs.is('disabled', !enableYearArrow),
              ]"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
            </button>
            <div>
              <span
                role="button"
                aria-live="polite"
                tabindex="0"
                :class="[
                  drpNs.e('header-label'),
                  { active: leftCurrentView === 'year' },
                ]"
                @keydown.enter="toggleLeftYearPicker"
                @click="toggleLeftYearPicker"
              >
                {{ leftHeaderLabel }}
              </span>
            </div>
          </div>
          <year-table
            v-if="leftCurrentView === 'year'"
            selection-mode="year"
            :date="leftDate"
            :disabled-date="disabledDate"
            :parsed-value="parsedRangeValue"
            :disabled="disabled"
            @pick="handleLeftYearPick"
          />
          <month-table
            v-else
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
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-right">
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow || disabled"
              :class="[
                ppNs.e('icon-btn'),
                ppNs.is('disabled', !enableYearArrow),
              ]"
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
            <div>
              <span
                role="button"
                aria-live="polite"
                tabindex="0"
                :class="[
                  drpNs.e('header-label'),
                  { active: rightCurrentView === 'year' },
                ]"
                @keydown.enter="toggleRightYearPicker"
                @click="toggleRightYearPicker"
              >
                {{ rightHeaderLabel }}
              </span>
            </div>
          </div>
          <year-table
            v-if="rightCurrentView === 'year'"
            selection-mode="year"
            :date="rightDate"
            :disabled-date="disabledDate"
            :parsed-value="parsedRangeValue"
            :disabled="disabled"
            @pick="handleRightYearPick"
          />
          <month-table
            v-else
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRef, unref, watch } from 'vue'
import dayjs from 'dayjs'
import ElIcon from '@element-plus/components/icon'
import { useLocale } from '@element-plus/hooks'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { PICKER_BASE_INJECTION_KEY } from '@element-plus/components/time-picker'
import {
  correctlyParseUserInput,
  getDefaultValue,
  getValidDateOfYear,
  isValidRange,
} from '../utils'
import {
  panelMonthRangeEmits,
  panelMonthRangeProps,
} from '../props/panel-month-range'
import { useMonthRangeHeader } from '../composables/use-month-range-header'
import { useRangePicker } from '../composables/use-range-picker'
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

const { lang, t } = useLocale()
const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
const isDefaultFormat = inject(
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY,
  undefined
) as any
const { shortcuts, disabledDate, cellClassName } = pickerBase.props
const format = toRef(pickerBase.props, 'format')
const defaultValue = toRef(pickerBase.props, 'defaultValue')
const parsedRangeValue = toRef(props, 'parsedValue')
const leftDate = ref(dayjs().locale(lang.value))
const rightDate = ref(dayjs().locale(lang.value).add(1, unit))

const leftCurrentView = ref<'month' | 'year'>('month')
const rightCurrentView = ref<'month' | 'year'>('month')

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

const enableYearArrow = computed(() => {
  return props.unlinkPanels && rightYear.value > leftYear.value + 1
})

const buildYearRangeLabel = (year: number) => {
  const startYear = Math.floor(year / 10) * 10
  const endYear = startYear + 9
  const yearTranslation = t('el.datepicker.year')
  return yearTranslation
    ? `${startYear} ${yearTranslation} - ${endYear} ${yearTranslation}`
    : `${startYear} - ${endYear}`
}

const leftHeaderLabel = computed(() =>
  leftCurrentView.value === 'year'
    ? buildYearRangeLabel(leftYear.value)
    : leftLabel.value
)

const rightHeaderLabel = computed(() =>
  rightCurrentView.value === 'year'
    ? buildYearRangeLabel(rightYear.value)
    : rightLabel.value
)

const toggleLeftYearPicker = () => {
  if (props.disabled) return
  leftCurrentView.value = leftCurrentView.value === 'year' ? 'month' : 'year'
}

const toggleRightYearPicker = () => {
  if (props.disabled) return
  rightCurrentView.value = rightCurrentView.value === 'year' ? 'month' : 'year'
}

const updatePanelYear = (panel: 'left' | 'right', year: number) => {
  if (props.disabled) return
  const target = panel === 'left' ? leftDate : rightDate
  const sibling = panel === 'left' ? rightDate : leftDate
  const nextValue = getValidDateOfYear(
    target.value.year(year),
    lang.value,
    disabledDate
  )
  target.value = nextValue

  if (!props.unlinkPanels) {
    sibling.value =
      panel === 'left'
        ? target.value.add(1, 'year')
        : target.value.subtract(1, 'year')
  }
}

const handleLeftYearPick = (year: number) => {
  updatePanelYear('left', year)
  leftCurrentView.value = 'month'
}

const handleRightYearPick = (year: number) => {
  updatePanelYear('right', year)
  rightCurrentView.value = 'month'
}

type RangePickValue = {
  minDate: Dayjs
  maxDate: Dayjs
}

const handleRangePick = (val: RangePickValue, close = true) => {
  // const defaultTime = props.defaultTime || []
  // const minDate_ = modifyWithTimeString(val.minDate, defaultTime[0])
  // const maxDate_ = modifyWithTimeString(val.maxDate, defaultTime[1])
  // todo
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
  let valueOnClear = null
  if (pickerBase?.emptyValues) {
    valueOnClear = pickerBase.emptyValues.valueOnClear.value
  }
  leftDate.value = getDefaultValue(unref(defaultValue), {
    lang: unref(lang),
    unit: 'year',
    unlinkPanels: props.unlinkPanels,
  })[0]
  rightDate.value = leftDate.value.add(1, 'year')
  emit('pick', valueOnClear)
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
    if (!visible) {
      leftCurrentView.value = 'month'
      rightCurrentView.value = 'month'
    }
  }
)

emit('set-picker-option', ['isValidValue', isValidRange])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['handleClear', handleClear])
</script>
