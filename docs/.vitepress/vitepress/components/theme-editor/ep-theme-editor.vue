<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showDrawer = ref(false)
onMounted(() => {
  const params = new URLSearchParams(location.search)
  showDrawer.value =
    params.get('themeEditor') !== 'false' &&
    (params.has('themeEditor') || import.meta.env.DEV)
})
</script>

<template>
  <EpThemeDrawer v-if="showDrawer" />
</template>
