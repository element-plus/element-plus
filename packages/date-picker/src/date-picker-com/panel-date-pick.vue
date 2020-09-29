<template>
  <transition name="el-zoom-in-top">
    <div
      v-if="visible"
      class="el-picker-panel el-date-picker"
      :class="[{
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime
      }]"
    >
      <div class="el-picker-panel__body-wrapper">
        <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
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
                @input="val => userInputDate = val"
                @change="handleVisibleDateChange"
              />
            </span>
            <span
              v-clickoutside="handleTimePickClose"
              class="el-date-picker__editor-wrap"
            >
              <el-input
                ref="input"
                :placeholder="t('el.datepicker.selectTime')"
                :model-value="visibleTime"
                size="small"
                @focus="onTimePickerInputFocus"
                @input="val => userInputTime = val"
                @change="handleVisibleTimeChange"
              />
              <time-pick-panel
                ref="timepicker"
                :visible="timePickerVisible"
                :format="timeFormat"
                :time-arrow-control="arrowControl"
                :parsed-value="parsedValue"
                @pick="handleTimePick"
              />
            </span>
          </div>
          <div
            v-show="currentView !== 'time'"
            class="el-date-picker__header"
            :class="{ 'el-date-picker__header--bordered': currentView === 'year' || currentView === 'month' }"
          >
            <button
              type="button"
              :aria-label="t(`el.datepicker.prevYear`)"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
              @click="prevYear_"
            >
            </button>
            <button
              v-show="currentView === 'date'"
              type="button"
              :aria-label="t(`el.datepicker.prevMonth`)"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"
              @click="prevMonth_"
            >
            </button>
            <span
              role="button"
              class="el-date-picker__header-label"
              @click="showYearPicker"
            >{{ yearLabel }}</span>
            <span
              v-show="currentView === 'date'"
              role="button"
              class="el-date-picker__header-label"
              :class="{ active: currentView === 'month' }"
              @click="showMonthPicker"
            >{{ t(`el.datepicker.month${ month + 1 }`) }}</span>
            <button
              type="button"
              :aria-label="t(`el.datepicker.nextYear`)"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
              @click="nextYear_"
            >
            </button>
            <button
              v-show="currentView === 'date'"
              type="button"
              :aria-label="t(`el.datepicker.nextMonth`)"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right"
              @click="nextMonth_"
            >
            </button>
          </div>

          <div class="el-picker-panel__content">
            <date-table
              v-if="currentView === 'date'"
              :selection-mode="selectionMode"
              :date="innerDate"
              :parsed-value="parsedValue"
              :disabled-date="disabledDate"
              @pick="handleDatePick"
            />
            <year-table
              v-if="currentView === 'year'"
              :date="innerDate"
              :disabled-date="disabledDate"
              :parsed-value="parsedValue"
              @pick="handleYearPick"
            />
            <month-table
              v-if="currentView === 'month'"
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
          size="mini"
          type="text"
          class="el-picker-panel__link-btn"
          @click="changeToNow"
        >
          {{ t('el.datepicker.now') }}
        </el-button>
        <el-button
          plain
          size="mini"
          class="el-picker-panel__link-btn"
          @click="onConfirm"
        >
          {{ t('el.datepicker.confirm') }}
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  extractDateFormat,
  extractTimeFormat,
  timeWithinRange,
} from './time-picker-utils'
import { t } from '@element-plus/locale'
import ElInput from '@element-plus/input/src/index.vue'
import { ClickOutside } from '@element-plus/directives'
import { Button as ElButton } from '@element-plus/button'
import dayjs, { Dayjs } from 'dayjs'
import DateTable from './basic-date-table.vue'
import MonthTable from './basic-month-table.vue'
import YearTable from './basic-year-table.vue'
import TimePickPanel from '@element-plus/time-picker/src/time-picker-com/panel-time-pick.vue'
import {
  defineComponent,
  computed,
  ref,
  PropType,
  watch,
  inject,
} from 'vue'

