<template>
  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage({
    msgKey: 2,
    message: `this is a message.${Date.now()}`,
  })
}
</script>
