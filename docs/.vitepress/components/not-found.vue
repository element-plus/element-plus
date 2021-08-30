<script setup lang="ts">
import { computed, markRaw } from 'vue'
import { ElResult } from 'element-plus'
import { useLang } from '../utils/routes'
import en from '../locale/en-US/not-found.json'
import zh from '../locale/zh-CN/not-found.json'

const localeData = markRaw({
  'en-US': en,
  'zh-CN': zh,
})

const lang = useLang()

const locale = computed(() => localeData[lang.value])

const goHome = () => {
  window.location.href = `/${lang.value}/`
}

</script>

<template>
  <el-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <el-button @click="goHome">{{ locale['button-title'] }}</el-button>
    </template>
  </el-result>
</template>


<style scoped>
.el-result {
  height: 100vh;
  width: 100vw;
}
</style>
