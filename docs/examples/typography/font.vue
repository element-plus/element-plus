<template>
  <el-space v-if="!isDark" wrap>
    <el-image src="/images/typography/term-pingfang.png" alt="" />
    <el-image src="/images/typography/term-hiragino.png" alt="" />
    <el-image src="/images/typography/term-microsoft.png" alt="" />
    <el-image src="/images/typography/term-helvetica.png" alt="" />
    <el-image src="/images/typography/term-arial.png" alt="" />
  </el-space>
  <el-space v-else wrap>
    <el-image src="/images/typography/term-pingfang-dark.png" alt="" />
    <el-image src="/images/typography/term-hiragino-dark.png" alt="" />
    <el-image src="/images/typography/term-microsoft-dark.png" alt="" />
    <el-image src="/images/typography/term-helvetica-dark.png" alt="" />
    <el-image src="/images/typography/term-arial-dark.png" alt="" />
  </el-space>
</template>

<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<style scoped>
.el-image {
  width: 220px;
  height: 174px;
  margin: 0 16px 16px 0;
}
</style>
