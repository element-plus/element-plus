<template>
  <div
    :class="[
      ppNs.b(),
      drpNs.b(),
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
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
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div :class="ppNs.e('body')">
        <div v-if="showTime" :class="drpNs.e('time-header')">
          <span :class="drpNs.e('editors-wrap')">
            <span :class="drpNs.e('time-picker-wrap')">
              <el-input
                size="small"
                :disabled="rangeState.selecting"
                :placeholder="t('el.datepicker.startDate')"
                :class="drpNs.e('editor')"
                :model-value="minVisibleDate"
                :validate-event="false"
                @input="(val) => handleDateInput(val, 'min')"
                @change="(val) => handleDateChange(val, 'min')"
              />
            </span>
            <span
              v-clickoutside="handleMinTimeClose"
              :class="drpNs.e('time-picker-wrap')"
            >
              <el-input
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('el.datepicker.startTime')"
                :model-value="minVisibleTime"
                :validate-event="false"
                @focus="minTimePickerVisible = true"
                @input="(val) => handleTimeInput(val, 'min')"
                @change="(val) => handleTimeChange(val, 'min')"
              />
              <time-pick-panel
                :visible="minTimePickerVisible"
                :format="timeFormat"
                datetime-role="start"
                :parsed-value="leftDate"
                @pick="handleMinTimePick"
              />
            </span>
          </span>
          <span>
            <el-icon><arrow-right /></el-icon>
          </span>
          <span :class="drpNs.e('editors-wrap')" class="is-right">
            <span :class="drpNs.e('time-picker-wrap')">
              <el-input
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('el.datepicker.endDate')"
                :model-value="maxVisibleDate"
                :readonly="!minDate"
                :validate-event="false"
                @input="(val) => handleDateInput(val, 'max')"
                @change="(val) => handleDateChange(val, 'max')"
              />
            </span>
            <span
              v-clickoutside="handleMaxTimeClose"
              :class="drpNs.e('time-picker-wrap')"
            >
              <el-input
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('el.datepicker.endTime')"
                :model-value="maxVisibleTime"
                :readonly="!minDate"
                :validate-event="false"
                @focus="minDate && (maxTimePickerVisible = true)"
                @input="(val) => handleTimeInput(val, 'max')"
                @change="(val) => handleTimeChange(val, 'max')"
              />
              <time-pick-panel
                datetime-role="end"
                :visible="maxTimePickerVisible"
                :format="timeFormat"
                :parsed-value="rightDate"
                @pick="handleMaxTimePick"
              />
            </span>
          </span>
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-left">
          <div :class="drpNs.e('header')">
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              :aria-label="t(`el.datepicker.prevYear`)"
              class="d-arrow-left"
              @click="leftPrevYear"
            >
              <slot name="prev-year">
                <el-icon>
                  <d-arrow-left />
                </el-icon>
              </slot>
            </button>
            <button
              v-show="leftCurrentView === 'date'"
              type="button"
              :class="ppNs.e('icon-btn')"
              :aria-label="t(`el.datepicker.prevMonth`)"
              class="arrow-left"
              @click="leftPrevMonth"
            >
              <slot name="prev-month">
                <el-icon>
                  <arrow-left />
                </el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              :aria-label="t(`el.datepicker.nextYear`)"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <slot name="next-year">
                <el-icon>
                  <d-arrow-right />
                </el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels && leftCurrentView === 'date'"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              :aria-label="t(`el.datepicker.nextMonth`)"
              class="arrow-right"
              @click="leftNextMonth"
            >
              <slot name="next-month">
                <el-icon>
                  <arrow-right />
                </el-icon>
              </slot>
            </button>
            <div>
              <span
                role="button"
                :class="drpNs.e('header-label')"
                aria-live="polite"
                tabindex="0"
                @keydown.enter="showLeftPicker('year')"
                @click="showLeftPicker('year')"
              >
                {{ leftYearLabel }}
              </span>
              <span
                v-show="leftCurrentView === 'date'"
                role="button"
                aria-live="polite"
                tabindex="0"
                :class="[
                  drpNs.e('header-label'),
                  { active: leftCurrentView === 'month' },
                ]"
                @keydown.enter="showLeftPicker('month')"
                @click="showLeftPicker('month')"
              >
                {{ t(`el.datepicker.month${leftDate.month() + 1}`) }}
              </span>
            </div>
          </div>
          <date-table
            v-if="leftCurrentView === 'date'"
            ref="leftCurrentViewRef"
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            :show-week-number="showWeekNumber"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
          <year-table
            v-if="leftCurrentView === 'year'"
            ref="leftCurrentViewRef"
            selection-mode="year"
            :date="leftDate"
            :disabled-date="disabledDate"
            :parsed-value="parsedValue"
            @pick="handleLeftYearPick"
          />
          <month-table
            v-if="leftCurrentView === 'month'"
            ref="leftCurrentViewRef"
            selection-mode="month"
            :date="leftDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            @pick="handleLeftMonthPick"
          />
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-right">
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              :aria-label="t(`el.datepicker.prevYear`)"
              class="d-arrow-left"
              @click="rightPrevYear"
            >
              <slot name="prev-year">
                <el-icon>
                  <d-arrow-left />
                </el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels && rightCurrentView === 'date'"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              :aria-label="t(`el.datepicker.prevMonth`)"
              class="arrow-left"
              @click="rightPrevMonth"
            >
              <slot name="prev-month">
                <el-icon>
                  <arrow-left />
                </el-icon>
              </slot>
            </button>
            <button
              type="button"
              :aria-label="t(`el.datepicker.nextYear`)"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-right"
              @click="rightNextYear"
            >
              <slot name="next-year">
                <el-icon>
                  <d-arrow-right />
                </el-icon>
              </slot>
            </button>
            <button
              v-show="rightCurrentView === 'date'"
              type="button"
              :class="ppNs.e('icon-btn')"
              :aria-label="t(`el.datepicker.nextMonth`)"
              class="arrow-right"
              @click="rightNextMonth"
            >
              <slot name="next-month">
                <el-icon>
                  <arrow-right />
                </el-icon>
              </slot>
            </button>
            <div>
              <span
                role="button"
                :class="drpNs.e('header-label')"
                aria-live="polite"
                tabindex="0"
                @keydown.enter="showRightPicker('year')"
                @click="showRightPicker('year')"
              >
                {{ rightYearLabel }}
              </span>
              <span
                v-show="rightCurrentView === 'date'"
                role="button"
                aria-live="polite"
                tabindex="0"
                :class="[
                  drpNs.e('header-label'),
                  { active: rightCurrentView === 'month' },
                ]"
                @keydown.enter="showRightPicker('month')"
                @click="showRightPicker('month')"
              >
                {{ t(`el.datepicker.month${rightDate.month() + 1}`) }}
              </span>
            </div>
          </div>
          <date-table
            v-if="rightCurrentView === 'date'"
            ref="rightCurrentViewRef"
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            :show-week-number="showWeekNumber"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
          <year-table
            v-if="rightCurrentView === 'year'"
            ref="rightCurrentViewRef"
            selection-mode="year"
            :date="rightDate"
            :disabled-date="disabledDate"
            :parsed-value="parsedValue"
            @pick="handleRightYearPick"
          />
          <month-table
            v-if="rightCurrentView === 'month'"
            ref="rightCurrentViewRef"
            selection-mode="month"
            :date="rightDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            @pick="handleRightMonthPick"
          />
        </div>
      </div>
    </div>
    <div v-if="showTime" :class="ppNs.e('footer')">
      <el-button
        v-if="clearable"
        text
        size="small"
        :class="ppNs.e('link-btn')"
        @click="handleClear"
      >
        {{ t('el.datepicker.clear') }}
      </el-button>
      <el-button
        plain
        size="small"
        :class="ppNs.e('link-btn')"
        :disabled="btnDisabled"
        @click="handleRangeConfirm(false)"
      >
        {{ t('el.datepicker.confirm') }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRef, unref, watch } from 'vue'