export default defineComponent({
  components: {
    DateTable, ElInput, ElButton, TimePickPanel, MonthTable, YearTable,
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
      type: String,
      required: true,
    },
  },
  emits: ['pick', 'set-picker-option'],
  setup(props, ctx) {
    const innerDate = ref(dayjs())

    const month = computed(() =>  {
      return innerDate.value.month()
    })

    const year = computed(() => {
      return innerDate.value.year()
    })

    const selectableRange = ref([])
    const userInputDate = ref(null)
    const userInputTime = ref(null)
    // todo update to disableHour
    const checkDateWithinRange = date => {
      return selectableRange.value.length > 0
        ? timeWithinRange(date, selectableRange.value, props.format || 'HH:mm:ss')
        : true
    }
    const formatEmit = (emitDayjs: Dayjs) => {
      if (showTime.value) return emitDayjs.millisecond(0)
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime)
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date())
      }
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
      // this.userInputDate = null
      // this.userInputTime = null
    }
    const handleDatePick = (value: Dayjs) => {
      if (selectionMode.value === 'day') {
        let newDate = props.parsedValue ? (props.parsedValue as Dayjs).year(value.year()).month(value.month()).date(value.date()) : value
        // change default time while out of selectableRange
        // if (!checkDateWithinRange(newDate)) {
        //   newDate = modifyDate(selectableRange.value[0][0], value.getFullYear(), value.getMonth(), value.getDate())
        // }
        innerDate.value = newDate
        emit(newDate, showTime.value)
      } else if (selectionMode.value === 'week') {
        emit(value.date)
      } else if (selectionMode.value === 'dates') {
        emit(value, true) // set false to keep panel open
      }
    }
    const prevMonth_ = () => {
      innerDate.value = innerDate.value.subtract(1, 'month')
    }

    const nextMonth_ = () => {
      innerDate.value = innerDate.value.add(1, 'month')
    }

    const prevYear_ = () => {
      if (currentView.value === 'year') {
        innerDate.value = innerDate.value.subtract(10, 'year')
      } else {
        innerDate.value = innerDate.value.subtract(1, 'year')
      }
    }

    const nextYear_ = () => {
      if (currentView.value === 'year') {
        innerDate.value = innerDate.value.add(10, 'year')
      } else {
        innerDate.value = innerDate.value.add(1, 'year')
      }
    }

    const currentView = ref('date')

    const yearLabel = computed(() => {
      const yearTranslation = t('el.datepicker.year')
      if (currentView.value === 'year') {
        const startYear = Math.floor(year.value / 10) * 10
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation
        }
        return startYear + ' - ' + (startYear + 9)
      }
      return year.value + ' ' + yearTranslation
    })

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        emit(dayjs(shortcut.value))
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

    watch(() => selectionMode.value, val => {
      if(['month', 'year'].includes(val)) {
        currentView.value = val
        return
      }
      currentView.value = 'date'
    }, { immediate: true })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const handleMonthPick = month => {
      innerDate.value = innerDate.value.startOf('month').month(month)
      if (selectionMode.value === 'month') {
        emit(innerDate.value)
      } else {
        currentView.value = 'date'
      }
    }

    const handleYearPick = year => {
      if (selectionMode.value === 'year') {
        innerDate.value = innerDate.value.startOf('year').year(year)
        emit(innerDate.value)
      }
      else {
        innerDate.value = innerDate.value.year(year)
        currentView.value = 'month'
      }
    }

    const showMonthPicker = () => {
      currentView.value = 'month'
    }

    const showYearPicker = () => {
      currentView.value = 'year'
    }

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')

    const footerVisible = computed(() => {
      return showTime.value || selectionMode.value === 'dates'
    })

    const onConfirm = () => {
      // if (selectionMode.value === 'dates') {
      //   emit(parsedDatePickerValue.value)
      // }
      emit(props.parsedValue)
    }

    const changeToNow = () => {
      // NOTE: not a permanent solution
      //       consider disable "now" button in the future
      if ((!disabledDate || !disabledDate(new Date())) && checkDateWithinRange(new Date())) {
        innerDate.value = dayjs()
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
      return ((props.parsedValue || innerDate.value) as Dayjs).format(timeFormat.value)
    })

    const visibleDate = computed(() => {
      if (userInputDate.value) return userInputDate.value
      return ((props.parsedValue || innerDate.value) as Dayjs).format(dateFormat.value)
    })

    const timePickerVisible = ref(false)
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true
    }
    const handleTimePickClose = () => {
      timePickerVisible.value = false
    }

    const handleTimePick = (value, visible, first) => {
      const newDate = props.parsedValue ? (props.parsedValue as Dayjs).hour(value.hour()).minute(value.minute()).second(value.second()) : value
      innerDate.value = newDate
      emit(innerDate.value, true)
      if (!first) {
        timePickerVisible.value = visible
      }
    }

    const handleVisibleTimeChange = value => {
      const newDate = dayjs(value, timeFormat.value)
      if (newDate && checkDateWithinRange(newDate)) {
        innerDate.value = newDate.year(innerDate.value.year()).month(innerDate.value.month()).date(innerDate.value.date())
        userInputTime.value = null
        timePickerVisible.value = false
        emit(innerDate.value, true)
      }
    }

    const handleVisibleDateChange = value => {
      const newDate = dayjs(value, dateFormat.value)
      if (newDate) {
        if (disabledDate  && disabledDate(newDate.toDate())) {
          return
        }
        innerDate.value = newDate.hour(innerDate.value.hour()).minute(innerDate.value.minute()).second(innerDate.value.second())
        userInputDate.value = null
        emit(innerDate.value, true)
      }
    }

    const isValidValue = date_ => {
      return date_.isValid() && (
        disabledDate
          ? !disabledDate(date_.toDate())
          : true
      )
      return false
    }

    const formatToString = value => {
      if (selectionMode.value === 'dates') {
        return value.map(_ => _.format(props.format))
      }
      return value.format(props.format)
    }

    const parseUserInput = value => {
      return dayjs(value, format)
    }

    const getDefaultValue = () => {
      return dayjs(defaultValue)
    }

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])

    const pickerBase = inject('EP_PICKER_BASE') as any
    const { shortcuts, disabledDate, cellClassName, format, defaultTime, defaultValue, arrowControl } = pickerBase.props

    watch(() => props.parsedValue, val => {
      if (val) {
        if (selectionMode.value === 'dates') return
        if (Array.isArray(val)) return
        innerDate.value = val
      } else {
        innerDate.value = getDefaultValue()
      }
    }, { immediate: true })

    return {
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
      handleVisibleTimeChange,
      handleVisibleDateChange,
      timeFormat,
      userInputTime,
      userInputDate,
    }
  },

  // methods: {

  //   handleClear() {
  //     this.date = this.getDefaultValue()
  //     this.$emit('pick', null)
  //   },

  //   // resetDate() {
  //   //   this.date = new Date(this.date);
  //   // },



  //   handleKeydown(event) {
  //     const keyCode = event.keyCode
  //     const list = [38, 40, 37, 39]
  //     if (this.visible && !this.timePickerVisible) {
  //       if (list.indexOf(keyCode) !== -1) {
  //         this.handleKeyControl(keyCode)
  //         event.stopPropagation()
  //         event.preventDefault()
  //       }
  //       if (keyCode === 13 && this.userInputDate === null && this.userInputTime === null) { // Enter
  //         this.emit(this.date, false)
  //       }
  //     }
  //   },

  //   handleKeyControl(keyCode) {
  //     const mapping = {
  //       'year': {
  //         38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setFullYear(date.getFullYear() + step),
  //       },
  //       'month': {
  //         38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setMonth(date.getMonth() + step),
  //       },
  //       'week': {
  //         38: -1, 40: 1, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step * 7),
  //       },
  //       'day': {
  //         38: -7, 40: 7, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step),
  //       },
  //     }
  //     const mode = this.selectionMode
  //     const year = 3.1536e10
  //     const now = this.date.getTime()
  //     const newDate = new Date(this.date.getTime())
  //     while (Math.abs(now - newDate.getTime()) <= year) {
  //       const map = mapping[mode]
  //       map.offset(newDate, map[keyCode])
  //       if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
  //         continue
  //       }
  //       this.date = newDate
  //       this.$emit('pick', newDate, true)
  //       break
  //     }
  //   },

  // },
})
</script>
<style scoped>
.el-time-panel {
  position: absolute;
}
</style>
