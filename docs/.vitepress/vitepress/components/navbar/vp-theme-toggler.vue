<script setup lang="ts">
import { isDark, toggleDark } from '../../composables/dark'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'

defineProps<{
  ariaLabel: string
}>()
</script>

<template>
  <div class="theme-toggler-content">
    <CommonThemeToggler
      :aria-label="ariaLabel"
      :aria-checked="isDark"
      @click="() => toggleDark()"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.theme-toggler-content {
  @include with-bg;
  background-color: transparent;
  display: none;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  @include respond-to('md') {
    display: flex;
    align-items: center;
  }
}
</style>
