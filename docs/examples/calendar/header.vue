<template>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <el-button-group>
        <el-button size="mini" @click="selectDate('prev-year')"
          >Previous Year</el-button
        >
        <el-button size="mini" @click="selectDate('prev-month')"
          >Previous Month</el-button
        >
        <el-button size="mini" @click="selectDate('today')">Today</el-button>
        <el-button size="mini" @click="selectDate('next-month')"
          >Next Month</el-button
        >
        <el-button size="mini" @click="selectDate('next-year')"
          >Next Year</el-button
        >
      </el-button-group>
    </template>
  </el-calendar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const calendar = ref()
    const selectDate = (val: string) => {
      calendar.value.selectDate(val)
    }

    return {
      calendar,
      selectDate,
    }
  },
})
</script>
