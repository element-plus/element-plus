<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'

const EpThemeDrawer = defineAsyncComponent(
  () => import('./ep-theme-drawer.vue')
)

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
