<template>
  <div
    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"
  >
    <el-splitter
      :key="splitKey"
      @resize-start="handleResizeStart"
      @resize-end="handleResizeEnd"
      @resize="handleResize"
    >
      <el-splitter-panel>
        <div class="demo-panel">1</div>
      </el-splitter-panel>
      <el-splitter-panel v-model:size="size" :max="900" :min="50">
        <div class="demo-panel">{{ size }}px</div>
      </el-splitter-panel>
    </el-splitter>
  </div>

  <el-button @click="changeSize">点我设置成100px</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref(100)
const splitKey = ref(0)

const handleResizeStart = (index: number, sizes: number[]) => {
  console.log('resizeStart', index, sizes)
}

const handleResize = (index: number, sizes: number[]) => {
  console.log('resize', index, sizes)
}

const handleResizeEnd = (index: number, sizes: number[]) => {
  console.log('resizeEnd', index, sizes)
}
const changeSize = () => {
  size.value = 100
}
</script>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
