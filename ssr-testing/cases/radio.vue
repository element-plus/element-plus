<template>
  <div>
    <el-radio v-model="radio1" value="1" size="large">Option 1</el-radio>
    <el-radio v-model="radio1" value="2" size="large">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio2" value="1">Option 1</el-radio>
    <el-radio v-model="radio2" value="2">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio3" value="1" size="small">Option 1</el-radio>
    <el-radio v-model="radio3" value="2" size="small">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio3" value="1" size="small" disabled
      >Option 1</el-radio
    >
    <el-radio v-model="radio3" value="2" size="small" disabled
      >Option 2</el-radio
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
