<script setup lang="ts">
import { watch } from 'vue'
import { useSidebar } from '../composables/sidebar'
import { useFullScreen } from '../composables/fullscreen'
import VpNavbar from './vp-navbar.vue'
import VpNavFull from './vp-nav-full.vue'

const { hasSidebar } = useSidebar()
const { toggleFullScreen, isFullScreen } = useFullScreen()
const close = () => toggleFullScreen(false)
watch(isFullScreen, (val) => console.log(val))
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    <VpNavbar :full-screen="isFullScreen" @toggle="toggleFullScreen" />
    <VpNavFull :full-screen="isFullScreen" @close="close" class="full-screen" />
  </header>
</template>
