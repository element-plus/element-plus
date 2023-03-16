<template>
  <el-upload action="#" list-type="picture-card" :auto-upload="false">
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <el-image class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
      <el-text class="el-upload-list__item-actions">
        <el-text
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <el-icon><zoom-in /></el-icon>
        </el-text>
        <el-text
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <el-icon><Download /></el-icon>
        </el-text>
        <el-text
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <el-icon><Delete /></el-icon>
        </el-text>
      </el-text>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <el-image w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
