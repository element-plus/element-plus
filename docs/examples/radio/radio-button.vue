<template>
  <div>
    <el-radio-group v-model="radio" size="large" fill="#6cf">
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group
      v-model="radio"
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
    <el-radio-group v-model="radio" size="small">
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" disabled />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('New York')
</script>
