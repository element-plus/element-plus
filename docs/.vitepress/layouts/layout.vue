<script setup lang="ts">
import { computed, onMounted, onBeforeUnMounted } from 'vue'
import { useRoute } from 'vitepress'
import zhCN from 'element-plus/lib/locale/lang/zh-cn'
import enUS from 'element-plus/lib/locale/lang/en'
import NotFound from '../components/not-found.vue'
import { useLang, useIsHome } from '../utils/routes'
import { useToggle } from '../utils'
import EpHeader from './header.vue'
import EpSideNav from './side-nav.vue'
import EpPage from './page.vue'
import Home from './home.vue'
import 'element-plus/theme-chalk/src/index.scss'
import '../assets/styles/vars.scss'
import '../assets/styles/layout.scss'
import '../assets/styles/common.scss'

const langMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const route = useRoute()
const lang = useLang()
const isHome = useIsHome()

const isNotFound = computed(() => route.component === NotFound)

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
        'is-home': isHome,
      }"
    >
      <template v-if="isNotFound">
        <not-found />
      </template>
      <template v-else>
        <ep-header
          @toggle-sidebar="toggleSidebar"
          @toggle-dark="toggleDarkmode"
          :is-dark="darkMode"
        />

        <ep-side-nav :open="showSidebar" @sidebar-change="toggleHasSidebar">
          <template #sidebar-top></template>
          <template #sidebar-bottom></template>
        </ep-side-nav>
        <div class="sidebar-overlay" @click="toggleSidebar(false)"></div>
        <template v-if="isHome">
          <Home />
        </template>
        <ep-page v-else />
      </template>
    </div>
    <Debug />
  </el-config-provider>
</template>
