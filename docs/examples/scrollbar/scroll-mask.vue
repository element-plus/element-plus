<template>
  <el-radio-group v-model="mask" size="small" class="mask-controls">
    <el-radio-button :value="false">Off</el-radio-button>
    <el-radio-button :value="true">Both</el-radio-button>
    <el-radio-button value="top">Top</el-radio-button>
    <el-radio-button value="bottom">Bottom</el-radio-button>
  </el-radio-group>
  <el-scrollbar height="240px" :mask="mask" class="mask-scrollbar">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mask = ref<boolean | 'top' | 'bottom'>(true)
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
