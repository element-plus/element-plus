<script setup lang="ts">
import { onMounted } from 'vue'
// import { ElMessageBox } from 'element-plus'
// import dayjs from 'dayjs'
import { isClient, useEventListener, useToggle } from '@vueuse/core'
import { EVENT_CODE } from 'element-plus'
import { useSidebar } from '../composables/sidebar'
import { useToggleWidgets } from '../composables/toggle-widgets'
// import { useLang } from '../composables/lang'
import { breakpoints } from '../constant'
import VPOverlay from './vp-overlay.vue'
import VPSkipLink from './vp-skip-link.vue'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'
import VPSponsors from './vp-sponsors.vue'

// const USER_PREFER_GITHUB_PAGE = 'USER_PREFER_GITHUB_PAGE'
const [isSidebarOpen, toggleSidebar] = useToggle(false)
const { hasSidebar } = useSidebar()
// const lang = useLang()

// const mirrorUrl = 'element-plus.gitee.io'
// const isMirrorUrl = () => {
//   if (!isClient) return
//   return window.location.hostname === mirrorUrl
// }

useToggleWidgets(isSidebarOpen, () => {
  if (!isClient) return
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false)
  }
})

useEventListener('keydown', (e) => {
  if (!isClient) return
  if (e.code === EVENT_CODE.esc && isSidebarOpen.value) {
    toggleSidebar(false)
    document.querySelector<HTMLButtonElement>('.sidebar-button')?.focus()
  }
})

// const userPrefer = useStorage<boolean | string>(USER_PREFER_GITHUB_PAGE, null)

onMounted(async () => {
  if (!isClient) return

  navigator?.serviceWorker?.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
  // if (lang.value === 'zh-CN') {
  //   if (isMirrorUrl()) return

  //   if (userPrefer.value) {
  //     // no alert in the next 90 days
  //     if (
  //       dayjs
  //         .unix(Number(userPrefer.value))
  //         .add(90, 'day')
  //         .diff(dayjs(), 'day', true) > 0
  //     )
  //       return
  //   }
  //   try {
  //     await ElMessageBox.confirm(
  //       '建议大陆用户访问部署在国内的站点，是否跳转？',
  //       '提示',
  //       {
  //         confirmButtonText: '跳转',
  //         cancelButtonText: '取消',
  //       }
  //     )
  //     const toLang = '/zh-CN/'
  //     location.href = `https://element-plus.gitee.io${toLang}${location.pathname.slice(
  //       toLang.length
  //     )}`
  //   } catch {
  //     userPrefer.value = String(dayjs().unix())
  //   }
  // }
  // unregister sw
})
</script>

<template>
  <div class="App">
    <VPSkipLink />
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VPNav />
    <VPSubNav
      v-if="hasSidebar"
      :is-sidebar-open="isSidebarOpen"
      @open-menu="toggleSidebar(true)"
    />
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
  </div>
</template>
