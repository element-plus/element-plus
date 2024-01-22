<template>
  <div class="mb-2 flex items-center text-sm">
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">Option 1</el-radio>
      <el-radio label="2" size="large">Option 2</el-radio>
    </el-radio-group>
  </div>
  <div class="my-2 flex items-center text-sm">
    <el-radio-group v-model="radio2" class="ml-4">
      <el-radio label="1">Option 1</el-radio>
      <el-radio label="2">Option 2</el-radio>
    </el-radio-group>
  </div>
  <div class="my-4 flex items-center text-sm">
    <el-radio-group v-model="radio3" class="ml-4">
      <el-radio label="1" size="small">Option 1</el-radio>
      <el-radio label="2" size="small">Option 2</el-radio>
    </el-radio-group>
  </div>
  <div class="mb-2 flex items-center text-sm">
    <el-radio-group v-model="radio3" disabled class="ml-4">
      <el-radio label="1" size="small">Option 1</el-radio>
      <el-radio label="2" size="small">Option 2</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
<style scoped>
.mb-2 {
  margin-bottom: 0.5rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.ml-4 {
  margin-left: 1rem;
}

.my-2 {
  margin-top: 0.5rem; /* 8px */
  margin-bottom: 0.5rem; /* 8px */
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
