<script setup lang="ts">
import { toggleDark } from '../../composables/dark'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'
</script>

<template>
  <div class="theme-toggler-content">
    <CommonThemeToggler @click="toggleDark()" />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
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
