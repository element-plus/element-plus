<template>
  <el-button plain @click="open1"> Closes automatically </el-button>
  <el-button plain @click="open2"> Won't close automatically </el-button>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { ElNotification } from 'element-plus'

export default defineComponent({
  setup() {
    const open1 = () => {
      ElNotification({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
      })
    }

    const open2 = () => {
      ElNotification({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0,
      })
    }
    return {
      open1,
      open2,
    }
  },
})
</script>
