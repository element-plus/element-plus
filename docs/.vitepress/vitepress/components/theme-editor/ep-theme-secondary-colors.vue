<script lang="ts" setup>
const secondaryColors = ['success', 'warning', 'danger', 'info']
</script>

<template>
  <div m="t-6">
    <h3 class="text-lg">辅助色</h3>
    <ep-theme-secondary-color
      v-for="colorName in secondaryColors"
      :key="colorName"
      :name="colorName"
    />
  </div>
</template>
