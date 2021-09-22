<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElMessageBox.confirm(
        'proxy will permanently delete the file. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          ElMessage({
            type: 'success',
            message: 'Delete completed',
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled',
          })
        })
    }

    return {
      open,
    }
  },
})
</script>