import dayjs from 'dayjs'
import { ClickOutside as vClickoutside } from '@element-plus/directives'
import { isArray } from '@element-plus/utils'
import { useLocale } from '@element-plus/hooks'
import ElButton from '@element-plus/components/button'
import ElInput from '@element-plus/components/input'
import {
  PICKER_BASE_INJECTION_KEY,
  TimePickPanel,
  extractDateFormat,
  extractTimeFormat,
} from '@element-plus/components/time-picker'
import ElIcon from '@element-plus/components/icon'
import {
  ArrowLeft,
  ArrowRight,
  DArrowLeft,
  DArrowRight,
} from '@element-plus/icons-vue'
import { panelDateRangeProps } from '../props/panel-date-range'
import { useRangePicker } from '../composables/use-range-picker'
import {
  correctlyParseUserInput,
  getDefaultValue,
  isValidRange,
} from '../utils'
import { usePanelDateRange } from '../composables/use-panel-date-range'
import { ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY } from '../constants'
import YearTable from './basic-year-table.vue'
import MonthTable from './basic-month-table.vue'
import DateTable from './basic-date-table.vue'

import type { Dayjs } from 'dayjs'

type ChangeType = 'min' | 'max'
type UserInput = {
  min: string | null
  max: string | null
}

const props = defineProps(panelDateRangeProps)
const emit = defineEmits([
  'pick',
  'set-picker-option',
  'calendar-change',
  'panel-change',
])

