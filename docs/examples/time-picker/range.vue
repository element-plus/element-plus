<template>
  <el-time-picker
    v-model="value1"
    is-range
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time"
    class="mr-2"
  />
  <el-time-picker
    v-model="value2"
    is-range
    arrow-control
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
const value2 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
</script>
