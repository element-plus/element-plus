<template>
  <div>
    <el-radio-group v-model="radio1" size="large" fill="#6cf">
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group
      v-model="radio2"
      text-color="#626aef"
      fill="rgb(239, 240, 253)"
    >
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" disabled />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>
