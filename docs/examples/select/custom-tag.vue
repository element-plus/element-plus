<template>
  <el-select v-model="value" multiple placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in colors"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :style="{ color: item.value }"
    />
    <template #tag>
      <el-tag
        v-for="color in value"
        :key="color.value"
        :color="color"
        :style="{ color: color, width: '24px' }"
      />
    </template>
  </el-select>
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
