<template>
  <el-select v-model="value" multiple placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in colors"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <div class="flex items-center">
        <el-tag :color="item.value" style="margin-right: 8px" size="small" />
        <span :style="{ color: item.value }">{{ item.label }}</span>
      </div>
    </el-option>
    <template #tag>
      <el-tag v-for="color in value" :key="color" :color="color" />
    </template>
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
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

<style scoped>
.el-tag {
  border: none;
  aspect-ratio: 1;
}
</style>
