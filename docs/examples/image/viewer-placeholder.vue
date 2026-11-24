<template>
  <el-image
    ref="imageRef"
    style="width: 200px; height: 150px"
    :src="urls[0]"
    :preview-src-list="srcList"
    fit="cover"
  >
    <template #viewer-placeholder="{ activeIndex, src }">
      <div class="viewer-placeholder" :title="src">
        <el-icon class="is-loading" :size="32">
          <Loading />
        </el-icon>
        <span>Loading image {{ activeIndex + 1 }}...</span>
      </div>
    </template>
  </el-image>
  <div class="viewer-placeholder-controls">
    <el-button @click="reloadPreview">Reload preview</el-button>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { Loading } from '@element-plus/icons-vue'

import type { ImageInstance } from 'element-plus'

const imageRef = ref<ImageInstance>()
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
const srcList = ref(urls)

const reloadPreview = async () => {
  const timestamp = Date.now()
  srcList.value = urls.map((url) => `${url}?preview=${timestamp}`)
  await nextTick()
  imageRef.value?.showPreview()
}
</script>

<style scoped>
.viewer-placeholder-controls {
  margin-top: 16px;
}
.viewer-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #fff;
}
</style>
