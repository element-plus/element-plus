<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElMessageBox.alert('This is a message', 'Title', {
        confirmButtonText: 'OK',
        callback: (action) => {
          ElMessage({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    }

    return {
      open,
    }
  },
})
</script>
