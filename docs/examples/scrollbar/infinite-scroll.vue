<template>
  <el-scrollbar height="400px" @end-reached="loadMore">
    <p v-for="item in num" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ScrollbarDirection } from 'element-plus'

const num = ref(30)

const loadMore = (direction: ScrollbarDirection) => {
  if (direction === 'bottom') {
    num.value += 5
  }
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
