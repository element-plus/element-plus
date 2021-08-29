<script setup lang="ts">
// import { useRoute, useData } from 'vitepress'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'
import { useLang } from '../utils/routes'
import { useToggle } from '../utils'
import EpHeader from './header.vue'
import EpFooter from './footer.vue'
import EpSideNav from './side-nav.vue'
import EpPage from './page.vue'
import 'element-plus/theme-chalk/src/index.scss'
import '../assets/styles/vars.scss'
import '../assets/styles/layout.scss'
import '../assets/styles/common.scss'

const langMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

// const route = useRoute()
// const { site } = useData()
const lang = useLang()

const [showSidebar, toggleSidebar] = useToggle()
const [darkMode, toggleDarkmode] = useToggle()
const [hasSidebar, toggleHasSidebar] = useToggle()

</script>

<template>
  <el-config-provider :locale="langMap[lang]">
    <div
      :class="{
        'theme-wrapper': true,
        'theme-dark': darkMode,
        'has-sidebar': hasSidebar,
        'sidebar-open': showSidebar,
      }"
    >
      <ep-header
        @toggle-sidebar="toggleSidebar"
        @toggle-theme="toggleDarkmode"
      />
      <ep-side-nav :open="showSidebar" @sidebar-change="toggleHasSidebar">
        <template #sidebar-top></template>
        <template #sidebar-bottom></template>
      </ep-side-nav>
      <div class="sidebar-overlay" @click="toggleSidebar(false)"></div>
      <ep-page />
      <ep-footer />
    </div>
    <Debug />
  </el-config-provider>
</template>
