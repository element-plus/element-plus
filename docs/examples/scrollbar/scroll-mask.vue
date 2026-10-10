<template>
  <el-radio-group v-model="mask" size="small" class="mask-controls">
    <el-radio-button :value="false">Off</el-radio-button>
    <el-radio-button :value="true">All</el-radio-button>
    <el-radio-button value="top">Top</el-radio-button>
    <el-radio-button value="bottom">Bottom</el-radio-button>
    <el-radio-button value="left">Left</el-radio-button>
    <el-radio-button value="right">Right</el-radio-button>
  </el-radio-group>
  <p>Vertical scrolling</p>
  <el-scrollbar height="240px" :mask="mask" class="mask-scrollbar">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
  <p>Horizontal scrolling</p>
  <el-scrollbar :mask="mask" class="mask-scrollbar">
    <div class="horizontal-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ScrollbarProps } from 'element-plus'

const mask = ref<ScrollbarProps['mask']>(true)
</script>

<style scoped>
.mask-controls {
  margin-bottom: 8px;
}

.mask-scrollbar {
  --el-scrollbar-top-mask-height: 48px;
  --el-scrollbar-top-mask-color: var(--el-bg-color);
  --el-scrollbar-bottom-mask-height: 48px;
  --el-scrollbar-bottom-mask-color: var(--el-bg-color);
  --el-scrollbar-left-mask-width: 48px;
  --el-scrollbar-left-mask-color: var(--el-bg-color);
  --el-scrollbar-right-mask-width: 48px;
  --el-scrollbar-right-mask-color: var(--el-bg-color);
}

.horizontal-content {
  display: flex;
  width: max-content;
}

.horizontal-content .scrollbar-demo-item {
  flex-shrink: 0;
  width: 100px;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
