<template>
  <div class="demo">
    <el-virtual-scroll :list-data="listData">
      <template #default="{ data }">
        <div class="custom-item">
          <span
            class="custom-item-index"
          >{{ data.index }}th:</span>
          <span class="custom-item-content">{{ data.text }}</span>
          <el-button
            type="danger"
            size="small"
            @click="onRemove(data.index)"
          >Remove</el-button>
        </div>
      </template>
    </el-virtual-scroll>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
// 随机生成滚动项
const getRandomIndex = (index: number): string => {
  const repeatNum = Math.round(Math.random() * 100) + 1
  return Array(repeatNum).fill(index).join(',')
}
interface MockListData {
  text: string;
  index: number
}
const listData = shallowRef<MockListData[]>(Array(100000)
  .fill(0)
  .map((_, index) => ({
    text: getRandomIndex(index),
    index
  })))

const onRemove = (index: number) => {
  listData.value = listData.value.filter((data) => data.index !== index)
}
</script>

<style scoped>
.demo {
  height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.custom-item {
  word-break: break-all;
  margin-top: 15px;
}
.custom-item :deep(.el-button) {
  margin-left: 10px;
}
.custom-item-content {
  word-break: break-all;
}
.custom-item-index {
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
</style>
