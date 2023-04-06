<template>
  <p>Basic text button</p>
  <div class="flex mb-4 flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}</el-button
    >
  </div>

  <p>Background color always on</p>
  <div class="flex mb-4 flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
      >{{ button.text }}</el-button
    >
  </div>

  <p>Disabled text button</p>
  <div class="flex flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
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
<style scoped>
.flex {
  display: flex;
}
.mb-4 {
  margin-bottom: 1rem;
}
.flex-wrap {
  flex-wrap: wrap;
}
.gap-4 {
  grid-gap: 1rem;
  gap: 1rem;
}
</style>
