<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { getSideBarConfig } from 'vitepress/dist/client/theme-default/support/sideBar'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'
import { useLang } from '../utils/routes'
import EpHeader from './header.vue'
import EpFooter from './footer.vue'
import EpSideNav from './side-nav.vue'
import 'element-plus/theme-chalk/src/index.scss'
import '../assets/styles/common.scss'

const langMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const route = useRoute()
const { site } = useData()
const lang = useLang()


const sidebars = computed(() => {
  const themeSidebar = getSideBarConfig(site.value.themeConfig.sidebar, route.data.relativePath)
  if (themeSidebar === false) return []
  if (themeSidebar === 'auto') return []
  return themeSidebar
})

const shouldShowSideNav = computed(() => sidebars.value.length > 0)

const showBackToTop = computed(() => false)
</script>

<template>
  <el-config-provider :locale="langMap[lang]">
    <ep-header />
    <div class="main-cnt">
      <div class="page-container page-component">
        <el-scrollbar v-if="shouldShowSideNav" class="page-component__nav">
          <ep-side-nav :data="sidebars" :base="`/${ lang }/component`" />
        </el-scrollbar>
        <div class="page-component__content">
          <div class="content-wrap">
            <router-view class="content" />
          </div>
          <footer-nav />
        </div>
        <el-backtop
          v-if="showBackToTop"
          target=".page-component__scroll .el-scrollbar__wrap"
          :right="100"
          :bottom="50"
        />
      </div>
    </div>
    <ep-footer />
  </el-config-provider>
</template>
