<template>
  <el-image v-if="isDark" src="/images/typography/line-height-dark.png" />
  <el-image v-else src="/images/typography/line-height.png" />
  <el-row tag="ul" class="block">
    <el-text tag="li">line-height: 1 No line height</el-text>
    <el-text tag="li">line-height: 1.3 Compact</el-text>
    <el-text tag="li">line-height: 1.5 Regular</el-text>
    <el-text tag="li">line-height: 1.7 Loose</el-text>
  </el-row>
</template>

<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>
