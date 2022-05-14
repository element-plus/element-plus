<template>
  <p>Basic link button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      >{{ button.text }}</el-button
    >
  </div>

  <p>Disabled link button</p>
  <div class="flex justify-space-between flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      disabled
      >{{ button.text }}</el-button
    >
  </div>
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
