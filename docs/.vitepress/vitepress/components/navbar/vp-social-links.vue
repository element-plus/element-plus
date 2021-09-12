<script setup lang="ts">
import { useData } from 'vitepress'
import VPSocialLink from './vp-social-link.vue'
import { useSocialLinks } from '../../composables/social-links'

const { theme } = useData()

const links = useSocialLinks()
</script>

<template>
  <div class="social-links">
    <VPSocialLink v-for="link in links" v-bind="link" />
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';

.social-links {
  height: 20px;
  padding: 0 8px;
}
</style>
