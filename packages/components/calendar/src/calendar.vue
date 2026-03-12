<template>
  <div :class="ns.b()">
    <div :class="ns.e('header')">
      <slot name="header" :date="i18nDate">
        <div :class="ns.e('title')">{{ i18nDate }}</div>
        <div
          v-if="validatedRange.length === 0 && controllerType === 'button'"
          :class="ns.e('button-group')"
        >
          <g-button-group>
            <g-button size="small" @click="selectDate('prev-month')">
              {{ t('g.datepicker.prevMonth') }}
            </g-button>
            <g-button size="small" @click="selectDate('today')">
              {{ t('g.datepicker.today') }}
            </g-button>
            <g-button size="small" @click="selectDate('next-month')">
              {{ t('g.datepicker.nextMonth') }}
            </g-button>
          </g-button-group>
        </div>
        <div
          v-else-if="validatedRange.length === 0 && controllerType === 'select'"
          :class="ns.e('select-controller')"
        >
          <select-controller
            :date="date"
            :formatter="formatter"
            @date-change="handleDateChange"
          />
        </div>
      </slot>
    </div>
    <div v-if="validatedRange.length === 0" :class="ns.e('body')">
      <date-table :date="date" :selected-day="realSelectedDay" @pick="pickDay">
        <template v-if="$slots['date-cell']" #date-cell="data">
          <slot name="date-cell" v-bind="data" />
        </template>
      </date-table>
    </div>
    <div v-else :class="ns.e('body')">
      <date-table
        v-for="(range_, index) in validatedRange"
        :key="index"
        :date="range_[0]"
        :selected-day="realSelectedDay"
        :range="range_"
        :hide-header="index !== 0"
        @pick="pickDay"
      >
        <template v-if="$slots['date-cell']" #date-cell="data">
          <slot name="date-cell" v-bind="data" />
        </template>
      </date-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { GButton, GButtonGroup } from '@element-plus/components/button'
import { useLocale, useNamespace } from '@element-plus/hooks'
import DateTable from './date-table.vue'
import { useCalendar } from './use-calendar'
import { calendarEmits } from './calendar'
import SelectController from './select-controller.vue'

import type { CalendarProps } from './calendar'

const ns = useNamespace('calendar')

const COMPONENT_NAME = 'GCalendar'
defineOptions({
  name: COMPONENT_NAME,
})

const props = withDefaults(defineProps<CalendarProps>(), {
  controllerType: 'button',
})
const emit = defineEmits(calendarEmits)

const {
  calculateValidatedDateRange,
  date,
  pickDay,
  realSelectedDay,
  selectDate,
  validatedRange,
  handleDateChange,
} = useCalendar(props, emit, COMPONENT_NAME)

const { t } = useLocale()

const i18nDate = computed(() => {
  const pickedMonth = `g.datepicker.month${date.value.format('M')}`
  return `${date.value.year()} ${t('g.datepicker.year')} ${t(pickedMonth)}`
})

defineExpose({
  /** @description currently selected date */
  selectedDay: realSelectedDay,
  /** @description select a specific date */
  pickDay,
  /** @description select date */
  selectDate,
  /** @description Calculate the validate date range according to the start and end dates */
  calculateValidatedDateRange,
})
</script>
