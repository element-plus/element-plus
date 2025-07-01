<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const options2 = [
  {
    id: 1,
    label: 'Option1',
  },
  {
    id: 2,
    label: 'Option2',
  },
  {
    id: 3,
    label: 'Option3',
  },
  {
    id: 4,
    label: 'Option4',
  },
  {
    id: 5,
    label: 'Option5',
  },
]
</script>
