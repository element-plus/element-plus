<template>
  <el-button plain @click="open('')"> Default </el-button>
  <el-button plain type="success" @click="open('success')"> Success </el-button>
  <el-button plain type="warning" @click="open('warning')"> Warning </el-button>
  <el-button plain type="danger" @click="open('error')"> Error </el-button>
  <el-button plain type="info" @click="open('info')"> Info </el-button>
  <el-button plain @click="openCustomColor"> Custom color </el-button>
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
    progress: true,
  })
}

function openWithoutPause() {
  ElNotification({
    title: 'No pause on hover',
    message: 'Timer and progress bar keep running even when hovering',
    duration: 6000,
    progress: true,
    pauseOnHover: false,
  })
}

function openCustomColor() {
  ElNotification({
    title: 'Custom color',
    message: 'Custom progress bar color overrides the default',
    duration: 6000,
    progress: {
      color: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    },
  })
}
</script>
