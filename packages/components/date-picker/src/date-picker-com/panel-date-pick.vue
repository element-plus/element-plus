<template>
  <div
    class="el-picker-panel el-date-picker"
    :class="[
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
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
        <div v-if="showTime" class="el-date-picker__time-header">
          <span class="el-date-picker__editor-wrap">
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
            class="el-date-picker__editor-wrap"
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
          class="el-date-picker__header"
          :class="{
            'el-date-picker__header--bordered':
              currentView === 'year' || currentView === 'month',
          }"
        >
          <button
            type="button"
            :aria-label="t(`el.datepicker.prevYear`)"
            class="el-picker-panel__icon-btn el-date-picker__prev-btn d-arrow-left"
            @click="prevYear_"
          >
            <el-icon><d-arrow-left /></el-icon>
          </button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="t(`el.datepicker.prevMonth`)"
            class="el-picker-panel__icon-btn el-date-picker__prev-btn arrow-left"
            @click="prevMonth_"
          >
            <el-icon><arrow-left /></el-icon>
          </button>
          <span
            role="button"
            class="el-date-picker__header-label"
            aria-live="polite"
            @click="showYearPicker"
            >{{ yearLabel }}</span
          >
          <span
            v-show="currentView === 'date'"
            role="button"
            class="el-date-picker__header-label"
            aria-live="polite"
            :class="{ active: currentView === 'month' }"
            @click="showMonthPicker"
            >{{ t(`el.datepicker.month${month + 1}`) }}</span
          >
          <button
            type="button"
            :aria-label="t(`el.datepicker.nextYear`)"
            class="el-picker-panel__icon-btn el-date-picker__next-btn d-arrow-right"
            @click="nextYear_"
          >
            <el-icon><d-arrow-right /></el-icon>
          </button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="t(`el.datepicker.nextMonth`)"
            class="el-picker-panel__icon-btn el-date-picker__next-btn arrow-right"
            @click="nextMonth_"
          >
            <el-icon><arrow-right /></el-icon>
          </button>
        </div>
        <div class="el-picker-panel__content" @keydown="handleKeydownTable">
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
      class="el-picker-panel__footer"
    >
      <el-button
        v-show="selectionMode !== 'dates'"
        text
        size="small"
        class="el-picker-panel__link-btn"
        @click="changeToNow"
      >
        {{ t('el.datepicker.now') }}
      </el-button>
      <el-button
        plain
        size="small"
        class="el-picker-panel__link-btn"
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
import { useLocale } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import {
  TimePickPanel,
  extractDateFormat,
  extractTimeFormat,
} from '@element-plus/components/time-picker'
import { ElIcon } from '@element-plus/components/icon'
import { isValidDatePickType } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import {
  ArrowLeft,
  ArrowRight,
  DArrowLeft,
  DArrowRight,
} from '@element-plus/icons-vue'
import { TOOLTIP_INJECTION_KEY } from '@element-plus/components/tooltip'
import DateTable from './basic-date-table.vue'
import MonthTable from './basic-month-table.vue'
import YearTable from './basic-year-table.vue'

import type { ComponentPublicInstance, PropType, Ref } from 'vue'
import type { ConfigType, Dayjs } from 'dayjs'
import type { IDatePickerType } from '../date-picker.type'

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
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    parsedValue: {
      type: [Object, Array] as PropType<Dayjs | Dayjs[]>,
    },
    format: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<IDatePickerType>,
      required: true,
      validator: isValidDatePickType,
    },
  },
  emits: ['pick', 'set-picker-option', 'panel-change'],
  setup(props, ctx) {
    const { t, lang } = useLocale()
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
      if (selectionMode.value === 'day') {
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
        emit(newDate, keepOpen != null ? keepOpen : showTime.value)
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
      return 'day'
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

    const handleMonthPick = (month) => {
      innerDate.value = innerDate.value.startOf('month').month(month)
      if (selectionMode.value === 'month') {
        emit(innerDate.value)
      } else {
        currentView.value = 'date'
      }
      handlePanelChange('month')
    }

    const handleYearPick = (year) => {
      if (selectionMode.value === 'year') {
        innerDate.value = innerDate.value.startOf('year').year(year)
        emit(innerDate.value)
      } else {
        innerDate.value = innerDate.value.year(year)
        currentView.value = 'month'
      }
      handlePanelChange('year')
    }

    const showMonthPicker = () => {
      currentView.value = 'month'
    }

    const showYearPicker = () => {
      currentView.value = 'year'
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
      if (currentView.value !== 'date') {
        currentView.value = 'date'
        await nextTick()
      }
      ;(currentViewRef as Ref<any>).value?.focus()
    }

    const handleKeydownTable = (event) => {
      const { code, keyCode } = event
      const list = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
      ]
      if (list.includes(code)) {
        handleKeyControl(keyCode)
        event.stopPropagation()
        event.preventDefault()
      }
      if (
        code === EVENT_CODE.enter &&
        userInputDate.value === null &&
        userInputTime.value === null
      ) {
        // Enter
        emit(innerDate.value, false)
      }
    }

    const handleKeyControl = (keyCode) => {
      const mapping = {
        year: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setFullYear(date.getFullYear() + step),
        },
        month: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setMonth(date.getMonth() + step),
        },
        week: {
          38: -1,
          40: 1,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step * 7),
        },
        day: {
          38: -7,
          40: 7,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step),
        },
      }

      const newDate = innerDate.value.toDate()
      while (Math.abs(innerDate.value.diff(newDate, 'year', true)) < 1) {
        const map = mapping[selectionMode.value]
        map.offset(newDate, map[keyCode])
        if (disabledDate && disabledDate(newDate)) {
          continue
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
