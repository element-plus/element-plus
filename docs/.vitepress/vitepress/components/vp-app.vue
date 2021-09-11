<script setup>
import VPOverlay from './vp-overlay.vue'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'
import { useToggle } from '../composables/toggle'

const [isSidebarOpen, toggleSidebar] = useToggle(false)
</script>

<template>
  <div class="App">
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VPNav />
    <VPSubNav @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #top>
        <slot name="sidebar-top" />
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
  </div>
</template>
