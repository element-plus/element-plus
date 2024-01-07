<template>
  <el-select-v2
    v-model="value"
    multiple
    placeholder="Select"
    :options="colors"
    style="width: 240px"
  >
    <template #tag>
      <el-tag
        v-for="color in value"
        :key="color.value"
        :color="color"
        :style="{ color: color, width: '24px' }"
      />
    </template>
  </el-select-v2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])
const colors = [
  {
    value: '#E63415',
    label: 'red',
  },
  {
    value: '#FF6600',
    label: 'orange',
  },
  {
    value: '#FFDE0A',
    label: 'yellow',
  },
  {
    value: '#1EC79D',
    label: 'green',
  },
  {
    value: '#14CCCC',
    label: 'cyan',
  },
  {
    value: '#4167F0',
    label: 'blue',
  },
  {
    value: '#6222C9',
    label: 'purple',
  },
]
colors.forEach((color) => {
  value.value.push(color.value)
})
</script>
