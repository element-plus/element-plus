<script lang="ts" setup>
import { useData } from 'vitepress'
import VPPageFooter from './doc-content/vp-page-footer.vue'
import VPPageNav from './doc-content/vp-page-nav.vue'
import VPTableOfContent from './doc-content/vp-table-of-content.vue'

const { page } = useData()
</script>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content class="doc-content" />
      <VPPageFooter />
      <VPPageNav />
    </div>
    <VPTableOfContent v-if="page.headers" />
  </div>
</template>
