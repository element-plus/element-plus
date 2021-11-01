<script setup lang="ts">
import {
  computed,
  onUpdated,
  onMounted,
  watch,
  ref,
  nextTick,
  provide,
} from 'vue'
import nprogress from 'nprogress'
import { useData, useRoute } from 'vitepress'
import { useWindowSize, useEventListener } from '@vueuse/core'
import { getOffsetTopDistance } from 'element-plus/lib/utils/dom'
import { useSidebar } from '../composables/sidebar'
import VPHeroContent from './vp-hero-content.vue'
import VPDocContent from './vp-doc-content.vue'
import VPNotFound from './vp-not-found.vue'

const { frontmatter } = useData()
const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const isHeroPost = computed(() => frontmatter.value.page === true)
const { hasSidebar } = useSidebar()

const props = defineProps<{ isSidebarOpen: boolean }>()

const shouldUpdateProgress = ref(true)

const { width } = useWindowSize()
// less than 960px .sub-nav element display, so need subtract .sub-nav element height
// .sub-nav element height 41px; .navbar element height 55px
const screenMinWidth = 960
const maxHeight = computed(() =>
  width.value < screenMinWidth ? `calc(100vh - 96px)` : 'calc(100vh - 55px)'
)

const scrollbar = ref(null)

provide('ElScrollbar', scrollbar)

const handleHashChange = () => {
  const anchor = document
    .querySelector('.page-content')
    ?.querySelector(location.hash) as HTMLElement
  const parent = document.querySelector('.doc-content-container') as HTMLElement
  if (anchor && parent) {
    const offset = getOffsetTopDistance(anchor, parent)
    ;(scrollbar.value as any)?.setScrollTop(offset)
  }
}

useEventListener(window, 'hashchange', handleHashChange)

watch(
  () => props.isSidebarOpen,
  (val) => {
    // delay the flag update since watch is called before onUpdated
    nextTick(() => {
      shouldUpdateProgress.value = !val
    })
  }
)

onMounted(() => {
  window.requestAnimationFrame(handleHashChange)
})

onUpdated(() => {
  if (shouldUpdateProgress.value) {
    nprogress.done()
    ;(scrollbar.value as any)?.setScrollTop(0)
  }
})
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <el-scrollbar ref="scrollbar" :max-height="maxHeight">
      <VPNotFound v-if="isNotFound" />
      <VPHeroContent v-else-if="isHeroPost" />
      <VPDocContent v-else>
        <template #content-top><slot name="content-top" /></template>
        <template #content-bottom><slot name="content-bottom" /></template>
      </VPDocContent>
    </el-scrollbar>
  </main>
</template>
