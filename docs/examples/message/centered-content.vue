<template>
  <el-button plain @click="openCenter">Centered text</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const openCenter = () => {
  ElMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
