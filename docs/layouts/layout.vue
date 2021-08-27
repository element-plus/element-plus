<script setup lang="ts">
// import { useRoute, useData } from 'vitepress'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'
import { useLang } from '../utils/routes'
import EpHeader from './header.vue'
import EpFooter from './footer.vue'
import 'element-plus/theme-chalk/src/index.scss'
import '../assets/styles/common.scss'

const langMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const lang = useLang()
</script>

<template>
  <el-config-provider :locale="langMap[lang]">
    <ep-header />
    <div class="main-cnt">
      <el-scrollbar>
        <Content />
      </el-scrollbar>
    </div>
    <ep-footer />
  </el-config-provider>
</template>
