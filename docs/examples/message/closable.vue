<template>
  <el-button :plain="true" @click="open6">Primary</el-button>
  <el-button :plain="true" @click="open2">Success</el-button>
  <el-button :plain="true" @click="open3">Warning</el-button>
  <el-button :plain="true" @click="open1">Info</el-button>
  <el-button :plain="true" @click="open4">Error</el-button>
  <el-button :plain="true" @click="open5">Won't close automatically</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a info message.',
  })
}
const open2 = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
const open5 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a message that does not automatically close.',
    duration: 0,
  })
}
const open6 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a primary message.',
    type: 'primary',
  })
}
</script>
