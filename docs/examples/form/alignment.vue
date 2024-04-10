<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button value="left">Left</el-radio-button>
    <el-radio-button value="right">Right</el-radio-button>
    <el-radio-button value="top">Top</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
