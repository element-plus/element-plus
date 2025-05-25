<template>
  <el-scrollbar v-loading="loading" height="400px" :bottom-reached="loadMore" direction="top">
    <p v-for="item in nums" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const makeRange = (start: number, end: number) => {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const nums = ref(makeRange(60, 80))

const loading = ref(false)
const db = [
  makeRange(0, 19),
  makeRange(20, 39),
  makeRange(40, 59),
]
const loadMore = async () => {
  const items = db.pop()
  if(!items) return
  loading.value = true
  await new Promise(r => setTimeout(r, 1000))
  nums.value.unshift(...items)
  loading.value = false
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-slider {
  margin-top: 20px;
}
</style>
