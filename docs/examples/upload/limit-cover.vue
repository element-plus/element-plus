<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button size="small" type="primary">select file</el-button>
    </template>
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >upload to server</el-button
    >
    <template #tip>
      <div class="el-upload__tip" style="color: red">
        limit 1 file, new file will cover the old file
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const upload = ref()

const handleExceed = (files) => {
  upload.value.clearFiles(['ready', 'success', 'fail', 'uploading'])
  upload.value.handleStart(files[0])
}
const submitUpload = () => {
  upload.value.submit()
}
</script>
