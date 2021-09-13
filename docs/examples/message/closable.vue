<template>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const open1 = () => {
      ElMessage({
        showClose: true,
        message: 'This is a message.',
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
    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
})
</script>
