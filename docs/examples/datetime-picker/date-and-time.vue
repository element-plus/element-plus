<template>
  <el-row>
    <el-col :span="8" class="text-center">
      <el-text class="block my-3">Default</el-text>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </el-col>
    <el-col :span="8" class="text-center">
      <el-text class="block my-3">With shortcuts</el-text>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Select date and time"
        :shortcuts="shortcuts"
      />
    </el-col>
    <el-col :span="8" class="text-center">
      <el-text class="block my-3">With default time</el-text>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Select date and time"
        :default-time="defaultTime"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>
