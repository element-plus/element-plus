<template>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <span>{{ getYearLabel(Number(date.split(' ')[0])) }}</span>
      <el-button-group>
        <el-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </el-button>
        <el-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </el-button>
        <el-button size="small" @click="selectDate('today')">Today</el-button>
        <el-button size="small" @click="selectDate('next-month')">
          Next Month
        </el-button>
        <el-button size="small" @click="selectDate('next-year')">
          Next Year
        </el-button>
      </el-button-group>
    </template>
    <template #date-cell="{ data: { isSelected, date } }">
      <div
        :class="[
          { ['is-selected']: isSelected },
          'grid place-items-center h-100%',
        ]"
      >
        <span>{{ date.getDate() }}</span>
        <span>{{ getLunarDate(date) }}</span>
      </div>
    </template>
  </el-calendar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HolidayUtil, Lunar } from 'lunar-typescript'
import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()

const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
const getYearLabel = (year: number) => {
  const d = Lunar.fromDate(new Date(year + 1, 0))
  return `${d.getYearInChinese()}年（${d.getYearInGanZhi()}${d.getYearShengXiao()}年）`
}
const getLunarDate = (date: Date) => {
  const d = Lunar.fromDate(date)
  const lunar = d.getDayInChinese()
  const solarTerm = d.getJieQi()
  const h = HolidayUtil.getHoliday(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  )
  const displayHoliday =
    h?.getTarget() === h?.getDay() ? h?.getName() : undefined

  return displayHoliday || solarTerm || lunar
}
</script>
<style>
.is-selected {
  color: #1989fa;
}
</style>
