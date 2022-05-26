<template>
  <div
    :class="[
      nsPickerPanel.b(),
      nsDatePicker.b(),
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
      },
    ]"
  >
    <div :class="nsPickerPanel.e('body-wrapper')">
      <slot name="sidebar" :class="nsPickerPanel.e('sidebar')" />
      <div v-if="hasShortcuts" :class="nsPickerPanel.e('sidebar')">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          :class="nsPickerPanel.e('shortcut')"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div :class="nsPickerPanel.e('body')">
        <div v-if="showTime" :class="nsDatePicker.e('time-header')">
          <span :class="nsDatePicker.e('editor-wrap')">
            <el-input
              :placeholder="t('el.datepicker.selectDate')"
              :model-value="visibleDate"
              size="small"
              @input="(val) => (userInputDate = val)"
              @change="handleVisibleDateChange"
            />
          </span>
          <span
            v-clickoutside="handleTimePickClose"
            :class="nsDatePicker.e('editor-wrap')"
          >
            <el-input
              :placeholder="t('el.datepicker.selectTime')"
              :model-value="visibleTime"
              size="small"
              @focus="onTimePickerInputFocus"
              @input="(val) => (userInputTime = val)"
              @change="handleVisibleTimeChange"
            />
            <time-pick-panel
              :visible="timePickerVisible"
              :format="timeFormat"
              :time-arrow-control="arrowControl"
              :parsed-value="innerDate"
              @pick="handleTimePick"
            />
          </span>
        </div>
        <div
          v-show="currentView !== 'time'"
          :class="[
            nsDatePicker.e('header'),
            {
              [nsDatePicker.em('header', 'bordered')]:
                currentView === 'year' || currentView === 'month',
            },
          ]"
        >
          <span :class="nsDatePicker.e('prev-btn')">
            <button
              type="button"
              :aria-label="t(`el.datepicker.prevYear`)"
              :class="['d-arrow-left', nsPickerPanel.e('icon-btn')]"
              @click="prevYear_"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              v-show="currentView === 'date'"
              type="button"
              :aria-label="t(`el.datepicker.prevMonth`)"
              :class="['d-arrow-left', nsPickerPanel.e('icon-btn')]"
              @click="prevMonth_"
            >
              <el-icon><arrow-left /></el-icon>
            </button>
          </span>
          <span
            role="button"
            :class="nsDatePicker.e('header-label')"
            aria-live="polite"
            tabindex="0"
            @keydown.enter="showYearPicker"
            @click="showYearPicker"
            >{{ yearLabel }}</span
          >
          <span
            v-show="currentView === 'date'"
            role="button"
            aria-live="polite"
            tabindex="0"
            :class="[
              nsDatePicker.e('header-label'),
              { active: currentView === 'month' },
            ]"
            @keydown.enter="showMonthPicker"
            @click="showMonthPicker"
            >{{ t(`el.datepicker.month${month + 1}`) }}</span
          >
          <span :class="nsDatePicker.e('next-btn')">
            <button
              v-show="currentView === 'date'"
              type="button"
              :aria-label="t(`el.datepicker.nextMonth`)"
              :class="['arrow-right', nsPickerPanel.e('icon-btn')]"
              @click="nextMonth_"
            >
              <el-icon><arrow-right /></el-icon>
            </button>
            <button
              type="button"
              :aria-label="t(`el.datepicker.nextYear`)"
              :class="['d-arrow-right', nsPickerPanel.e('icon-btn')]"
              @click="nextYear_"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
          </span>
        </div>
        <div :class="nsPickerPanel.e('content')" @keydown="handleKeydownTable">
          <date-table
            v-if="currentView === 'date'"
            ref="currentViewRef"
            :selection-mode="selectionMode"
            :date="innerDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @pick="handleDatePick"
          />
          <year-table
            v-if="currentView === 'year'"
            ref="currentViewRef"
            :date="innerDate"
            :disabled-date="disabledDate"
            :parsed-value="parsedValue"
            @pick="handleYearPick"
          />
          <month-table
            v-if="currentView === 'month'"
            ref="currentViewRef"
            :date="innerDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            @pick="handleMonthPick"
          />
        </div>
      </div>
    </div>
    <div
      v-show="footerVisible && currentView === 'date'"
      :class="nsPickerPanel.e('footer')"
    >
      <el-button
        v-show="selectionMode !== 'dates'"
        text
        size="small"
        :class="nsPickerPanel.e('link-btn')"
        @click="changeToNow"
      >
        {{ t('el.datepicker.now') }}
      </el-button>
      <el-button
        plain
        size="small"
        :class="nsPickerPanel.e('link-btn')"
        @click="onConfirm"
      >
        {{ t('el.datepicker.confirm') }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  ref,
  toRef,
  watch,
} from 'vue'
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
import { ElIcon } from '@element-plus/components/icon'
import { isFunction } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import {
  ArrowLeft,
  ArrowRight,
  DArrowLeft,
  DArrowRight,
} from '@element-plus/icons-vue'
import { TOOLTIP_INJECTION_KEY } from '@element-plus/components/tooltip'
import { panelDatePickProps } from '../props/panel-date-pick'
import DateTable from './basic-date-table.vue'
import MonthTable from './basic-month-table.vue'
import YearTable from './basic-year-table.vue'

