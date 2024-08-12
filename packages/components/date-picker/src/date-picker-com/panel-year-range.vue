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
import { computed, inject, ref, toRef, useSlots, watch } from 'vue'
import dayjs from 'dayjs'
import { isArray } from '@element-plus/utils'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import { useLocale, useNamespace } from '@element-plus/hooks'
import {
  panelYearRangeEmits,
  panelYearRangeProps,
} from '../props/panel-year-range'
import { useShortcut } from '../composables/use-shortcut'
import { useYearRangeHeader } from '../composables/use-year-range-header'
import { isValidRange } from '../utils'
import { ROOT_PICKER_INJECTION_KEY } from '../constants'
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
const { pickerNs: ppNs } = inject(ROOT_PICKER_INJECTION_KEY)!
const drpNs = useNamespace('date-range-picker')

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

const pickerBase = inject('EP_PICKER_BASE') as any
const { shortcuts, disabledDate } = pickerBase.props
const format = toRef(pickerBase.props, 'format')
const defaultValue = toRef(pickerBase.props, 'defaultValue')
const unit = 'year'

const getDefaultValue = () => {
  let start: Dayjs
  if (isArray(defaultValue.value)) {
    const left = dayjs(defaultValue.value[0])
    let right = dayjs(defaultValue.value[1])
    if (!props.unlinkPanels) {
      right = left.add(10, unit)
    }
    return [left, right]
  } else if (defaultValue.value) {
    start = dayjs(defaultValue.value)
  } else {
    start = dayjs()
  }
  start = start.locale(lang.value)
  return [start, start.add(10, unit)]
}

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

const parseUserInput = (value: Dayjs | Dayjs[]) => {
  return isArray(value)
    ? value.map((_) => dayjs(_, format.value).locale(lang.value))
    : dayjs(value, format.value).locale(lang.value)
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
  const defaultArr = getDefaultValue()
  leftDate.value = defaultArr[0]
  rightDate.value = defaultArr[1]
  maxDate.value = undefined
  minDate.value = undefined
  emit('pick', null)
}

emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['handleClear', handleClear])
</script>