const unit = 'month'
// FIXME: fix the type for ep picker
const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
const isDefaultFormat = inject(
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY
) as any
const { disabledDate, cellClassName, defaultTime, clearable } = pickerBase.props
const format = toRef(pickerBase.props, 'format')
const shortcuts = toRef(pickerBase.props, 'shortcuts')
const defaultValue = toRef(pickerBase.props, 'defaultValue')
const { lang } = useLocale()
const leftDate = ref<Dayjs>(dayjs().locale(lang.value))
const rightDate = ref<Dayjs>(dayjs().locale(lang.value).add(1, unit))

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
  onReset,
  t,
} = useRangePicker(props, {
  defaultValue,
  defaultTime,
  leftDate,
  rightDate,
  unit,
  onParsedValueChanged,
})

watch(
  () => props.visible,
  (visible) => {
    if (!visible && rangeState.value.selecting) {
      onReset(props.parsedValue)
      onSelect(false)
    }
  }
)

const dateUserInput = ref<UserInput>({
  min: null,
  max: null,
})

const timeUserInput = ref<UserInput>({
  min: null,
  max: null,
})

const {
  leftCurrentView,
  rightCurrentView,
  leftCurrentViewRef,
  rightCurrentViewRef,
  leftYear,
  rightYear,
  leftMonth,
  rightMonth,
  leftYearLabel,
  rightYearLabel,
  showLeftPicker,
  showRightPicker,
  handleLeftYearPick,
  handleRightYearPick,
  handleLeftMonthPick,
  handleRightMonthPick,
  handlePanelChange,
  adjustDateByView,
} = usePanelDateRange(props, emit, leftDate, rightDate)

const hasShortcuts = computed(() => !!shortcuts.value.length)

const minVisibleDate = computed(() => {
  if (dateUserInput.value.min !== null) return dateUserInput.value.min
  if (minDate.value) return minDate.value.format(dateFormat.value)
  return ''
})

const maxVisibleDate = computed(() => {
  if (dateUserInput.value.max !== null) return dateUserInput.value.max
  if (maxDate.value || minDate.value)
    return (maxDate.value || minDate.value)!.format(dateFormat.value)
  return ''
})

const minVisibleTime = computed(() => {
  if (timeUserInput.value.min !== null) return timeUserInput.value.min
  if (minDate.value) return minDate.value.format(timeFormat.value)
  return ''
})

const maxVisibleTime = computed(() => {
  if (timeUserInput.value.max !== null) return timeUserInput.value.max
  if (maxDate.value || minDate.value)
    return (maxDate.value || minDate.value)!.format(timeFormat.value)
  return ''
})

const timeFormat = computed(() => {
  return props.timeFormat || extractTimeFormat(format.value)
})

const dateFormat = computed(() => {
  return props.dateFormat || extractDateFormat(format.value)
})

const isValidValue = (date: [Dayjs, Dayjs]) => {
  return (
    isValidRange(date) &&
    (disabledDate
      ? !disabledDate(date[0].toDate()) && !disabledDate(date[1].toDate())
      : true)
  )
}

