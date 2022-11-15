<template>
  <p>Basic text button</p>
  <el-space wrap>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}</el-button
    >
  </el-space>

  <p>Background color always on</p>
  <el-space wrap>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
      >{{ button.text }}</el-button
    >
  </el-space>

  <p>Disabled text button</p>
  <el-space wrap>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
      >{{ button.text }}</el-button
    >
  </el-space>
</template>

<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
</script>
