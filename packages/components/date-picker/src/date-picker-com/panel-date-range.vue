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
                @focus="minTimePickerVisible = true"
                @input="(val) => handleTimeInput(val, 'min')"
                @change="(val) => handleTimeChange(val, 'min')"
              />
              <time-pick-panel
                :visible="minTimePickerVisible"
                :format="timeFormat"
                datetime-role="start"
                :time-arrow-control="arrowControl"
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
                @focus="minDate && (maxTimePickerVisible = true)"
                @input="(val) => handleTimeInput(val, 'max')"
                @change="(val) => handleTimeChange(val, 'max')"
              />
              <time-pick-panel
                datetime-role="end"
                :visible="maxTimePickerVisible"
                :format="timeFormat"
                :time-arrow-control="arrowControl"
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
              class="d-arrow-left"
              @click="leftPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="arrow-left"
              @click="leftPrevMonth"
            >
              <el-icon><arrow-left /></el-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              class="arrow-right"
              @click="leftNextMonth"
            >
              <el-icon><arrow-right /></el-icon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
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
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              class="d-arrow-left"
              @click="rightPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              class="arrow-left"
              @click="rightPrevMonth"
            >
              <el-icon><arrow-left /></el-icon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-right"
              @click="rightNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="arrow-right"
              @click="rightNextMonth"
            >
              <el-icon><arrow-right /></el-icon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
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
        @click="handleConfirm(false)"
      >
        {{ t('el.datepicker.confirm') }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, toRef, watch } from 'vue'
