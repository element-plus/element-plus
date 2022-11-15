<template>
  <p>Basic link button</p>
  <el-space wrap>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      >{{ button.text }}</el-button
    >
  </el-space>

  <p>Disabled link button</p>
  <el-space wrap>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
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
