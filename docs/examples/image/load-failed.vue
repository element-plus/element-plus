<template>
  <div class="demo-image__error" flex gap-2>
    <el-image />
    <el-image>
      <template #error>
        <div class="image-viewer-slot image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
    </el-image>
    <el-image :src="url" :preview-src-list="srcList" show-progress>
      <template #viewer-error="{ activeIndex, src }">
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
          <span>
            this is viewer-error slot. current index: {{ activeIndex }} src:
            {{ src }}
          </span>
        </div>
      </template>
    </el-image>
  </div>
</template>

<script setup lang="ts">
import { Picture as IconPicture } from '@element-plus/icons-vue'

const srcList = [
  'https://errorSrc',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
]
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
</script>

<style scoped>
.demo-image__error .el-image {
  max-width: 300px;
  max-height: 200px;
  width: 100%;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.image-viewer-slot {
  background: var(--el-fill-color-light);
}
</style>
