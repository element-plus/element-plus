<script setup lang="ts">
import { computed } from 'vue'
import { isClient } from '@vueuse/core'

const showDrawer = computed(() => {
  if (!isClient) return false
  const params = new URLSearchParams(location.search)
  return params.get('themeEditor') || import.meta.env.DEV
})
</script>

<template>
  <EpThemeDrawer v-if="showDrawer" />
</template>
