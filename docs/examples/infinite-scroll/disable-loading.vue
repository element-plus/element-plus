<template>
  <el-row class="infinite-list-wrapper" style="overflow: auto">
    <el-row
      v-infinite-scroll="load"
      tag="ul"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <el-text v-for="i in count" :key="i" tag="li" class="list-item">
        {{ i }}
      </el-text>
    </el-row>
    <el-text v-if="loading" tag="p" size="large" class="w-100% my-2">
      Loading...
    </el-text>
    <el-text v-if="noMore" tag="p" size="large" class="w-100% my-2">
      No more
    </el-text>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
