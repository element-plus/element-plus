<template>
  <el-row style="border-bottom: 1px solid var(--el-border-color)">
    <el-col
      :span="12"
      class="text-center pb-6"
      style="border-right: 1px solid var(--el-border-color)"
    >
      <el-text class="display-block my-3">Week</el-text>
      <el-date-picker
        v-model="value1"
        type="week"
        format="[Week] ww"
        placeholder="Pick a week"
      />
    </el-col>
    <el-col :span="12" class="text-center">
      <el-text class="display-block my-3">Month</el-text>
      <el-date-picker
        v-model="value2"
        type="month"
        placeholder="Pick a month"
      />
    </el-col>
  </el-row>
  <el-row>
    <el-col
      :span="12"
      class="text-center pb-6"
      style="border-right: 1px solid var(--el-border-color)"
    >
      <el-text class="display-block my-3">Year</el-text>
      <el-date-picker v-model="value3" type="year" placeholder="Pick a year" />
    </el-col>
    <el-col :span="12" class="text-center">
      <el-text class="display-block my-3">Dates</el-text>
      <el-date-picker
        v-model="value4"
        type="dates"
        placeholder="Pick one or more dates"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
