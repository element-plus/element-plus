<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
