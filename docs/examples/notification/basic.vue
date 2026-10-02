<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" plain @click="open1">
      Closes automatically
    </el-button>
    <el-button class="!ml-0" plain @click="open2">
      Won't close automatically
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

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
</script>
