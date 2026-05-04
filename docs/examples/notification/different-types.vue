<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" plain @click="open5">Primary</el-button>
    <el-button class="!ml-0" plain @click="open1">Success</el-button>
    <el-button class="!ml-0" plain @click="open2">Warning</el-button>
    <el-button class="!ml-0" plain @click="open3">Info</el-button>
    <el-button class="!ml-0" plain @click="open4">Error</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}

const open5 = () => {
  ElNotification({
    title: 'Primary',
    message: 'This is a primary message',
    type: 'primary',
  })
}
</script>
