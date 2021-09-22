<script setup lang="ts">
import VPMenuLink from './vp-menu-link.vue'
import { useNav } from '../../composables/nav'

const navs = useNav()
</script>

<template>
  <nav v-if="navs" class="navbar-menu">
    <VPMenuLink v-for="item in navs" :item="item" />
  </nav>
</template>
