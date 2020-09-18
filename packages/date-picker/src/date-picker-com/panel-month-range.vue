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
} from '../time-picker-com/time-picker-utils'
import { t } from '@element-plus/locale'
import MonthTable from './basic-month-table.vue'
import {
  defineComponent,
  computed,
  ref,
  PropType,
  watch,
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
    shortcuts: {
      type: Array,
      default: () => ([]),
    },
    parsedValue: {
      type: Date as PropType<Date>,
      default: '',
    },
  },

  emits: ['pick'],

  setup(props, ctx) {
    const leftDate = ref(new Date())
    const rightDate = ref(nextYear(new Date()))
    const hasShortcuts = computed(() => !!props.shortcuts.length)
    const handleShortcutClick = sc => {
      if (sc.onClick) {
        sc.onClick(ctx)
      }
    }
    const leftPrevYear = () => {
      leftDate.value = prevYear(leftDate.value)
      if (!props.unlinkPanels) {
        rightDate.value = prevYear(rightDate.value)
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = nextYear(leftDate.value)
      }
      rightDate.value = nextYear(rightDate.value)
    }

    const leftNextYear = () => {
      leftDate.value = nextYear(leftDate.value)
    }

    const rightPrevYear = () =>{
      rightDate.value = prevYear(rightDate.value)
    }
    const leftLabel = computed(() => {
      return `${leftDate.value.getFullYear()} ${t('el.datepicker.year')}`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.getFullYear()} ${t('el.datepicker.year')}`
    })

    const leftYear = computed(() =>{
      return leftDate.value.getFullYear()
    })

    const rightYear = computed(() => {
      return rightDate.value.getFullYear() === leftDate.value.getFullYear() ? leftDate.value.getFullYear() + 1 : rightDate.value.getFullYear()
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
      } else if (Array.isArray(newVal)) {
        minDate.value = isDate(newVal[0]) ? new Date(newVal[0]) : null
        maxDate.value = isDate(newVal[1]) ? new Date(newVal[1]) : null
        if (minDate.value) {
          leftDate.value = minDate.value
          if (props.unlinkPanels && maxDate.value) {
            const minDateYear = minDate.value.getFullYear()
            const maxDateYear = maxDate.value.getFullYear()
            rightDate.value = minDateYear === maxDateYear
              ? nextYear(maxDate.value)
              : maxDate.value
          } else {
            rightDate.value = nextYear(leftDate.value)
          }
        } else {
          // todo calcDefaultValue(props.defaultValue)[0]
          leftDate.value = calcDefaultValue('')[0]
          rightDate.value = nextYear(leftDate.value)
        }
      }
    })

    const rangeState = ref({
      endDate: null,
      row: null,
      column: null,
      selecting: false,
    })

    const handleChangeRange = val => {
      minDate.value = val.minDate
      maxDate.value = val.maxDate
      rangeState.value = val.rangeState
    }

    const handleRangePick = (val, close = true) => {
      // const defaultTime = props.defaultTime || []
      const defaultTime = []
      const minDate_ = modifyWithTimeString(val.minDate, defaultTime[0])
      const maxDate_ = modifyWithTimeString(val.maxDate, defaultTime[1])
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
          isDate(value[0]) && isDate(value[1]) &&
          value[0].getTime() <= value[1].getTime()
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
    }

    return {
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
    }
  },
})
</script>
