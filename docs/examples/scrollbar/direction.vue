<template>
  <el-scrollbar
    v-loading="loading"
    height="400px"
    :bottom-reached="loadMore"
    direction="top"
  >
    <p v-for="item in num" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(20)
const loading = ref(false)
function* getItems() {
  yield 5
  yield 5
  yield 5
}
const items = getItems()

const loadMore = async () => {
  console.log('!!')
  loading.value = true
  await new Promise((r) => setTimeout(r, 2000))
  try {
    const huh = items.next().value
    console.log(huh)
    if (!huh) return console.log('what !')
    console.log('kesk')
    num.value += huh
  } finally {
    loading.value = false
    console.log('end')
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
