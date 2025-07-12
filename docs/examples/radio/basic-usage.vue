<template>
  <div class="mb-2 ml-4">
    {{ radio1 }}
    <el-radio-group
      v-model="radio1"
      :options
      :props="{ label: 'label', value: 'id' }"
    />
  </div>
  <div class="my-2 ml-4">
    <el-radio-group v-model="radio2">
      <el-radio value="1">Option 1</el-radio>
      <el-radio value="2">Option 2</el-radio>
    </el-radio-group>
  </div>
  <div class="my-4 ml-4">
    <el-radio-group v-model="radio3">
      <el-radio value="1" size="small">Option 1</el-radio>
      <el-radio value="2" size="small">Option 2</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const options = [
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
