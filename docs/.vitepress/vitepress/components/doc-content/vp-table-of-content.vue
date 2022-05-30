<script setup lang="ts">
import { ref } from 'vue'
import { useToc } from '../../composables/use-toc'
import { useActiveSidebarLinks } from '../../composables/active-bar'

import SponsorsButton from '../sponsors/sponsors-button.vue'
import SponsorRightTextList from '../sponsors/right-richtext-list.vue'
// import SponsorLarge from '../vp-sponsor-large.vue'

const headers = useToc()
const marker = ref()
const container = ref()
useActiveSidebarLinks(container, marker)
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <li
          v-for="{ link, text, children } of headers"
          :key="link"
          class="toc-item"
        >
          <a class="toc-link" :href="link" :title="text">{{ text }}</a>
          <ul v-if="children">
            <li
              v-for="{ link: childLink, text: childText } of children"
              :key="childLink"
              class="toc-item"
            >
              <a class="toc-link subitem" :href="childLink" :title="text">{{
                childText
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div ref="marker" class="toc-marker" />
      <!-- <SponsorLarge
        class="mt-8 toc-ads flex flex-col"
        item-style="width: 180px; height: 55px;"
      /> -->
      <sponsors-button class="sponsors-button mt-4 w-100%" />
      <sponsor-right-text-list />
    </nav>
  </aside>
</template>
<style scoped lang="scss">
.sponsors-button:deep {
  button {
    width: 100%;
  }
}
</style>
