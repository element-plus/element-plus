<template>
  <transition name="el-zoom-in-top">
    <div
      class="el-picker-panel el-date-range-picker"
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
          <div v-if="showTime" class="el-date-range-picker__time-header">
            <span class="el-date-range-picker__editors-wrap">
              <span class="el-date-range-picker__time-picker-wrap">
                <el-input
                  ref="minInput"
                  size="small"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.startDate')"
                  class="el-date-range-picker__editor"
                  :value="minVisibleDate"
                  @input="val => handleDateInput(val, 'min')"
                  @change="val => handleDateChange(val, 'min')"
                />
              </span>
              <span v-clickoutside="handleMinTimeClose" class="el-date-range-picker__time-picker-wrap">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.startTime')"
                  :value="minVisibleTime"
                  @focus="minTimePickerVisible = true"
                  @input="val => handleTimeInput(val, 'min')"
                  @change="val => handleTimeChange(val, 'min')"
                />
                <time-picker
                  ref="minTimePicker"
                  :time-arrow-control="arrowControl"
                  :visible="minTimePickerVisible"
                  @pick="handleMinTimePick"
                />
              </span>
            </span>
            <span class="el-icon-arrow-right"></span>
            <span class="el-date-range-picker__editors-wrap is-right">
              <span class="el-date-range-picker__time-picker-wrap">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.endDate')"
                  :value="maxVisibleDate"
                  :readonly="!minDate"
                  @input="val => handleDateInput(val, 'max')"
                  @change="val => handleDateChange(val, 'max')"
                />
              </span>
              <span v-clickoutside="handleMaxTimeClose" class="el-date-range-picker__time-picker-wrap">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.endTime')"
                  :value="maxVisibleTime"
                  :readonly="!minDate"
                  @focus="minDate && (maxTimePickerVisible = true)"
                  @input="val => handleTimeInput(val, 'max')"
                  @change="val => handleTimeChange(val, 'max')"
                />
                <time-picker
                  ref="maxTimePicker"
                  :time-arrow-control="arrowControl"
                  :visible="maxTimePickerVisible"
                  @pick="handleMaxTimePick"
                />
              </span>
            </span>
          </div>
          <div class="el-picker-panel__content el-date-range-picker__content is-left">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"
                @click="leftPrevYear"
              ></button>
              <button
                type="button"
                class="el-picker-panel__icon-btn el-icon-arrow-left"
                @click="leftPrevMonth"
              ></button>
              <button
                v-if="unlinkPanels"
                type="button"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"
                @click="leftNextYear"
              ></button>
              <button
                v-if="unlinkPanels"
                type="button"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-right"
                @click="leftNextMonth"
              ></button>
              <div>{{ leftLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="leftDate"
              :default-value="defaultValue"
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
          <div class="el-picker-panel__content el-date-range-picker__content is-right">
            <div class="el-date-range-picker__header">
              <button
                v-if="unlinkPanels"
                type="button"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"
                @click="rightPrevYear"
              ></button>
              <button
                v-if="unlinkPanels"
                type="button"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-left"
                @click="rightPrevMonth"
              ></button>
              <button
                type="button"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"
                @click="rightNextYear"
              ></button>
              <button
                type="button"
                class="el-picker-panel__icon-btn el-icon-arrow-right"
                @click="rightNextMonth"
              ></button>
              <div>{{ rightLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="rightDate"
              :default-value="defaultValue"
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
      <div v-if="showTime" class="el-picker-panel__footer">
        <el-button
          size="mini"
          type="text"
          class="el-picker-panel__link-btn"
          @click="handleClear"
        >
          {{ t('el.datepicker.clear') }}
        </el-button>
        <el-button
          plain
          size="mini"
          class="el-picker-panel__link-btn"
          :disabled="btnDisabled"
          @click="handleConfirm(false)"
        >
          {{ t('el.datepicker.confirm') }}
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  nextDate,
} from './time-picker-utils'
import {
  defineComponent,
  computed,
  ref,
  PropType,
  inject,
} from 'vue'
import { t } from '@element-plus/locale'
import { ClickOutside } from '@element-plus/directives'
import TimePicker from '@element-plus/time-picker/src/time-picker-com/panel-time-pick.vue'
import dayjs, { Dayjs } from 'dayjs'
import DateTable from './basic-date-table.vue'
import ElInput from '@element-plus/input/src/index.vue'
import { Button as ElButton } from '@element-plus/button'

const calcDefaultValue = defaultValue => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])]
  } else if (defaultValue) {
    return [new Date(defaultValue), nextDate(new Date(defaultValue), 1)]
  } else {
    return [new Date(), nextDate(new Date(), 1)]
  }
}

