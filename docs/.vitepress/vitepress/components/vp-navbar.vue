<script setup lang="ts">
import { computed } from 'vue'
import { useData, inBrowser } from 'vitepress'

import { useFeatureFlag } from '../composables/feature-flag'
import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])
const themeEnabled = useFeatureFlag('theme')

const { theme } = useData()

const currentLink = computed(() => {
  if (!inBrowser) return '/'
  const existLangIndex = theme.value.langs.findIndex((lang) =>
    window?.location?.pathname.startsWith(`/${lang}`)
  )

  return existLangIndex === -1 ? '/' : `/${theme.value.langs[existLangIndex]}/`
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="container">
      <div class="logo-container">
        <a :href="currentLink">
          <img
            class="logo"
            src="/images/element-plus-logo.svg"
            alt="Elemenet Plus Logo"
          />
        </a>
      </div>
      <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler v-if="themeEnabled" class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
          :active="fullScreen"
          class="hamburger"
          @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 28px;
    width: 128px;
  }
  .logo {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