import type { ComponentPublicInstance, Ref } from 'vue'
import type { ConfigType, Dayjs } from 'dayjs'

// todo
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const timeWithinRange = (_: ConfigType, __: any, ___: string) => true

export default defineComponent({
  components: {
    DateTable,
    ElInput,
    ElButton,
    ElIcon,
    TimePickPanel,
    MonthTable,
    YearTable,
    DArrowLeft,
    ArrowLeft,
    DArrowRight,
    ArrowRight,
  },

  directives: { clickoutside: ClickOutside },
  props: panelDatePickProps,
  emits: ['pick', 'set-picker-option', 'panel-change'],
  setup(props, ctx) {
    const { t, lang } = useLocale()
    const nsPickerPanel = useNamespace('picker-panel')
    const nsDatePicker = useNamespace('date-picker')
    const pickerBase = inject('EP_PICKER_BASE') as any
    const popper = inject(TOOLTIP_INJECTION_KEY)
    const {
      shortcuts,
      disabledDate,
      cellClassName,
      defaultTime,
      arrowControl,
    } = pickerBase.props
    const defaultValue = toRef(pickerBase.props, 'defaultValue')

    const currentViewRef = ref<ComponentPublicInstance>()

    const innerDate = ref(dayjs().locale(lang.value))

    const defaultTimeD = computed(() => {
      return dayjs(defaultTime).locale(lang.value)
    })

    const month = computed(() => {
      return innerDate.value.month()
    })

    const year = computed(() => {
      return innerDate.value.year()
    })

    const selectableRange = ref([])
    const userInputDate = ref(null)
    const userInputTime = ref(null)
    // todo update to disableHour
    const checkDateWithinRange = (date: ConfigType) => {
      return selectableRange.value.length > 0
        ? timeWithinRange(
            date,
            selectableRange.value,
            props.format || 'HH:mm:ss'
          )
        : true
    }
    const formatEmit = (emitDayjs: Dayjs) => {
      if (defaultTime && !visibleTime.value) {
        return defaultTimeD.value
          .year(emitDayjs.year())
          .month(emitDayjs.month())
          .date(emitDayjs.date())
      }
      if (showTime.value) return emitDayjs.millisecond(0)
      return emitDayjs.startOf('day')
    }
    const emit = (value, ...args) => {
      if (!value) {
        ctx.emit('pick', value, ...args)
      } else if (Array.isArray(value)) {
        const dates = value.map(formatEmit)
        ctx.emit('pick', dates, ...args)
      } else {
        ctx.emit('pick', formatEmit(value), ...args)
      }
      userInputDate.value = null
      userInputTime.value = null
    }
    const handleDatePick = (value: Dayjs, keepOpen: boolean = undefined) => {
      if (selectionMode.value === 'date') {
        let newDate = props.parsedValue
          ? (props.parsedValue as Dayjs)
              .year(value.year())
              .month(value.month())
              .date(value.date())
          : value
        // change default time while out of selectableRange
        if (!checkDateWithinRange(newDate)) {
          newDate = (selectableRange.value[0][0] as Dayjs)
            .year(value.year())
            .month(value.month())
            .date(value.date())
        }
        innerDate.value = newDate
        emit(newDate, showTime.value || keepOpen)
      } else if (selectionMode.value === 'week') {
        emit(value.date)
      } else if (selectionMode.value === 'dates') {
        emit(value, true) // set true to keep panel open
      }
    }
    const prevMonth_ = () => {
      innerDate.value = innerDate.value.subtract(1, 'month')
      handlePanelChange('month')
    }

    const nextMonth_ = () => {
      innerDate.value = innerDate.value.add(1, 'month')
      handlePanelChange('month')
    }

    const prevYear_ = () => {
      if (currentView.value === 'year') {
        innerDate.value = innerDate.value.subtract(10, 'year')
      } else {
        innerDate.value = innerDate.value.subtract(1, 'year')
      }
      handlePanelChange('year')
    }

    const nextYear_ = () => {
      if (currentView.value === 'year') {
        innerDate.value = innerDate.value.add(10, 'year')
      } else {
        innerDate.value = innerDate.value.add(1, 'year')
      }
      handlePanelChange('year')
    }

    const currentView = ref('date')

    const yearLabel = computed(() => {
      const yearTranslation = t('el.datepicker.year')
      if (currentView.value === 'year') {
        const startYear = Math.floor(year.value / 10) * 10
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${
            startYear + 9
          } ${yearTranslation}`
        }
        return `${startYear} - ${startYear + 9}`
      }
      return `${year.value} ${yearTranslation}`
    })

    const handleShortcutClick = (shortcut) => {
      const shortcutValue =
        typeof shortcut.value === 'function' ? shortcut.value() : shortcut.value
      if (shortcutValue) {
        emit(dayjs(shortcutValue).locale(lang.value))
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const selectionMode = computed(() => {
      if (['week', 'month', 'year', 'dates'].includes(props.type)) {
        return props.type
      }
      return 'date'
    })

    const keyboardMode = computed<string>(() => {
      return selectionMode.value === 'date'
        ? currentView.value
        : selectionMode.value
    })

    watch(
      () => selectionMode.value,
      (val) => {
        if (['month', 'year'].includes(val)) {
          currentView.value = val
          return
        }
        currentView.value = 'date'
      },
      { immediate: true }
    )

    watch(
      () => currentView.value,
      () => {
        popper?.updatePopper()
      }
    )

    const hasShortcuts = computed(() => !!shortcuts.length)

    const handleMonthPick = async (month) => {
      innerDate.value = innerDate.value.startOf('month').month(month)
      if (selectionMode.value === 'month') {
        emit(innerDate.value, false)
      } else {
        currentView.value = 'date'
        if (['month', 'year', 'date', 'week'].includes(selectionMode.value)) {
          emit(innerDate.value, true)
          await nextTick()
          handleFocusPicker()
        }
      }
      handlePanelChange('month')
    }

    const handleYearPick = async (year) => {
      if (selectionMode.value === 'year') {
        innerDate.value = innerDate.value.startOf('year').year(year)
        emit(innerDate.value, false)
      } else {
        innerDate.value = innerDate.value.year(year)
        currentView.value = 'month'
        if (['month', 'year', 'date', 'week'].includes(selectionMode.value)) {
          emit(innerDate.value, true)
          await nextTick()
          handleFocusPicker()
        }
      }
      handlePanelChange('year')
    }

    const showMonthPicker = async () => {
      currentView.value = 'month'
      await nextTick()
      handleFocusPicker()
    }

    const showYearPicker = async () => {
      currentView.value = 'year'
      await nextTick()
      handleFocusPicker()
    }

    const showTime = computed(
      () => props.type === 'datetime' || props.type === 'datetimerange'
    )

    const footerVisible = computed(() => {
      return showTime.value || selectionMode.value === 'dates'
    })

    const onConfirm = () => {
      if (selectionMode.value === 'dates') {
        emit(props.parsedValue)
      } else {
        // deal with the scenario where: user opens the date time picker, then confirm without doing anything
        let result = props.parsedValue as Dayjs
        if (!result) {
          const defaultTimeD = dayjs(defaultTime).locale(lang.value)
          const defaultValueD = getDefaultValue()
          result = defaultTimeD
            .year(defaultValueD.year())
            .month(defaultValueD.month())
            .date(defaultValueD.date())
        }
        innerDate.value = result
        emit(result)
      }
    }

    const changeToNow = () => {
      // NOTE: not a permanent solution
      //       consider disable "now" button in the future
      const now = dayjs().locale(lang.value)
      const nowDate = now.toDate()
      if (
        (!disabledDate || !disabledDate(nowDate)) &&
        checkDateWithinRange(nowDate)
      ) {
        innerDate.value = dayjs().locale(lang.value)
        emit(innerDate.value)
      }
    }

    const timeFormat = computed(() => {
      return extractTimeFormat(props.format)
    })

    const dateFormat = computed(() => {
      return extractDateFormat(props.format)
    })

    const visibleTime = computed(() => {
      if (userInputTime.value) return userInputTime.value
      if (!props.parsedValue && !defaultValue.value) return
      return ((props.parsedValue || innerDate.value) as Dayjs).format(
        timeFormat.value
      )
    })

    const visibleDate = computed(() => {
      if (userInputDate.value) return userInputDate.value
      if (!props.parsedValue && !defaultValue.value) return
      return ((props.parsedValue || innerDate.value) as Dayjs).format(
        dateFormat.value
      )
    })

    const timePickerVisible = ref(false)
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true
    }
    const handleTimePickClose = () => {
      timePickerVisible.value = false
    }

    const handleTimePick = (value, visible, first) => {
      const newDate = props.parsedValue
        ? (props.parsedValue as Dayjs)
            .hour(value.hour())
            .minute(value.minute())
            .second(value.second())
        : value
      innerDate.value = newDate
      emit(innerDate.value, true)
      if (!first) {
        timePickerVisible.value = visible
      }
    }

    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value)
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        innerDate.value = newDate
          .year(innerDate.value.year())
          .month(innerDate.value.month())
          .date(innerDate.value.date())
        userInputTime.value = null
        timePickerVisible.value = false
        emit(innerDate.value, true)
      }
    }

    const handleVisibleDateChange = (value) => {
      const newDate = dayjs(value, dateFormat.value).locale(lang.value)
      if (newDate.isValid()) {
        if (disabledDate && disabledDate(newDate.toDate())) {
          return
        }
        innerDate.value = newDate
          .hour(innerDate.value.hour())
          .minute(innerDate.value.minute())
          .second(innerDate.value.second())
        userInputDate.value = null
        emit(innerDate.value, true)
      }
    }

    const isValidValue = (date: unknown) => {
      return (
        dayjs.isDayjs(date) &&
        date.isValid() &&
        (disabledDate ? !disabledDate(date.toDate()) : true)
      )
    }

    const formatToString = (value) => {
      if (selectionMode.value === 'dates') {
        return value.map((_) => _.format(props.format))
      }
      return value.format(props.format)
    }

    const parseUserInput = (value) => {
      return dayjs(value, props.format).locale(lang.value)
    }

    const getDefaultValue = () => {
      const parseDate = dayjs(defaultValue.value).locale(lang.value)
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value
        return dayjs()
          .hour(defaultTimeDValue.hour())
          .minute(defaultTimeDValue.minute())
          .second(defaultTimeDValue.second())
          .locale(lang.value)
      }
      return parseDate
    }

    const handleFocusPicker = async () => {
      if (['week', 'month', 'year', 'date'].includes(selectionMode.value)) {
        ;(currentViewRef as Ref<any>).value?.focus()
        if (selectionMode.value === 'week') {
          handleKeyControl(EVENT_CODE.down)
        }
      }
    }

    const handleKeydownTable = (event) => {
      const { code } = event
      const list = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown,
      ]
      if (list.includes(code)) {
        handleKeyControl(code)
        event.stopPropagation()
        event.preventDefault()
      }
      if (
        [EVENT_CODE.enter, EVENT_CODE.space].includes(code) &&
        userInputDate.value === null &&
        userInputTime.value === null
      ) {
        event.preventDefault()
        emit(innerDate.value, false)
      }
    }

    const handleKeyControl = (code: string) => {
      type KeyControlMappingCallableOffset = (
        date: Date,
        step?: number
      ) => number
      interface KeyControlMapping {
        [key: string]: {
          offset: (date: Date, step: number) => any
          [key: number]: number | KeyControlMappingCallableOffset
        }
      }
      const mapping: KeyControlMapping = {
        year: {
          [EVENT_CODE.up]: -4,
          [EVENT_CODE.down]: 4,
          [EVENT_CODE.left]: -1,
          [EVENT_CODE.right]: 1,
          offset: (date, step) => date.setFullYear(date.getFullYear() + step),
        },
        month: {
          [EVENT_CODE.up]: -4,
          [EVENT_CODE.down]: 4,
          [EVENT_CODE.left]: -1,
          [EVENT_CODE.right]: 1,
          offset: (date, step) => date.setMonth(date.getMonth() + step),
        },
        week: {
          [EVENT_CODE.up]: -1,
          [EVENT_CODE.down]: 1,
          [EVENT_CODE.left]: -1,
          [EVENT_CODE.right]: 1,
          offset: (date, step) => date.setDate(date.getDate() + step * 7),
        },
        date: {
          [EVENT_CODE.up]: -7,
          [EVENT_CODE.down]: 7,
          [EVENT_CODE.left]: -1,
          [EVENT_CODE.right]: 1,
          [EVENT_CODE.home]: (date) => -date.getDay(),
          [EVENT_CODE.end]: (date) => -date.getDay() + 6,
          [EVENT_CODE.pageUp]: (date) =>
            -new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
          [EVENT_CODE.pageDown]: (date) =>
            new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
          offset: (date, step) => date.setDate(date.getDate() + step),
        },
      }

      const newDate = innerDate.value.toDate()
      while (Math.abs(innerDate.value.diff(newDate, 'year', true)) < 1) {
        const map = mapping[keyboardMode.value]
        if (!map) return
        map.offset(
          newDate,
          isFunction(map[code])
            ? (map[code] as unknown as KeyControlMappingCallableOffset)(newDate)
            : (map[code] as number) ?? 0
        )
        if (disabledDate && disabledDate(newDate)) {
          break
        }
        const result = dayjs(newDate).locale(lang.value)
        innerDate.value = result
        ctx.emit('pick', result, true)
        break
      }
    }

    const handlePanelChange = (mode: 'month' | 'year') => {
      ctx.emit(
        'panel-change',
        innerDate.value.toDate(),
        mode,
        currentView.value
      )
    }

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option', ['handleFocusPicker', handleFocusPicker])

    watch(
      () => defaultValue.value,
      (val) => {
        if (val) {
          innerDate.value = getDefaultValue()
        }
      },
      { immediate: true }
    )

    watch(
      () => props.parsedValue,
      (val) => {
        if (val) {
          if (selectionMode.value === 'dates') return
          if (Array.isArray(val)) return
          innerDate.value = val
        } else {
          innerDate.value = getDefaultValue()
        }
      },
      { immediate: true }
    )

    return {
      nsPickerPanel,
      nsDatePicker,
      currentViewRef,
      handleTimePick,
      handleTimePickClose,
      onTimePickerInputFocus,
      timePickerVisible,
      visibleTime,
      visibleDate,
      showTime,
      changeToNow,
      onConfirm,
      footerVisible,
      handleYearPick,
      showMonthPicker,
      showYearPicker,
      handleMonthPick,
      hasShortcuts,
      shortcuts,
      arrowControl,
      disabledDate,
      cellClassName,
      selectionMode,
      handleShortcutClick,
      prevYear_,
      nextYear_,
      prevMonth_,
      nextMonth_,
      innerDate,
      t,
      yearLabel,
      currentView,
      month,
      handleDatePick,
      handleKeydownTable,
      handleVisibleTimeChange,
      handleVisibleDateChange,
      timeFormat,
      userInputTime,
      userInputDate,
    }
  },
})
</script>
