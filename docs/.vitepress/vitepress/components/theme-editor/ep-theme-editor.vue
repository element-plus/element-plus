<script setup lang="ts">
import { ref } from 'vue'

const isDev = ref(import.meta.env.DEV)
</script>

<template>
  <EpThemeDrawer v-if="isDev" />
</template>
