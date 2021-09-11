<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { ref, watch } from 'vue'
import { useToc } from '../../composables/use-toc'
import { useActiveSidebarLinks } from '../../composables/active-bar'

const headers = useToc()

const markerStyle = useActiveSidebarLinks()
</script>

<template>
  <aside class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <li v-for="{ link, text, children } in headers" class="toc-item">
          <a class="toc-link" :href="link">{{ text }}</a>
          <ul v-if="children">
            <li v-for="{ link, text } in children" class="toc-item">
              <a class="toc-link subitem" :href="link">{{ text }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="toc-marker" :style="markerStyle"></div>
    </nav>
  </aside>
</template>
