<template>
  <div class="flex gap-12">
    <div class="grid gap-3">
      <el-button @click="handleClick">
        openPreview with showPreview method
      </el-button>
      <el-image
        ref="imageRef"
        style="width: 100px; height: 100px"
        :src="url"
        show-progress
        :preview-src-list="srcList"
        fit="cover"
      />
    </div>
    <div>
      <el-button @click="showPreview = true"> preview controlled </el-button>
      <el-image-viewer
        v-if="showPreview"
        :url-list="srcList"
        show-progress
        :initial-index="4"
        @close="showPreview = false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ImageInstance } from 'element-plus'

const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const imageRef = ref<ImageInstance>()
const showPreview = ref(false)

const handleClick = () => {
  imageRef.value!.showPreview()
}
</script>
