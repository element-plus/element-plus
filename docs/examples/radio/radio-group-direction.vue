<template>
  <div>
    <el-radio-group v-model="direction">
      <el-radio-button label="horizontal" value="horizontal" />
      <el-radio-button label="vertical" value="vertical" />
    </el-radio-group>
  </div>

  <div style="margin-top: 20px">
    <el-radio-group v-model="radio" :direction="direction">
      <el-radio :value="3">Option A</el-radio>
      <el-radio :value="6">Option B</el-radio>
      <el-radio :value="9">Option C</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { RadioGroupProps } from 'element-plus'

const direction = ref<RadioGroupProps['direction']>('vertical')
const radio = ref(3)
</script>
