<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import EpHeader from './header.vue'

const route = useRoute()
const { site, page, theme, frontmatter } = useData()

</script>

<template>
  <ep-header />
</template>

