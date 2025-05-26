<template>
  <el-button :plain="true" @click="open5">Primary</el-button>
  <el-button :plain="true" @click="open2">Success</el-button>
  <el-button :plain="true" @click="open3">Warning</el-button>
  <el-button :plain="true" @click="open1">Info</el-button>
  <el-button :plain="true" @click="open4">Error</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage('This is a info message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}
const open5 = () => {
  ElMessage.primary('This is a primary message.')
}
</script>
