<template>
  <div
    :class="[
      nsPickerPanel.b(),
      nsDateRangePicker.b(),
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
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
        <div
          :class="[
            'is-left',
            nsPickerPanel.e('content'),
            nsDateRangePicker.e('content'),
          ]"
        >
          <div :class="nsDateRangePicker.e('header')">
            <button
              type="button"
              :class="['d-arrow-left', nsPickerPanel.e('icon-btn')]"
              @click="leftPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[
                'd-arrow-right',
                nsPickerPanel.e('icon-btn'),
                { 'is-disabled': !enableYearArrow },
              ]"
              @click="leftNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <month-table
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
        <div
          :class="[
            'is-right',
            nsPickerPanel.e('content'),
            nsDateRangePicker.e('content'),
          ]"
        >
          <div :class="nsDateRangePicker.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[
                'd-arrow-left',
                nsPickerPanel.e('icon-btn'),
                { 'is-disabled': !enableYearArrow },
              ]"
              @click="rightPrevYear"
            >
              <el-icon><d-arrow-left /></el-icon>
            </button>
            <button
              type="button"
              :class="['d-arrow-right', nsPickerPanel.e('icon-btn')]"
              @click="rightNextYear"
            >
              <el-icon><d-arrow-right /></el-icon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <month-table
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

<script lang="ts">
import { computed, defineComponent, inject, ref, toRef, watch } from 'vue'
import dayjs from 'dayjs'
import ElIcon from '@element-plus/components/icon'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { panelMonthRangeProps } from '../props/panel-month-range'
import MonthTable from './basic-month-table.vue'

import type { Dayjs } from 'dayjs'

export default defineComponent({
  components: { MonthTable, ElIcon, DArrowLeft, DArrowRight },

  props: panelMonthRangeProps,

  emits: ['pick', 'set-picker-option'],

  setup(props, ctx) {
    const { t, lang } = useLocale()
    const nsPickerPanel = useNamespace('picker-panel')
    const nsDateRangePicker = useNamespace('date-range-picker')
    const leftDate = ref(dayjs().locale(lang.value))
    const rightDate = ref(dayjs().locale(lang.value).add(1, 'year'))

    const hasShortcuts = computed(() => !!shortcuts.length)

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

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t('el.datepicker.year')}`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t('el.datepicker.year')}`
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const rightYear = computed(() => {
      return rightDate.value.year() === leftDate.value.year()
        ? leftDate.value.year() + 1
        : rightDate.value.year()
    })

    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1
    })

    const minDate = ref(null)
    const maxDate = ref(null)

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const handleChangeRange = (val) => {
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

    const isValidValue = (value) => {
      return (
        Array.isArray(value) &&
        value &&
        value[0] &&
        value[1] &&
        value[0].valueOf() <= value[1].valueOf()
      )
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const onSelect = (selecting) => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const formatToString = (value) => {
      return value.map((_) => _.format(format))
    }

    const getDefaultValue = () => {
      let start: Dayjs
      if (Array.isArray(defaultValue.value)) {
        const left = dayjs(defaultValue.value[0])
        let right = dayjs(defaultValue.value[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'year')
        }
        return [left, right]
      } else if (defaultValue.value) {
        start = dayjs(defaultValue.value)
      } else {
        start = dayjs()
      }
      start = start.locale(lang.value)
      return [start, start.add(1, 'year')]
    }

    // pickerBase.hub.emit('SetPickerOption', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    const pickerBase = inject('EP_PICKER_BASE') as any
    const { shortcuts, disabledDate, format } = pickerBase.props
    const defaultValue = toRef(pickerBase.props, 'defaultValue')

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
                ? maxDate.value.add(1, 'year')
                : maxDate.value
          } else {
            rightDate.value = leftDate.value.add(1, 'year')
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
      nsDateRangePicker,
      nsPickerPanel,
    }
  },
})
</script>
