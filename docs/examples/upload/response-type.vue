<template>
  <el-upload :on-success="onSuccess" :on-error="onError">
    <el-button> upload </el-button>
  </el-upload>
</template>

<script setup lang="ts">
import type {
  UploadFile,
  UploadFiles,
  UploadProps,
} from '@element-plus/components'
interface Res {
  code: number
  message: string
  data: {
    url: string
    name: string
  }
}

const onSuccess = (
  response: Res,
  uploadFile: UploadFile<Res>,
  uploadFiles: UploadFiles<Res>
) => {
  console.log(uploadFile.response?.data.url)
}

const onError: UploadProps['onError'] = (
  err,
  uploadFile: UploadFile<Res>,
  uploadFiles: UploadFiles<Res>
) => {
  console.log(uploadFile.response?.data.url)
}
</script>
