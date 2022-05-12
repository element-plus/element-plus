<template>
  <div class="flex justify-space-between mb-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      >{{ button.text }}</el-button
    >
  </div>
</template>

<script setup lang="ts">
const buttons = [{ type: 'link', text: 'link' }] as const
</script>
