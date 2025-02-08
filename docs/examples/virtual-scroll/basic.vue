<template>
  <div class="demo">
    <el-virtual-scroll :list-data="listData"></el-virtual-scroll>
  </div>
</template>

<script setup lang="ts">
// 随机生成滚动项
const getRandomIndex = (index: number): string => {
  const repeatNum = Math.round(Math.random() * 100) + 1
  const appendCharts = Array(repeatNum).fill(index).join(',')
  return `${index}th: ${appendCharts}`
}
const listData = Array(100000)
  .fill(0)
  .map((_, index) => getRandomIndex(index))
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
</style>
