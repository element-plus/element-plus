<template>
  <el-button plain @click="open"> Notification with offset </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElNotification } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElNotification.success({
        title: 'Success',
        message: 'This is a success message',
        offset: 100,
      })
    }

    return {
      open,
    }
  },
})
</script>
