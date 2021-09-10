<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { ref, watch } from 'vue'
import { useToc } from '../composables/use-toc'
import { useActiveSidebarLinks } from '../composables/use-active-bar'
import TocItem from '../components/toc-item'
import '../assets/styles/components/table-of-content.scss'

const headers = useToc()

const markerStyle = useActiveSidebarLinks()
</script>

<template>
  <aside class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <TocItem v-for="item in headers" :key="item.name" v-bind="item" />
      </ul>
      <div class="toc-marker" :style="markerStyle"></div>
    </nav>
  </aside>
</template>
