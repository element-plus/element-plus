<script setup lang="ts">
import HomeFooter from './footer.vue'
</script>

<template>
  <div class="home-wrapper">
    <Content />
    <HomeFooter />
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  padding-top: var(--header-height);
}
</style>
