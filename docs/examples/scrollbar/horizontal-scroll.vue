<template>
  <el-scrollbar>
    <el-text tag="div" class="flex">
      <el-text v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </el-text>
    </el-text>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
