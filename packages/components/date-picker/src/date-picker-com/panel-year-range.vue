<template>
  <div :class="panelKls">
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
        <div :class="leftPanelKls.content">
          <div :class="drpNs.e('header')">
            <button
              type="button"
              :class="leftPanelKls.arrowLeftBtn"
              @click="leftPrevYear"
            >
              <slot name="prev-year">
                <el-icon><d-arrow-left /></el-icon>
              </slot>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="leftPanelKls.arrowRightBtn"
              @click="leftNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
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
        <div :class="rightPanelKls.content">
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="rightPanelKls.arrowLeftBtn"
              @click="rightPrevYear"
            >
              <slot name="prev-year">
                <el-icon><d-arrow-left /></el-icon>
              </slot>
            </button>
            <button
              type="button"
              :class="rightPanelKls.arrowRightBtn"
              @click="rightNextYear"
            >
              <slot name="next-year">
                <el-icon><d-arrow-right /></el-icon>
              </slot>
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
import { computed, inject, ref, toRef, unref, useSlots, watch } from 'vue'
import dayjs from 'dayjs'
import { isArray } from '@element-plus/utils'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import { useLocale } from '@element-plus/hooks'
import { PICKER_BASE_INJECTION_KEY } from '@element-plus/components/time-picker'
import {
  panelYearRangeEmits,
  panelYearRangeProps,
} from '../props/panel-year-range'
import { useYearRangeHeader } from '../composables/use-year-range-header'
import { useRangePicker } from '../composables/use-range-picker'
import {
  correctlyParseUserInput,
  getDefaultValue,
  isValidRange,
} from '../utils'
import { ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY } from '../constants'
import YearTable from './basic-year-table.vue'

import type { Dayjs } from 'dayjs'

defineOptions({
  name: 'DatePickerYearRange',
})

const props = defineProps(panelYearRangeProps)
const emit = defineEmits(panelYearRangeEmits)
const step = 10
const unit = 'year'

const { lang } = useLocale()
const leftDate = ref(dayjs().locale(lang.value))
const rightDate = ref(dayjs().locale(lang.value).add(step, unit))
const isDefaultFormat = inject(
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY
) as any
const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
const { shortcuts, disabledDate } = pickerBase.props
const format = toRef(pickerBase.props, 'format')
const defaultValue = toRef(pickerBase.props, 'defaultValue')

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
} = useRangePicker(props, {
  defaultValue,
  leftDate,
  rightDate,
  step,
  unit,
  onParsedValueChanged,
})

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

const hasShortcuts = computed(() => !!shortcuts.length)

const panelKls = computed(() => [
  ppNs.b(),
  drpNs.b(),
  {
    'has-sidebar': Boolean(useSlots().sidebar) || hasShortcuts.value,
  },
])

const leftPanelKls = computed(() => {
  return {
    content: [ppNs.e('content'), drpNs.e('content'), 'is-left'],
    arrowLeftBtn: [ppNs.e('icon-btn'), 'd-arrow-left'],
    arrowRightBtn: [
      ppNs.e('icon-btn'),
      { [ppNs.is('disabled')]: !enableYearArrow.value },
      'd-arrow-right',
    ],
  }
})

const rightPanelKls = computed(() => {
  return {
    content: [ppNs.e('content'), drpNs.e('content'), 'is-right'],
    arrowLeftBtn: [
      ppNs.e('icon-btn'),
      { 'is-disabled': !enableYearArrow.value },
      'd-arrow-left',
    ],
    arrowRightBtn: [ppNs.e('icon-btn'), 'd-arrow-right'],
  }
})

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

const parseUserInput = (value: Dayjs | Dayjs[]) => {
  return correctlyParseUserInput(
    value,
    format.value,
    lang.value,
    isDefaultFormat
  )
}

const formatToString = (value: Dayjs[] | Dayjs) => {
  return isArray(value)
    ? value.map((day) => day.format(format.value))
    : value.format(format.value)
}

const isValidValue = (date: [Dayjs, Dayjs]) => {
  return (
    isValidRange(date) &&
    (disabledDate
      ? !disabledDate(date[0].toDate()) && !disabledDate(date[1].toDate())
      : true)
  )
}

const handleClear = () => {
  const defaultArr = getDefaultValue(unref(defaultValue), {
    lang: unref(lang),
    step,
    unit,
    unlinkPanels: props.unlinkPanels,
  })
  leftDate.value = defaultArr[0]
  rightDate.value = defaultArr[1]
  emit('pick', null)
}

function onParsedValueChanged(
  minDate: Dayjs | undefined,
  maxDate: Dayjs | undefined
) {
  if (props.unlinkPanels && maxDate) {
    const minDateYear = minDate?.year() || 0
    const maxDateYear = maxDate.year()

    rightDate.value =
      minDateYear + step > maxDateYear ? maxDate.add(step, unit) : maxDate
  } else {
    rightDate.value = leftDate.value.add(step, unit)
  }
}

watch(
  () => props.visible,
  (visible) => {
    if (!visible && rangeState.value.selecting) {
      onReset(props.parsedValue)
      onSelect(false)
    }
  }
)

emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['handleClear', handleClear])
</script>
