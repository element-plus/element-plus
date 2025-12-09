<template>
  <el-select
    :model-value="yearValue"
    size="small"
    :class="nsSelect.e('year')"
    :validate-event="false"
    :options="yearOptions"
    @change="handleYearChange"
  >
  </el-select>
  <el-select
    :model-value="monthValue"
    size="small"
    :class="nsSelect.e('month')"
    :validate-event="false"
    :options="monthOptions"
    @change="handleMonthChange"
  >
  </el-select>
  <el-button size="small" @click="selectToday">
    {{ t('el.datepicker.today') }}
  </el-button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElSelect from '@element-plus/components/select'
import { ElButton } from '@element-plus/components/button'
import {
  selectControllerEmits,
  selectControllerProps,
} from './select-controller'

defineOptions({
  name: 'SelectController',
})

const props = defineProps(selectControllerProps)
const emit = defineEmits(selectControllerEmits)

const nsSelect = useNamespace('calendar-select')
const { t } = useLocale()

const monthOptions = Array.from({ length: 12 }, (_, index) => ({
  value: index + 1,
  label: index + 1,
}))

const yearValue = computed(() => props.date.year())
const monthValue = computed(() => props.date.month() + 1)
// Get an array of 20 years
const yearOptions = computed(() => {
  const years = []
  for (let i = -10; i < 10; i++) {
    const year = yearValue.value + i
    if (year > 0) {
      years.push({ value: year, label: year })
    }
  }
  return years
})

const handleYearChange = (year: number) => {
  emit('date-change', dayjs(new Date(year, monthValue.value - 1, 1)))
}

const handleMonthChange = (month: number) => {
  emit('date-change', dayjs(new Date(yearValue.value, month - 1, 1)))
}

const selectToday = () => {
  emit('date-change', 'today')
}
</script>
