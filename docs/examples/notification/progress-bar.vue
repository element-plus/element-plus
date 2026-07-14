<template>
  <el-button plain @click="open('')"> Default </el-button>
  <el-button plain type="success" @click="open('success')"> Success </el-button>
  <el-button plain type="warning" @click="open('warning')"> Warning </el-button>
  <el-button plain type="danger" @click="open('error')"> Error </el-button>
  <el-button plain type="info" @click="open('info')"> Info </el-button>
  <el-button plain @click="openWithoutPause"> No pause on hover </el-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

function open(type: string) {
  ElNotification({
    title: `${type || 'Default'} progress`,
    message: 'Hover to pause the timer and progress bar',
    type: type as any,
    duration: 6000,
    showProgress: true,
  })
}

function openWithoutPause() {
  ElNotification({
    title: 'No pause on hover',
    message: 'Timer and progress bar keep running even when hovering',
    duration: 6000,
    showProgress: true,
    pauseOnHover: false,
  })
}
</script>
