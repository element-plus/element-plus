<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div v-if="!isDark" class="demo-term-box">
    <img src="/images/typography/term-pingfang.png" alt="" />
    <img src="/images/typography/term-hiragino.png" alt="" />
    <img src="/images/typography/term-microsoft.png" alt="" />
    <img src="/images/typography/term-helvetica.png" alt="" />
    <img src="/images/typography/term-arial.png" alt="" />
  </div>
  <div v-else class="demo-term-box">
    <img src="/images/typography/term-pingfang-dark.png" alt="" />
    <img src="/images/typography/term-hiragino-dark.png" alt="" />
    <img src="/images/typography/term-microsoft-dark.png" alt="" />
    <img src="/images/typography/term-helvetica-dark.png" alt="" />
    <img src="/images/typography/term-arial-dark.png" alt="" />
  </div>
</template>

<style scoped>
img {
  width: 220px;
  height: 174px;
  margin: 0 24px 24px 0;
}
img:nth-of-type(3) {
  margin-right: 0;
}
</style>
