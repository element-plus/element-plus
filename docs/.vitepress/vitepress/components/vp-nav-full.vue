<script setup lang="ts">
import { useLock } from 'element-plus'
import VPFullScreenMenu from './full-screen/vp-menu.vue'
import VPFullScreenTranslation from './full-screen/vp-translation.vue'
import VPFullScreenThemeToggler from './full-screen/vp-theme-toggler.vue'
import VPFullScreenSocialLinks from './full-screen/vp-social-links.vue'
import { useLockScreen } from '../composables/lock-screen'

defineProps<{
  fullScreen: boolean
}>()

const { lock, cleanup } = useLockScreen()
</script>

<template>
  <Transition name="el-fade" @enter="lock" @after-leave="cleanup">
    <div v-if="fullScreen">
      <VPFullScreenMenu />
      <VPFullScreenTranslation />
      <VPFullScreenThemeToggler />
      <VPFullScreenSocialLinks />
    </div>
  </Transition>
</template>
