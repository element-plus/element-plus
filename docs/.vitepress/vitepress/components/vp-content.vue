<script setup lang="ts">
import {
  computed,
  onUpdated,
  watch,
  ref,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import nprogress from 'nprogress'
import { useData, useRoute } from 'vitepress'
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

const clientWidth = ref(document.documentElement.clientWidth)
const update = () => {
  clientWidth.value = document.documentElement.clientWidth
}
const screenMinWidth = 960 // less than 960px .sub-nav element display, so need subtract .sub-nav element height
// .sub-nav element height 41px; .navbar element height 55px
const maxHeight = computed(() =>
  clientWidth.value < screenMinWidth
    ? `calc(100vh - 96px)`
    : 'calc(100vh - 55px)'
)

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

onMounted(() => {
  addEventListener('resize', update)
})

onBeforeUnmount(() => {
  removeEventListener('resize', update)
})
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <el-scrollbar :max-height="maxHeight">
      <VPNotFound v-if="isNotFound" />
      <VPHeroContent v-else-if="isHeroPost" />
      <VPDocContent v-else>
        <template #content-top><slot name="content-top" /></template>
        <template #content-bottom><slot name="content-bottom" /></template>
      </VPDocContent>
    </el-scrollbar>
  </main>
</template>
