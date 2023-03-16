<template>
  <el-text class="block my-2">Component value：{{ value }}</el-text>
  <el-date-picker
    v-model="value"
    type="daterange"
    start-placeholder="Start date"
    end-placeholder="End date"
    :default-time="defaultTime"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
</script>
