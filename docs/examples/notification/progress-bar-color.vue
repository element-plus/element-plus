<template>
  <el-button plain @click="openFlat"> Flat color </el-button>
  <el-button plain @click="openSegmented"> Segmented </el-button>
  <el-button plain @click="openFunction"> Dynamic function </el-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

function openFlat() {
  ElNotification({
    title: 'Flat color',
    message: 'Custom progress bar color overrides the default',
    duration: 6000,
    progress: { color: '#409EFF' },
  })
}

function openSegmented() {
  ElNotification({
    title: 'Segmented',
    message: 'Color changes at each percentage threshold',
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

function openFunction() {
  ElNotification({
    title: 'Dynamic function',
    message: 'Color is computed based on the current percentage',
    duration: 6000,
    progress: {
      color: (percentage: number) => {
        if (percentage > 80) return '#67C23A'
        if (percentage > 40) return '#E6A23C'
        return '#F56C6C'
      },
    },
  })
}
</script>
