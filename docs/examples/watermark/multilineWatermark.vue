<template>
  <el-watermark
    :watermark-content="[
      { text: '水印文本', fontColor: 'black' },
      {
        url: 'https://element-plus.org/images/element-plus-logo.svg',
      },
    ]"
    :line-space="24"
    :x="100"
    :y="120"
    :width="168"
    :height="41.5"
    :alpha="0.3"
  >
    <div style="height: 300px" />
  </el-watermark>
</template>
<script setup lang="ts">
import { ElWatermark } from 'element-plus'
import '@element-plus/components/watermark/style'
</script>
