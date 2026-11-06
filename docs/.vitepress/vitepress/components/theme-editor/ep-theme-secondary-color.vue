<script lang="ts" setup>
import type { EpThemeColor } from '~/utils/theme'

defineProps<{ name: EpThemeColor }>()
</script>

<template>
  <div class="theme-secondary-color">
    <EpThemeColorInput :name="name" />
    <EpThemeColorBar class="theme-secondary-shades" :name="name" />
  </div>
</template>

<style scoped>
.theme-secondary-color + .theme-secondary-color {
  margin-top: 20px;
}
.theme-secondary-shades {
  margin-top: 8px;
}
</style>
