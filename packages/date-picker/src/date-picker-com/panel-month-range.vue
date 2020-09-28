<template>
  <transition name="el-zoom-in-top">
    <div
      class="el-picker-panel el-date-range-picker"
      :class="[{
        'has-sidebar': $slots.sidebar || hasShortcuts
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
          <div class="el-picker-panel__content el-date-range-picker__content is-left">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"
                @click="leftPrevYear"
              ></button>
              <button
                v-if="unlinkPanels"
                type="button"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"
                @click="leftNextYear"
              ></button>
              <div>{{ leftLabel }}</div>
            </div>
            <month-table
              selection-mode="range"
              :date="leftDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
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
                type="button"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"
                @click="rightNextYear"
              ></button>
              <div>{{ rightLabel }}</div>
            </div>
            <month-table
              selection-mode="range"
              :date="rightDate"
              :default-value="defaultValue"
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
  </transition>
</template>

<script lang="ts">
import {
  isDate,
  modifyWithTimeString,
  prevYear,
  nextYear,
  nextMonth,
} from './time-picker-utils'
import { t } from '@element-plus/locale'
import MonthTable from './basic-month-table.vue'
import dayjs, { Dayjs } from 'dayjs'
import {
  defineComponent,
  computed,
  ref,
  PropType,
  watch,
  inject,
} from 'vue'

const calcDefaultValue = defaultValue => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])]
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))]
  } else {
    return [new Date(), nextMonth(new Date())]
  }
}
export default defineComponent({

  components: { MonthTable },

  props:{
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array as PropType<Dayjs[]>,
    },
  },

  emits: ['pick'],

  setup(props, ctx) {
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'year'))

    const hasShortcuts = computed(() => !!shortcuts.length)

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = rightDate.value.subtract(1, 'year')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
      }
      rightDate.value = rightDate.value.add(1, 'year')
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const rightPrevYear = () =>{
      rightDate.value = rightDate.value.subtract(1, 'year')
    }
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t('el.datepicker.year')}`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t('el.datepicker.year')}`
    })

    const leftYear = computed(() =>{
      return leftDate.value.year()
    })

    const rightYear = computed(() => {
      return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year()
    })

    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1
    })

    const minDate = ref(null)
    const maxDate = ref(null)

    watch(() => props.parsedValue, newVal => {
      if (!newVal) {
        minDate.value = null
        maxDate.value = null
        return
      }
      minDate.value = newVal[0]
      maxDate.value = newVal[1]
      if (minDate.value) {
        leftDate.value = minDate.value
        if (props.unlinkPanels && maxDate.value) {
          const minDateYear = minDate.value.year()
          const maxDateYear = maxDate.value.year()
          rightDate.value = minDateYear === maxDateYear
            ? maxDate.value.add(1, 'year')
            : maxDate.value
        } else {
          rightDate.value = leftDate.value.add(1, 'year')
        }
      }
    }, { immediate: true })

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const handleRangePick = (val, close = true) => {
      // const defaultTime = props.defaultTime || []
      // const minDate_ = modifyWithTimeString(val.minDate, defaultTime[0])
      // const maxDate_ = modifyWithTimeString(val.maxDate, defaultTime[1])
      // todo
      const minDate_ = val.minDate
      const maxDate_ = val.maxDate
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close) return
      handleConfirm()
    }

    const isValidValue = value => {
      return Array.isArray(value) &&
          value && value[0] && value[1] &&
          value[0].valueOf() <= value[1].valueOf()
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const formatToString = value => {
      return value.map(_=> _.format(format))
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        return [dayjs(defaultValue[0]), dayjs(defaultValue[1])]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'month')]
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    // pickerBase.hub.emit('SetPickerOption', ['isValidValue', isValidValue])
    pickerBase.hub.emit('SetPickerOption', ['formatToString', formatToString])
    pickerBase.hub.emit('SetPickerOption', ['getDefaultValue', getDefaultValue])
    const { shortcuts, disabledDate, format, defaultValue } = pickerBase.props

    return {
      shortcuts,
      disabledDate,
      onSelect,
      handleRangePick,
      rangeState,
      handleChangeRange,
      minDate,
      maxDate,
      enableYearArrow,
      leftLabel,
      rightLabel,
      leftNextYear,
      leftPrevYear,
      rightNextYear,
      rightPrevYear,
      t,
      leftDate,
      rightDate,
      hasShortcuts,
      handleShortcutClick,
      defaultValue: new Date(),
    }
  },
})
</script>
