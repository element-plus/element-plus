<script setup lang="ts">
import { useSocialLinks } from '../../composables/social-links'
import VPSocialLink from './vp-social-link.vue'

const links = useSocialLinks()
</script>

<template>
  <div class="social-links">
    <VPSocialLink v-for="link in links" :key="link.text" v-bind="link" />
  </div>
</template>

<style scoped lang="scss">
.social-links {
  height: 20px;
  padding: 0 8px;
}
</style>
