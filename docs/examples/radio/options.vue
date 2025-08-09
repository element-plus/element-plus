<template>
  <el-radio-group v-model="radio" :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)

const options = [
  {
    value: 3,
    label: 'Option A',
  },
  {
    value: 6,
    label: 'Option B',
  },
  {
    value: 9,
    label: 'Option C',
  },
]
</script>
