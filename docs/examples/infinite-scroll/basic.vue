<template>
  <el-row
    v-infinite-scroll="load"
    tag="ul"
    class="infinite-list"
    style="overflow: auto"
  >
    <el-text v-for="i in count" :key="i" tag="li" class="infinite-list-item">
      {{ i }}
    </el-text>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
