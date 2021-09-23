<script setup lang="ts">
import { useNav } from '../../composables/nav'
import VPMenuLink from './vp-menu-link.vue'

const navs = useNav()
</script>

<template>
  <nav v-if="navs" class="navbar-menu">
    <VPMenuLink v-for="item in navs" :item="item" />
  </nav>
</template>
