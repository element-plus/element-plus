<script setup lang="ts">
import { onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'
import { useToggle } from '../composables/toggle'
import { useSidebar } from '../composables/sidebar'
import { useToggleWidgets } from '../composables/toggle-widgets'
import { useLang } from '../composables/lang'
import { breakpoints } from '../constant'
import VPOverlay from './vp-overlay.vue'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'
import VPSponsors from './vp-sponsors.vue'

const [isSidebarOpen, toggleSidebar] = useToggle(false)
const { hasSidebar } = useSidebar()
const lang = useLang()

useToggleWidgets(isSidebarOpen, () => {
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false)
  }
})

onMounted(async () => {
  window.addEventListener(
    'click',
    (e) => {
      const link = e.target.closest('a')
      if (!link) return

      const { protocol, hostname, pathname, target } = link
      const currentUrl = window.location
      const extMatch = pathname.match(/\.\w+$/)
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== '.html')
      ) {
        e.preventDefault()
        if (pathname !== currentUrl.pathname) {
          nprogress.start()
        }
      }
    },
    { capture: true }
  )

  if (lang.value === 'zh-CN') {
    if (location.host === 'element-plus.gitee.io') return
    try {
      await ElMessageBox.confirm(
        '建议大陆用户访问部署在国内的站点，是否跳转？',
        '提示',
        {
          confirmButtonText: '跳转',
          cancelButtonText: '取消',
        }
      )
      const toLang = '/zh-CN/'
      location.href = `https://element-plus.gitee.io${toLang}${location.pathname.slice(
        toLang.length
      )}`
    } catch (e) {
      // do nothing
    }
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
    <VPContent :is-sidebar-open="isSidebarOpen">
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
