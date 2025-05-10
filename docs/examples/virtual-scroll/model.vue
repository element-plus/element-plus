<template>
  <div class="model-input">
    The index of first visible
    <el-input-number v-model="index"></el-input-number>
  </div>
  <div class="demo">
    <el-virtual-scroll
      v-model:index="index"
      :list-data="listData"
    ></el-virtual-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 随机生成滚动项
const getRandomIndex = (index: number): string => {
  const repeatNum = Math.round(Math.random() * 100) + 1
  const appendCharts = Array(repeatNum).fill(index).join(',')
  return `${index}th: ${appendCharts}`
}
const listData = Array(100000)
  .fill(0)
  .map((_, index) => getRandomIndex(index))
const index = ref<number>(0)
</script>

<style scoped>
.demo {
  height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.demo :deep(.el-virtual-scroll__item) {
  word-break: break-all;
}
.demo :deep(.el-virtual-scroll__item::first-letter) {
  font-size: 24px;
  padding-left: 10px;
}

.model-input {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
</style>
