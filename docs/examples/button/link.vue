<template>
  <el-text tag="p" class="mb-2">Basic link button</el-text>
  <el-row>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      >{{ button.text }}</el-button
    >
  </el-row>

  <el-text tag="p" class="mb-2 mt-4">Disabled link button</el-text>
  <el-row>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
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
