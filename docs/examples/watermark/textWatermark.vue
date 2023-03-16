<template>
  <el-watermark
    :watermark-content="{
      text: '文字水印',
    }"
    :width="120"
    :height="60"
    :y="120"
    :x="80"
  >
    <div style="height: 300px" />
  </el-watermark>
</template>
<script setup lang="ts">
import { ElWatermark } from 'element-plus'
import '@element-plus/components/watermark/style'
</script>
