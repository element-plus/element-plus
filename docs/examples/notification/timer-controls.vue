<template>
  <el-button plain @click="resettable"> Resettable notification </el-button>
  <el-button plain @click="pauseable"> Pauseable notification </el-button>
</template>
<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const resettable = () => {
  ElNotification({
    showProgressBar: true,
    title: 'Resettable, Hover me',
    message: 'Resets progress on mouseenter, starts again on mouseleave.',
    timerControls: 'reset-restart',
  })
}

const pauseable = () => {
  ElNotification({
    showProgressBar: true,
    title: 'Pauseable, Hover me',
    message: 'Pauses progress on mouseenter, resumes on mouseleave.',
    timerControls: 'pause-resume',
  })
}
</script>
