<template>
  <el-text tag="p" class="mb-2">Basic text button</el-text>
  <el-row>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}</el-button
    >
  </el-row>

  <el-text tag="p" class="mb-2 mt-4">Background color always on</el-text>
  <el-row>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
      >{{ button.text }}</el-button
    >
  </el-row>

  <el-text tag="p" class="mb-2 mt-4">Disabled text button</el-text>
  <el-row>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
      >{{ button.text }}</el-button
    >
  </el-row>
</template>

<script lang="ts" setup>
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
</script>
