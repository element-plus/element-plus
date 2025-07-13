<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>Type:</span>
        <el-select v-model="type">
          <el-option
            v-for="optionType in types"
            :key="optionType"
            :value="optionType"
          />
        </el-select>
      </div>
    </div>
    <el-divider />
    <div class="flex justify-center">
      <el-date-picker-panel v-model="date" :type="type" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

import type { DatePickerType } from 'element-plus'

const date = ref()
const type = ref<DatePickerType>('date')

watchEffect(() => {
  date.value = undefined
})

const types: DatePickerType[] = [
  'year',
  'years',
  'month',
  'months',
  'date',
  'dates',
  'week',
  'datetime',
  'datetimerange',
  'daterange',
  'monthrange',
  'yearrange',
]
</script>
