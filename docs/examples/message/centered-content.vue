<template>
  <el-button plain @click="openCenter">Centered text</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const openCenter = () => {
      ElMessage({
        showClose: true,
        message: 'Centered text',
        center: true,
      })
    }
    return {
      openCenter,
    }
  },
})
</script>
