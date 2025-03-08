<template>
  <div>
    <el-segmented v-model="value" :options="options" block />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')

const options = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sunday long long long long long long long',
]
</script>