const leftPrevYear = () => {
  leftDate.value = adjustDateByView(
    leftCurrentView.value,
    leftDate.value,
    false
  )

  if (!props.unlinkPanels) {
    rightDate.value = leftDate.value.add(1, 'month')
  }
  handlePanelChange('year')
}

const leftPrevMonth = () => {
  leftDate.value = leftDate.value.subtract(1, 'month')
  if (!props.unlinkPanels) {
    rightDate.value = leftDate.value.add(1, 'month')
  }
  handlePanelChange('month')
}

const rightNextYear = () => {
  if (!props.unlinkPanels) {
    leftDate.value = adjustDateByView(
      rightCurrentView.value,
      leftDate.value,
      true
    )

    rightDate.value = leftDate.value.add(1, 'month')
  } else {
    rightDate.value = adjustDateByView(
      rightCurrentView.value,
      rightDate.value,
      true
    )
  }
  handlePanelChange('year')
}

const rightNextMonth = () => {
  if (!props.unlinkPanels) {
    leftDate.value = leftDate.value.add(1, 'month')
    rightDate.value = leftDate.value.add(1, 'month')
  } else {
    rightDate.value = rightDate.value.add(1, 'month')
  }
  handlePanelChange('month')
}

const leftNextYear = () => {
  leftDate.value = adjustDateByView(leftCurrentView.value, leftDate.value, true)

  handlePanelChange('year')
}

const leftNextMonth = () => {
  leftDate.value = leftDate.value.add(1, 'month')
  handlePanelChange('month')
}

const rightPrevYear = () => {
  rightDate.value = adjustDateByView(
    rightCurrentView.value,
    rightDate.value,
    false
  )

  handlePanelChange('year')
}

const rightPrevMonth = () => {
  rightDate.value = rightDate.value.subtract(1, 'month')
  handlePanelChange('month')
}

const enableMonthArrow = computed(() => {
  const nextMonth = (leftMonth.value + 1) % 12
  const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
  return (
    props.unlinkPanels &&
    new Date(leftYear.value + yearOffset, nextMonth) <
      new Date(rightYear.value, rightMonth.value)
  )
})

const enableYearArrow = computed(() => {
  return (
    props.unlinkPanels &&
    rightYear.value * 12 +
      rightMonth.value -
      (leftYear.value * 12 + leftMonth.value + 1) >=
      12
  )
})

const btnDisabled = computed(() => {
  return !(
    minDate.value &&
    maxDate.value &&
    !rangeState.value.selecting &&
    isValidRange([minDate.value, maxDate.value])
  )
})

const showTime = computed(
  () => props.type === 'datetime' || props.type === 'datetimerange'
)

const formatEmit = (emitDayjs: Dayjs | null, index?: number) => {
  if (!emitDayjs) return
  if (defaultTime) {
    const defaultTimeD = dayjs(
      defaultTime[index as number] || defaultTime
    ).locale(lang.value)
    return defaultTimeD
      .year(emitDayjs.year())
      .month(emitDayjs.month())
      .date(emitDayjs.date())
  }
  return emitDayjs
}

const handleRangePick = (
  val: {
    minDate: Dayjs
    maxDate: Dayjs | null
  },
  close = true
) => {
  const min_ = val.minDate
  const max_ = val.maxDate
  const minDate_ = formatEmit(min_, 0)
  const maxDate_ = formatEmit(max_, 1)

  if (maxDate.value === maxDate_ && minDate.value === minDate_) {
    return
  }
  emit('calendar-change', [min_.toDate(), max_ && max_.toDate()])
  maxDate.value = maxDate_
  minDate.value = minDate_

  if (!close || showTime.value) return
  handleRangeConfirm()
}

const minTimePickerVisible = ref(false)
const maxTimePickerVisible = ref(false)

const handleMinTimeClose = () => {
  minTimePickerVisible.value = false
}

const handleMaxTimeClose = () => {
  maxTimePickerVisible.value = false
}

