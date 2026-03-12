<template>
  <g-select
    :model-value="yearValue"
    size="small"
    :class="nsSelect.e('year')"
    :validate-event="false"
    :options="yearOptions"
    @change="handleYearChange"
  />
  <g-select
    :model-value="monthValue"
    size="small"
    :class="nsSelect.e('month')"
    :validate-event="false"
    :options="monthOptions"
    @change="handleMonthChange"
  />
  <g-button size="small" @click="selectToday">
    {{ t('g.datepicker.today') }}
  </g-button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import GSelect from '@element-plus/components/select'
import { GButton } from '@element-plus/components/button'
import { isFunction } from '@element-plus/utils'
import { selectControllerEmits } from './select-controller'

import type { SelectControllerProps } from './select-controller'

defineOptions({
  name: 'SelectController',
})

const props = defineProps<SelectControllerProps>()
const emit = defineEmits(selectControllerEmits)

const nsSelect = useNamespace('calendar-select')
const { t, lang } = useLocale()

const monthOptions = Array.from({ length: 12 }, (_, index) => {
  const actualMonth = index + 1
  const label = isFunction(props.formatter)
    ? props.formatter(actualMonth, 'month')
    : actualMonth
  return {
    value: actualMonth,
    label,
  }
})

const yearValue = computed(() => props.date.year())
const monthValue = computed(() => props.date.month() + 1)
// Get an array of 20 years
const yearOptions = computed(() => {
  const years = []
  for (let i = -10; i < 10; i++) {
    const year = yearValue.value + i
    if (year > 0) {
      const label = isFunction(props.formatter)
        ? props.formatter(year, 'year')
        : year
      years.push({ value: year, label })
    }
  }
  return years
})

const handleYearChange = (year: number) => {
  emit(
    'date-change',
    dayjs(new Date(year, monthValue.value - 1, 1)).locale(lang.value)
  )
}

const handleMonthChange = (month: number) => {
  emit(
    'date-change',
    dayjs(new Date(yearValue.value, month - 1, 1)).locale(lang.value)
  )
}

const selectToday = () => {
  emit('date-change', 'today')
}
</script>
