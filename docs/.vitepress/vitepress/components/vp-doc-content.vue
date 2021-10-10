<script lang="ts" setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { insertLinkIcon } from '../utils'
import VPPageFooter from './doc-content/vp-page-footer.vue'
import VPPageNav from './doc-content/vp-page-nav.vue'
import VPTableOfContent from './doc-content/vp-table-of-content.vue'

const { page } = useData()
const content = ref<{ $el: HTMLElement }>()

function updateLink() {
  insertLinkIcon(content)
}
</script>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content
        ref="content"
        class="doc-content"
        @vnode-mounted="updateLink"
        @vnode-updated="updateLink"
      />
      <VPPageFooter />
      <VPPageNav />
    </div>
    <VPTableOfContent v-if="page.headers" />
  </div>
</template>
