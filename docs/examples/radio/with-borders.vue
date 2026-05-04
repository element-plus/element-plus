<template>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio value="1" size="large" border>Option A</el-radio>
      <el-radio value="2" size="large" border>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2">
      <el-radio value="1" border>Option A</el-radio>
      <el-radio value="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio value="1" border>Option A</el-radio>
      <el-radio value="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="small" disabled>
      <el-radio value="1" border>Option A</el-radio>
      <el-radio value="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
