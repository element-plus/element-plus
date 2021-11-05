<template>
  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElMessage({
        message: 'this is a message.',
        grouping: true,
        type: 'success',
      })
    }

    return {
      open,
    }
  },
})
</script>
