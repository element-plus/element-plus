<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    directory
    multiple
    :on-change="handleChange"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop directory here or <em>click to upload</em>
    </div>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'

import type { UploadFile, UploadFiles } from 'element-plus'

const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>