export default defineComponent({

  directives: { clickoutside: ClickOutside },

  components: { TimePicker, DateTable, ElInput, ElButton },

  props:{
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array as PropType<Dayjs[]>,
    },
    type: {
      type: String,
      required: true,
    },
  },

  emits: ['pick'],

  setup(props, ctx) {
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'month'))
    const minDate = ref(null)
    const maxDate = ref(null)
    const leftLabel = computed(() => {
      return leftDate.value.year() + ' ' + t('el.datepicker.year') + ' ' + t(`el.datepicker.month${ leftDate.value.month() + 1 }`)
    })

    const rightLabel = computed(() => {
      return rightDate.value.year() + ' ' + t('el.datepicker.year') + ' ' + t(`el.datepicker.month${ rightDate.value.month() + 1 }`)
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const leftMonth = computed(() => {
      return leftDate.value.month()
    })

    const leftMonthDate = computed(() => {
      return leftDate.value.date()
    })

    const rightMonthDate = computed(() => {
      return rightDate.value.date()
    })

    const rightYear = computed(() => {
      return rightDate.value.year()
    })

    const rightMonth = computed(() => {
      return rightDate.value.month()
    })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'year')
      }
    }

    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, 'month')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'year')
      }
    }

    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'month')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'month')
      }
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, 'month')
    }

    const rightPrevYear = () => {
      rightDate.value = leftDate.value.subtract(1, 'year')
    }

    const rightPrevMonth = () => {
      rightDate.value = leftDate.value.subtract(1, 'month')
    }

    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value)
    })

    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12
    })

    const isValidValue = value => {
      return Array.isArray(value) &&
          value && value[0] && value[1] &&
          value[0].valueOf() <= value[1].valueOf()
    }

    const rangeState = ref({
      endDate: null,
      selecting: false,
      row: null,
      column: null,
    })

    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidValue([minDate.value, maxDate.value]))
    })

    const handleChangeRange = val => {
      minDate.value = val.minDate
      maxDate.value = val.maxDate
      rangeState.value = val.rangeState
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
    }

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const handleRangePick = (val, close = true) => {
      // const defaultTime = this.defaultTime || []
      // const minDate_ = modifyWithTimeString(val.minDate, defaultTime[0])
      // const maxDate_ = modifyWithTimeString(val.maxDate, defaultTime[1])
      //todo
      const minDate_ = val.minDate
      const maxDate_ = val.maxDate

      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close || showTime.value) return
      handleConfirm()
    }

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
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

    const pickerBase = inject('EP_PICKER_BASE') as any
    // pickerBase.hub.emit('SetPickerOption', ['isValidValue', isValidValue])
    // pickerBase.hub.emit('SetPickerOption', ['formatToString', formatToString])
    const { shortcuts, disabledDate, cellClassName } = pickerBase.props

    return {
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
      defaultValue: new Date(),
    }
  },

  // data() {
  //   return {
  //     value: [],
  //     defaultValue: null,
  //     defaultTime: null,
  //     visible: '',
  //     disabledDate: '',
  //     cellClassName: '',
  //     format: '',
  //     arrowControl: false,
  //     unlinkPanels: false,
  //     dateUserInput: {
  //       min: null,
  //       max: null,
  //     },
  //     timeUserInput: {
  //       min: null,
  //       max: null,
  //     },
  //   }
  // },

  // computed: {


  //   minVisibleDate() {
  //     if (this.dateUserInput.min !== null) return this.dateUserInput.min
  //     if (this.minDate) return formatDate(this.minDate, this.dateFormat)
  //     return ''
  //   },

  //   maxVisibleDate() {
  //     if (this.dateUserInput.max !== null) return this.dateUserInput.max
  //     if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.dateFormat)
  //     return ''
  //   },

  //   minVisibleTime() {
  //     if (this.timeUserInput.min !== null) return this.timeUserInput.min
  //     if (this.minDate) return formatDate(this.minDate, this.timeFormat)
  //     return ''
  //   },

  //   maxVisibleTime() {
  //     if (this.timeUserInput.max !== null) return this.timeUserInput.max
  //     if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.timeFormat)
  //     return ''
  //   },

  //   timeFormat() {
  //     if (this.format) {
  //       return extractTimeFormat(this.format)
  //     } else {
  //       return 'HH:mm:ss'
  //     }
  //   },

  //   dateFormat() {
  //     if (this.format) {
  //       return extractDateFormat(this.format)
  //     } else {
  //       return 'yyyy-MM-dd'
  //     }
  //   },


  // },

  // watch: {
  //   minDate(val) {
  //     this.dateUserInput.min = null
  //     this.timeUserInput.min = null
  //     this.$nextTick(() => {
  //       if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
  //         const format = 'HH:mm:ss'
  //         this.$refs.maxTimePicker.selectableRange = [
  //           [
  //             parseDate(formatDate(this.minDate, format), format),
  //             parseDate('23:59:59', format),
  //           ],
  //         ]
  //       }
  //     })
  //     if (val && this.$refs.minTimePicker) {
  //       this.$refs.minTimePicker.date = val
  //       this.$refs.minTimePicker.value = val
  //     }
  //   },

  //   maxDate(val) {
  //     this.dateUserInput.max = null
  //     this.timeUserInput.max = null
  //     if (val && this.$refs.maxTimePicker) {
  //       this.$refs.maxTimePicker.date = val
  //       this.$refs.maxTimePicker.value = val
  //     }
  //   },

  //   minTimePickerVisible(val) {
  //     if (val) {
  //       this.$nextTick(() => {
  //         this.$refs.minTimePicker.date = this.minDate
  //         this.$refs.minTimePicker.value = this.minDate
  //         this.$refs.minTimePicker.adjustSpinners()
  //       })
  //     }
  //   },

  //   maxTimePickerVisible(val) {
  //     if (val) {
  //       this.$nextTick(() => {
  //         this.$refs.maxTimePicker.date = this.maxDate
  //         this.$refs.maxTimePicker.value = this.maxDate
  //         this.$refs.maxTimePicker.adjustSpinners()
  //       })
  //     }
  //   },

  //   value(newVal) {
  //     if (!newVal) {
  //       this.minDate = null
  //       this.maxDate = null
  //     } else if (Array.isArray(newVal)) {
  //       this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null
  //       this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null
  //       if (this.minDate) {
  //         leftDate.value = this.minDate
  //         if (props.unlinkPanels && this.maxDate) {
  //           const minDateYear = this.minDate.getFullYear()
  //           const minDateMonth = this.minDate.getMonth()
  //           const maxDateYear = this.maxDate.getFullYear()
  //           const maxDateMonth = this.maxDate.getMonth()
  //           rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth
  //             ? nextMonth(this.maxDate)
  //             : this.maxDate
  //         } else {
  //           rightDate.value = nextMonth(leftDate.value)
  //         }
  //       } else {
  //         leftDate.value = calcDefaultValue(this.defaultValue)[0]
  //         rightDate.value = nextMonth(leftDate.value)
  //       }
  //     }
  //   },

  //   defaultValue(val) {
  //     if (!Array.isArray(this.value)) {
  //       const [left, right] = calcDefaultValue(val)
  //       leftDate.value = left
  //       rightDate.value = val && val[1] && props.unlinkPanels
  //         ? right
  //         : nextMonth(leftDate.value)
  //     }
  //   },
  // },

  // methods: {
  //   handleClear() {
  //     this.minDate = null
  //     this.maxDate = null
  //     leftDate.value = calcDefaultValue(this.defaultValue)[0]
  //     rightDate.value = nextMonth(leftDate.value)
  //     this.$emit('pick', null)
  //   },


  //   handleDateInput(value, type) {
  //     this.dateUserInput[type] = value
  //     if (value.length !== this.dateFormat.length) return
  //     const parsedValue = parseDate(value, this.dateFormat)

  //     if (parsedValue) {
  //       if (typeof this.disabledDate === 'function' &&
  //           this.disabledDate(new Date(parsedValue))) {
  //         return
  //       }
  //       if (type === 'min') {
  //         this.minDate = modifyDate(this.minDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate())
  //         leftDate.value = new Date(parsedValue)
  //         if (!props.unlinkPanels) {
  //           rightDate.value = nextMonth(leftDate.value)
  //         }
  //       } else {
  //         this.maxDate = modifyDate(this.maxDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate())
  //         rightDate.value = new Date(parsedValue)
  //         if (!props.unlinkPanels) {
  //           leftDate.value = prevMonth(parsedValue)
  //         }
  //       }
  //     }
  //   },

  //   handleDateChange(value, type) {
  //     const parsedValue = parseDate(value, this.dateFormat)
  //     if (parsedValue) {
  //       if (type === 'min') {
  //         this.minDate = modifyDate(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate())
  //         if (this.minDate > this.maxDate) {
  //           this.maxDate = this.minDate
  //         }
  //       } else {
  //         this.maxDate = modifyDate(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate())
  //         if (this.maxDate < this.minDate) {
  //           this.minDate = this.maxDate
  //         }
  //       }
  //     }
  //   },

  //   handleTimeInput(value, type) {
  //     this.timeUserInput[type] = value
  //     if (value.length !== this.timeFormat.length) return
  //     const parsedValue = parseDate(value, this.timeFormat)

  //     if (parsedValue) {
  //       if (type === 'min') {
  //         this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds())
  //         this.$nextTick(_ => this.$refs.minTimePicker.adjustSpinners())
  //       } else {
  //         this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds())
  //         this.$nextTick(_ => this.$refs.maxTimePicker.adjustSpinners())
  //       }
  //     }
  //   },

  //   handleTimeChange(value, type) {
  //     const parsedValue = parseDate(value, this.timeFormat)
  //     if (parsedValue) {
  //       if (type === 'min') {
  //         this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds())
  //         if (this.minDate > this.maxDate) {
  //           this.maxDate = this.minDate
  //         }
  //         this.$refs.minTimePicker.value = this.minDate
  //         this.minTimePickerVisible = false
  //       } else {
  //         this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds())
  //         if (this.maxDate < this.minDate) {
  //           this.minDate = this.maxDate
  //         }
  //         this.$refs.maxTimePicker.value = this.minDate
  //         this.maxTimePickerVisible = false
  //       }
  //     }
  //   },



  //   handleMinTimePick(value, visible, first) {
  //     this.minDate = this.minDate || new Date()
  //     if (value) {
  //       this.minDate = modifyTime(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds())
  //     }

  //     if (!first) {
  //       this.minTimePickerVisible = visible
  //     }

  //     if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
  //       this.maxDate = new Date(this.minDate)
  //     }
  //   },



  //   handleMaxTimePick(value, visible, first) {
  //     if (this.maxDate && value) {
  //       this.maxDate = modifyTime(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds())
  //     }

  //     if (!first) {
  //       this.maxTimePickerVisible = visible
  //     }

  //     if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
  //       this.minDate = new Date(this.maxDate)
  //     }
  //   },

  //   resetView() {
  //     // NOTE: this is a hack to reset {min, max}Date on picker open.
  //     // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
  //     //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
  //     if (this.minDate && this.maxDate == null) this.rangeState.selecting = false
  //     this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null
  //     this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null
  //   },
  // },
})
</script>