import dayjs from 'dayjs'
import ElButton from '@element-plus/components/button'
import { ClickOutside } from '@element-plus/directives'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import {
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
import DateTable from './basic-date-table.vue'

import type { Dayjs } from 'dayjs'

export default defineComponent({
  directives: { clickoutside: ClickOutside },

  components: {
    TimePickPanel,
    DateTable,
    ElInput,
    ElButton,
    ElIcon,
    DArrowLeft,
    ArrowLeft,
    DArrowRight,
    ArrowRight,
  },

  props: panelDateRangeProps,

  emits: ['pick', 'set-picker-option', 'calendar-change', 'panel-change'],

  setup(props, ctx) {
    const ppNs = useNamespace('picker-panel')
    const drpNs = useNamespace('date-range-picker')

    const { t, lang } = useLocale()
    const leftDate = ref(dayjs().locale(lang.value))
    const rightDate = ref(dayjs().locale(lang.value).add(1, 'month'))
    const minDate = ref(null)
    const maxDate = ref(null)
    const dateUserInput = ref({
      min: null,
      max: null,
    })

    const timeUserInput = ref({
      min: null,
      max: null,
    })

    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t('el.datepicker.year')} ${t(
        `el.datepicker.month${leftDate.value.month() + 1}`
      )}`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t('el.datepicker.year')} ${t(
        `el.datepicker.month${rightDate.value.month() + 1}`
      )}`
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const leftMonth = computed(() => {
      return leftDate.value.month()
    })

    const rightYear = computed(() => {
      return rightDate.value.year()
    })

    const rightMonth = computed(() => {
      return rightDate.value.month()
    })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null) return dateUserInput.value.min
      if (minDate.value) return minDate.value.format(dateFormat.value)
      return ''
    })

    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null) return dateUserInput.value.max
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value)
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
        return (maxDate.value || minDate.value).format(timeFormat.value)
      return ''
    })

    const timeFormat = computed(() => {
      return extractTimeFormat(format)
    })

    const dateFormat = computed(() => {
      return extractDateFormat(format)
    })

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
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
        leftDate.value = leftDate.value.add(1, 'year')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'year')
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
      leftDate.value = leftDate.value.add(1, 'year')
      handlePanelChange('year')
    }

    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, 'month')
      handlePanelChange('month')
    }

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
      handlePanelChange('year')
    }

    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, 'month')
      handlePanelChange('month')
    }

    const handlePanelChange = (mode: 'month' | 'year') => {
      ctx.emit(
        'panel-change',
        [leftDate.value.toDate(), rightDate.value.toDate()],
        mode
      )
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

    const isValidValue = (value) => {
      return (
        Array.isArray(value) &&
        value[0] &&
        value[1] &&
        value[0].valueOf() <= value[1].valueOf()
      )
    }

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const btnDisabled = computed(() => {
      return !(
        minDate.value &&
        maxDate.value &&
        !rangeState.value.selecting &&
        isValidValue([minDate.value, maxDate.value])
      )
    })

    const handleChangeRange = (val) => {
      rangeState.value = val
    }

    const onSelect = (selecting) => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const showTime = computed(
      () => props.type === 'datetime' || props.type === 'datetimerange'
    )

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const formatEmit = (emitDayjs: Dayjs, index?) => {
      if (!emitDayjs) return
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime).locale(
          lang.value
        )
        return defaultTimeD
          .year(emitDayjs.year())
          .month(emitDayjs.month())
          .date(emitDayjs.date())
      }
      return emitDayjs
    }

    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate
      const max_ = val.maxDate
      const minDate_ = formatEmit(min_, 0)
      const maxDate_ = formatEmit(max_, 1)

      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      ctx.emit('calendar-change', [min_.toDate(), max_ && max_.toDate()])
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close || showTime.value) return
      handleConfirm()
    }

    const handleShortcutClick = (shortcut) => {
      const shortcutValues =
        typeof shortcut.value === 'function' ? shortcut.value() : shortcut.value
      if (shortcutValues) {
        ctx.emit('pick', [
          dayjs(shortcutValues[0]).locale(lang.value),
          dayjs(shortcutValues[1]).locale(lang.value),
        ])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const minTimePickerVisible = ref(false)
    const maxTimePickerVisible = ref(false)

    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false
    }

    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false
    }

    const handleDateInput = (value, type) => {
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
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, 'month')
            maxDate.value = minDate.value.add(1, 'month')
          }
        } else {
          rightDate.value = parsedValueD
          maxDate.value = (maxDate.value || rightDate.value)
            .year(parsedValueD.year())
            .month(parsedValueD.month())
            .date(parsedValueD.date())
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, 'month')
            minDate.value = maxDate.value.subtract(1, 'month')
          }
        }
      }
    }

    const handleDateChange = (_, type) => {
      dateUserInput.value[type] = null
    }

    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value)

      if (parsedValueD.isValid()) {
        if (type === 'min') {
          minTimePickerVisible.value = true
          minDate.value = (minDate.value || leftDate.value)
            .hour(parsedValueD.hour())
            .minute(parsedValueD.minute())
            .second(parsedValueD.second())
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value
          }
        } else {
          maxTimePickerVisible.value = true
          maxDate.value = (maxDate.value || rightDate.value)
            .hour(parsedValueD.hour())
            .minute(parsedValueD.minute())
            .second(parsedValueD.second())
          rightDate.value = maxDate.value
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value
          }
        }
      }
    }

    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null
      if (type === 'min') {
        leftDate.value = minDate.value
        minTimePickerVisible.value = false
      } else {
        rightDate.value = maxDate.value
        maxTimePickerVisible.value = false
      }
    }

    const handleMinTimePick = (value, visible, first) => {
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

    const handleMaxTimePick = (value, visible, first) => {
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
      leftDate.value = getDefaultValue()[0]
      rightDate.value = leftDate.value.add(1, 'month')
      ctx.emit('pick', null)
    }

    const formatToString = (value: Dayjs | Dayjs[]) => {
      return Array.isArray(value)
        ? value.map((_) => _.format(format))
        : value.format(format)
    }

    const parseUserInput = (value: Dayjs | Dayjs[]) => {
      return Array.isArray(value)
        ? value.map((_) => dayjs(_, format).locale(lang.value))
        : dayjs(value, format).locale(lang.value)
    }

    const getDefaultValue = () => {
      let start: Dayjs
      if (Array.isArray(defaultValue.value)) {
        const left = dayjs(defaultValue.value[0])
        let right = dayjs(defaultValue.value[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'month')
        }
        return [left, right]
      } else if (defaultValue.value) {
        start = dayjs(defaultValue.value)
      } else {
        start = dayjs()
      }

      start = start.locale(lang.value)
      return [start, start.add(1, 'month')]
    }

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['handleClear', handleClear])

    const pickerBase = inject('EP_PICKER_BASE') as any
    const {
      shortcuts,
      disabledDate,
      cellClassName,
      format,
      defaultTime,
      arrowControl,
      clearable,
    } = pickerBase.props
    const defaultValue = toRef(pickerBase.props, 'defaultValue')

    watch(
      () => defaultValue.value,
      (val) => {
        if (val) {
          const defaultArr = getDefaultValue()
          minDate.value = null
          maxDate.value = null
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
            const minDateMonth = minDate.value.month()
            const maxDateYear = maxDate.value.year()
            const maxDateMonth = maxDate.value.month()
            rightDate.value =
              minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? maxDate.value.add(1, 'month')
                : maxDate.value
          } else {
            rightDate.value = leftDate.value.add(1, 'month')
            if (maxDate.value) {
              rightDate.value = rightDate.value
                .hour(maxDate.value.hour())
                .minute(maxDate.value.minute())
                .second(maxDate.value.second())
            }
          }
        } else {
          const defaultArr = getDefaultValue()
          minDate.value = null
          maxDate.value = null
          leftDate.value = defaultArr[0]
          rightDate.value = defaultArr[1]
        }
      },
      { immediate: true }
    )

    return {
      ppNs,
      drpNs,
      shortcuts,
      disabledDate,
      cellClassName,
      minTimePickerVisible,
      maxTimePickerVisible,
      handleMinTimeClose,
      handleMaxTimeClose,
      handleShortcutClick,
      rangeState,
      minDate,
      maxDate,
      handleRangePick,
      onSelect,
      handleChangeRange,
      btnDisabled,
      enableYearArrow,
      enableMonthArrow,
      rightPrevMonth,
      rightPrevYear,
      rightNextMonth,
      rightNextYear,
      leftPrevMonth,
      leftPrevYear,
      leftNextMonth,
      leftNextYear,
      hasShortcuts,
      leftLabel,
      rightLabel,
      leftDate,
      rightDate,
      showTime,
      t,
      minVisibleDate,
      maxVisibleDate,
      minVisibleTime,
      maxVisibleTime,
      arrowControl,
      handleDateInput,
      handleDateChange,
      handleTimeInput,
      handleTimeChange,
      handleMinTimePick,
      handleMaxTimePick,
      handleClear,
      handleConfirm,
      timeFormat,
      clearable,
    }
  },
})
</script>
