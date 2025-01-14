<template>
  <div class="demo-top">
    <el-button @click="onScroll" type="primary" size="small">Click</el-button>
    to set the
    <el-input-number v-model="index" size="small"></el-input-number>
    item at
    <el-radio-group v-model="align">
      <el-radio value="start">start</el-radio>
      <el-radio value="center">center</el-radio>
      <el-radio value="end">end</el-radio>
    </el-radio-group>
    of visible window
  </div>
  <div class="demo">
    <el-virtual-scroll
      ref="virtualScrollRef"
      :list-data="listData"
    ></el-virtual-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Align, VirtualScrollInstance } from 'element-plus'
// 随机生成滚动项
const getRandomIndex = (index: number): string => {
  const repeatNum = Math.round(Math.random() * 100) + 1
  const appendCharts = Array(repeatNum).fill(index).join(',')
  return `${index}th: ${appendCharts}`
}
const listData = Array(100000)
  .fill(0)
  .map((_, index) => getRandomIndex(index))
const index = ref<number>(10)
const align = ref<Align>('start')
const virtualScrollRef = ref<VirtualScrollInstance>()
const onScroll = () => {
  virtualScrollRef.value?.scrollToIndex(index.value, align.value)
}
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
.demo-top {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.demo-top :deep(.el-radio-group),
.demo-top :deep(.el-input-number) {
  margin: 0 10px;
}
</style>
