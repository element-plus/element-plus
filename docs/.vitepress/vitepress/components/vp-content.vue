<script setup lang="ts">
import { computed, nextTick, onUpdated, ref, watch } from 'vue'
import nprogress from 'nprogress'
import { useData, useRoute } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import VPHeroContent from './vp-hero-content.vue'
import VPDocContent from './vp-doc-content.vue'
import VPNotFound from './vp-not-found.vue'
import VPFooter from './globals/vp-footer.vue'

const { frontmatter } = useData()
const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const isHeroPost = computed(() => frontmatter.value.page === true)
const { hasSidebar } = useSidebar()

const props = defineProps<{ isSidebarOpen: boolean }>()

const shouldUpdateProgress = ref(true)

watch(
  () => props.isSidebarOpen,
  (val) => {
    // delay the flag update since watch is called before onUpdated
    nextTick(() => {
      shouldUpdateProgress.value = !val
    })
  }
)

onUpdated(() => {
  if (shouldUpdateProgress.value) {
    nprogress.done()
  }
})
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <VPNotFound v-if="isNotFound" />
    <VPHeroContent v-else-if="isHeroPost" />
    <VPDocContent v-else>
      <template #content-top><slot name="content-top" /></template>
      <template #content-bottom><slot name="content-bottom" /></template>
    </VPDocContent>
    <VPFooter v-if="!isHeroPost" />
  </main>
</template>
