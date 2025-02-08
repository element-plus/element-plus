<template>
  <div class="model-input">
    The index of first visible
    <el-input-number v-model="index" size="small"></el-input-number>
  </div>
  <div class="demo">
    <el-virtual-scroll
      :list-data="listData"
      direction="horizontal"
      v-model:index="index"
    >
      <template #default="{ data }">
        <div class="cell">{{ data }}</div>
      </template>
    </el-virtual-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

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
  height: 100px;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.cell {
  margin: 10px 10px 0 0;
  word-break: break-all;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
}

.cell::first-letter {
  font-size: 24px;
  font-weight: bold;
}

.cell:last-of-type:after {
  content: '';
  position: absolute;
  right: 0;
  top: 10px;
  bottom: 10px;
  width: 3px;
  background-color: #1680f8;
}

.model-input {
  margin-bottom: 15px;
}
</style>
