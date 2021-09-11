<script setup lang="ts">
import { useData } from 'vitepress'
import GitHubIcon from '../icons/github.vue'
import VPSocialLink from './vp-social-link.vue'

const { theme } = useData()

const links = [
  {
    link: 'https://github.com/element-plus/element-plus',
    icon: GitHubIcon,
    text: 'GitHub',
  },
]
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
}
</style>