const handleDateInput = (value: string | null, type: ChangeType) => {
  dateUserInput.value[type] = value
  const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value)
  if (parsedValueD.isValid()) {
    if (disabledDate && disabledDate(parsedValueD.toDate())) {
      return
    }
    if (type === 'min') {
      leftDate.value = parsedValueD
      minDate.value = (minDate.value || leftDate.value)
        .year(parsedValueD.year())
        .month(parsedValueD.month())
        .date(parsedValueD.date())
      if (
        !props.unlinkPanels &&
        (!maxDate.value || maxDate.value.isBefore(minDate.value))
      ) {
        rightDate.value = parsedValueD.add(1, 'month')
        maxDate.value = minDate.value.add(1, 'month')
      }
    } else {
      rightDate.value = parsedValueD
      maxDate.value = (maxDate.value || rightDate.value)
        .year(parsedValueD.year())
        .month(parsedValueD.month())
        .date(parsedValueD.date())
      if (
        !props.unlinkPanels &&
        (!minDate.value || minDate.value.isAfter(maxDate.value))
      ) {
        leftDate.value = parsedValueD.subtract(1, 'month')
        minDate.value = maxDate.value.subtract(1, 'month')
      }
    }
  }
}

const handleDateChange = (_: unknown, type: ChangeType) => {
  dateUserInput.value[type] = null
}

const handleTimeInput = (value: string | null, type: ChangeType) => {
  timeUserInput.value[type] = value
  const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value)

  if (parsedValueD.isValid()) {
    if (type === 'min') {
      minTimePickerVisible.value = true
      minDate.value = (minDate.value || leftDate.value)
        .hour(parsedValueD.hour())
        .minute(parsedValueD.minute())
        .second(parsedValueD.second())
    } else {
      maxTimePickerVisible.value = true
      maxDate.value = (maxDate.value || rightDate.value)
        .hour(parsedValueD.hour())
        .minute(parsedValueD.minute())
        .second(parsedValueD.second())
      rightDate.value = maxDate.value
    }
  }
}

const handleTimeChange = (_value: string | null, type: ChangeType) => {
  timeUserInput.value[type] = null
  if (type === 'min') {
    leftDate.value = minDate.value!
    minTimePickerVisible.value = false
    if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
      maxDate.value = minDate.value
    }
  } else {
    rightDate.value = maxDate.value!
    maxTimePickerVisible.value = false
    if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
      minDate.value = maxDate.value
    }
  }
}

const handleMinTimePick = (value: Dayjs, visible: boolean, first: boolean) => {
  if (timeUserInput.value.min) return
  if (value) {
    leftDate.value = value
    minDate.value = (minDate.value || leftDate.value)
      .hour(value.hour())
      .minute(value.minute())
      .second(value.second())
  }

  if (!first) {
    minTimePickerVisible.value = visible
  }

  if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
    maxDate.value = minDate.value
    rightDate.value = value
  }
}

const handleMaxTimePick = (
  value: Dayjs | null,
  visible: boolean,
  first: boolean
) => {
  if (timeUserInput.value.max) return
  if (value) {
    rightDate.value = value
    maxDate.value = (maxDate.value || rightDate.value)
      .hour(value.hour())
      .minute(value.minute())
      .second(value.second())
  }

  if (!first) {
    maxTimePickerVisible.value = visible
  }

  if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
    minDate.value = maxDate.value
  }
}

const handleClear = () => {
  leftDate.value = getDefaultValue(unref(defaultValue), {
    lang: unref(lang),
    unit: 'month',
    unlinkPanels: props.unlinkPanels,
  })[0]
  rightDate.value = leftDate.value.add(1, 'month')
  maxDate.value = undefined
  minDate.value = undefined
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

function onParsedValueChanged(
  minDate: Dayjs | undefined,
  maxDate: Dayjs | undefined
) {
  if (props.unlinkPanels && maxDate) {
    const minDateYear = minDate?.year() || 0
    const minDateMonth = minDate?.month() || 0
    const maxDateYear = maxDate.year()
    const maxDateMonth = maxDate.month()
    rightDate.value =
      minDateYear === maxDateYear && minDateMonth === maxDateMonth
        ? maxDate.add(1, unit)
        : maxDate
  } else {
    rightDate.value = leftDate.value.add(1, unit)
    if (maxDate) {
      rightDate.value = rightDate.value
        .hour(maxDate.hour())
        .minute(maxDate.minute())
        .second(maxDate.second())
    }
  }
}

emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['handleClear', handleClear])
</script>
