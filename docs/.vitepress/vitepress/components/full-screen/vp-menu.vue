<script setup lang="ts">
import { useNav } from '../../composables/nav'
import VPMenuLink from './vp-menu-link.vue'

const navs = useNav()

defineEmits(['close'])
</script>

<template>
  <nav v-if="navs" class="full-screen-menu">
    <div v-for="(item, key) in navs" :key="key" class="full-screen-menu__item">
      <VPMenuLink :item="item" @click="$emit('close')" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.full-screen-menu__item {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}
</style>
