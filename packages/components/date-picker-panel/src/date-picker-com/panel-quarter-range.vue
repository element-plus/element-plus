<template>
  <div
    :class="[
      ppNs.b(),
      drpNs.b(),
      ppNs.is('border', border),
      ppNs.is('disabled', quarterRangeDisabled),
      {
        'has-sidebar': Boolean($slots.sidebar) || hasShortcuts,
        'single-panel': singlePanel,
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
          :disabled="quarterRangeDisabled || !isShortcutEnabled(shortcut)"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div :class="ppNs.e('body')">
        <div
          :class="[
            ppNs.e('content'),
            drpNs.e('content'),
            drpNs.is('left', !singlePanel),
          ]"
        >
          <div :class="drpNs.e('header')">
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-left"
              :disabled="quarterRangeDisabled"
              @click="leftPrevYear"
            >
              <slot name="prev-year">
                <el-icon><d-arrow-left /></el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels || singlePanel"
              type="button"
              :disabled="!enableYearArrow || quarterRangeDisabled"
              :class="[
                ppNs.e('icon-btn'),
                ppNs.is('disabled', !enableYearArrow || quarterRangeDisabled),
              ]"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <quarter-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :disabled="quarterRangeDisabled"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
        <div
          v-if="!singlePanel"
          :class="[ppNs.e('content'), drpNs.e('content')]"
          class="is-right"
        >
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow || quarterRangeDisabled"
              :class="[
                ppNs.e('icon-btn'),
                ppNs.is('disabled', !enableYearArrow || quarterRangeDisabled),
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
              :disabled="quarterRangeDisabled"
              @click="rightNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <quarter-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :disabled="quarterRangeDisabled"
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
import {
  computed,
  inject,
  ref,
  toRef,
  unref,
  useAttrs,
  useSlots,
  watch,
} from 'vue'
import dayjs from 'dayjs'
import ElIcon from '@element-plus/components/icon'
import { useLocale } from '@element-plus/hooks'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { PICKER_BASE_INJECTION_KEY } from '@element-plus/components/time-picker'
import { isArray, isFunction } from '@element-plus/utils'
import {
  correctlyParseUserInput,
  getDefaultValue,
  isQuarterFullyDisabled,
  isValidRange,
  normalizeQuarterDate,
} from '../utils'
import {
  panelQuarterRangeEmits,
  panelQuarterRangeProps,
} from '../props/panel-quarter-range'
import { useMonthRangeHeader } from '../composables/use-month-range-header'
import { useRangePicker } from '../composables/use-range-picker'
import { ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY } from '../constants'
import QuarterTable from './basic-quarter-table.vue'
import { useFormDisabled } from '@element-plus/components/form'

import type { Dayjs } from 'dayjs'
import type { Shortcut } from '../composables/use-shortcut'

type RangePickValue = {
  minDate: Dayjs
  maxDate?: Dayjs
}

defineOptions({
  name: 'DatePickerQuarterRange',
})

const props = defineProps(panelQuarterRangeProps)
const emit = defineEmits(panelQuarterRangeEmits)
const unit = 'year'

const { lang } = useLocale()
const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
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
  return (
    props.singlePanel ||
    (props.unlinkPanels && rightYear.value > leftYear.value + 1)
  )
})

const handleRangePick = (val: RangePickValue, close = true) => {
  const minDate_ = normalizeQuarterDate(val.minDate, lang.value, disabledDate)
  const maxDate_ = val.maxDate
    ? normalizeQuarterDate(val.maxDate, lang.value, disabledDate)
    : val.maxDate
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

const normalizeQuarterInput = (value: Dayjs) =>
  normalizeQuarterDate(value, lang.value, disabledDate)

const parseUserInput = (value: Dayjs | Dayjs[]) => {
  const parsed = correctlyParseUserInput(
    value,
    format.value,
    lang.value,
    isDefaultFormat
  )

  if (isArray(parsed)) {
    return parsed.map((item) => normalizeQuarterInput(item))
  }

  return normalizeQuarterInput(parsed)
}

const isValidValue = (date: [Dayjs, Dayjs]) => {
  return (
    isValidRange(date) &&
    !isQuarterFullyDisabled(date[0], lang.value, disabledDate) &&
    !isQuarterFullyDisabled(date[1], lang.value, disabledDate) &&
    (disabledDate
      ? !disabledDate(date[0].toDate()) && !disabledDate(date[1].toDate())
      : true)
  )
}

const attrs = useAttrs()
const slots = useSlots()

const resolveShortcutRange = (shortcut: Shortcut): [Dayjs, Dayjs] | null => {
  const values = isFunction(shortcut.value) ? shortcut.value() : shortcut.value
  if (!values) return null
  return [
    normalizeQuarterDate(
      dayjs(values[0]).locale(lang.value),
      lang.value,
      disabledDate
    ),
    normalizeQuarterDate(
      dayjs(values[1]).locale(lang.value),
      lang.value,
      disabledDate
    ),
  ]
}

const isShortcutEnabled = (shortcut: Shortcut) => {
  const range = resolveShortcutRange(shortcut)
  if (!range) return true
  return isValidValue(range)
}

const handleShortcutClick = (shortcut: Shortcut) => {
  const range = resolveShortcutRange(shortcut)
  if (range) {
    if (isValidValue(range)) {
      emit('pick', range)
    }
    return
  }
  if (shortcut.onClick) {
    shortcut.onClick({
      attrs,
      slots,
      emit,
    })
  }
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

const quarterRangeDisabled = useFormDisabled()

watch(
  () => props.visible,
  (visible) => {
    if (!visible && rangeState.value.selecting) {
      parseValue(props.parsedValue)
      onSelect(false)
    }
  }
)

emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['handleClear', handleClear])
</script>
