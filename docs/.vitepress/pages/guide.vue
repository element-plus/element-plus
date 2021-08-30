<template>
  <div class="page-container page-guide">
    <el-row>
      <el-col :xs="24" :sm="5">
        <side-nav :data="navsData" :base="`/${rootPath}/guide`" />
      </el-col>
      <el-col :xs="24" :sm="19">
        <div />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SideNav from '../layouts/side-nav.vue'
import '../assets/styles/pages/guide.scss'
import localeData from '../assets/pages/guide.json'
import { useLang, useRootPath } from '../utils/routes'

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const rootPath = useRootPath(lang)

const navsData = computed(() => [
  {
    path: '/design',
    name: locale.value[1],
  },
  {
    path: '/nav',
    name: locale.value[2],
  },
] as any)

</script>
