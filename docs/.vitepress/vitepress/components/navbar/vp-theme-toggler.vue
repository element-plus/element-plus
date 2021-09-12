<script setup lang="ts">
import { useTheme } from '../../composables/theme'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'

const toggle = useTheme()
</script>

<template>
  <div class="theme-toggler-content">
    <CommonThemeToggler @click="toggle" />
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';
.theme-toggler-content {
  @include with-bg;
  display: none;
  border-radius: 50%;
  height: 20px;
  padding: 0 8px;

  @include respond-to('md') {
    display: block;
  }
}
</style>
