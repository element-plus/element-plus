<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <el-text class="el-upload__text block">
      Drop file here or <el-text tag="em">click to upload</el-text>
    </el-text>
    <template #tip>
      <el-text class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </el-text>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue'
</script>
