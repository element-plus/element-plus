<template>
  <el-switch
    v-model="value"
    class="mb-2"
    active-text="horizontal"
    inactive-text="vertical"
  />
  <div>
    <el-radio-group
      v-model="radio1"
      :direction="value ? 'horizontal' : 'vertical'"
    >
      <el-radio-button label="New York" value="New York" />
      <el-radio-button label="Washington" value="Washington" />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>

  <div style="margin-top: 20px">
    <el-radio-group
      v-model="radio2"
      :direction="value ? 'horizontal' : 'vertical'"
    >
      <el-radio :value="3">Option A</el-radio>
      <el-radio :value="6">Option B</el-radio>
      <el-radio :value="9">Option C</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const radio1 = ref('New York')
const radio2 = ref(3)
</script>
