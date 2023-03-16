<template>
  <el-space direction="vertical" class="w-60%" fill size="large">
    <el-radio-group v-model="radio1" size="large">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
    <el-radio-group v-model="radio2">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" disabled />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>
