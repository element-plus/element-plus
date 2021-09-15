<script setup>
import VPOverlay from './vp-overlay.vue'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'
import VPSponsors from './vp-sponsors.vue'
import { useToggle } from '../composables/toggle'
import { useSidebar } from '../composables/sidebar'
import { useToggleWidgets } from '../composables/toggle-widgets'
import { breakpoints } from '../constant'

const [isSidebarOpen, toggleSidebar] = useToggle(false)
const { hasSidebar } = useSidebar()

useToggleWidgets(isSidebarOpen, () => {
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false)
  }
})
</script>

<template>
  <div class="App">
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #top>
        <VPSponsors />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent>
    <Debug />
  </div>
</template>
