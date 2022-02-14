<template>
  <el-button plain @click="open1"> Top Right </el-button>
  <el-button plain @click="open2"> Bottom Right </el-button>
  <el-button plain @click="open3"> Bottom Left </el-button>
  <el-button plain @click="open4"> Top Left </el-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const open1 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
