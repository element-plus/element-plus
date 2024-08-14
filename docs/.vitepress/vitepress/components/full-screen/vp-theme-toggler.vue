<script setup lang="ts">
import CommonThemeToggler from '../common/vp-theme-toggler.vue'
import { isDark } from '../../composables/dark'
import { useNavbarLocale } from '../../composables/navbar-locale'

const locale = useNavbarLocale()
</script>

<template>
  <div class="full-screen-theme-toggler">
    <span>Theme</span>
    <CommonThemeToggler
      :aria-label="locale['theme-toggler']"
      :aria-checked="isDark"
    />
  </div>
</template>

<style lang="scss" scoped>
.full-screen-theme-toggler {
  display: flex;
  padding: 12px 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 13px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}
</style>
