<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">
      控制功能 - 手动控制滚动
    </div>

    <el-auto-scroll-text
      ref="scrollRef"
      text="这是一段非常非常长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持手动控制滚动。这段文本必须足够长才能触发滚动效果。"
      :auto-start="false"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="60"
    />

    <div class="mt-4 flex gap-2">
      <el-button @click="startScroll">开始滚动</el-button>
      <el-button @click="pauseScroll">暂停滚动</el-button>
      <el-button @click="resumeScroll">恢复滚动</el-button>
      <el-button @click="resetScroll">重置滚动</el-button>
      <el-button @click="stopScroll">停止滚动</el-button>
    </div>

    <div class="mt-4 text-sm text-gray-600">
      <p>当前状态：{{ getStatusText() }}</p>
      <p>滚动位置：{{ scrollStatus.scrollPosition.toFixed(2) }}px</p>
      <p>是否需要滚动：{{ scrollStatus.shouldScroll ? '是' : '否' }}</p>
      <p>是否正在滚动：{{ scrollStatus.isScrolling ? '是' : '否' }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const scrollRef = ref()
const hasStarted = ref(false) // 跟踪是否已经手动开始过滚动
const scrollStatus = ref({
  isPaused: false,
  scrollPosition: 0,
  shouldScroll: false,
  isScrolling: false,
})

const updateStatus = () => {
  if (scrollRef.value) {
    scrollStatus.value = scrollRef.value?.getScrollStatus?.()
  }
}

const startScroll = () => {
  console.log('startScroll called, scrollRef:', scrollRef.value)
  scrollRef.value?.startScroll?.(true) // 强制开始滚动
  if (scrollRef.value?.startScroll) {
    hasStarted.value = true
    console.log('startScroll executed')
  } else {
    console.error('scrollRef not found or startScroll method not available')
  }
  updateStatus()
}

const pauseScroll = () => {
  console.log('pauseScroll called')
  scrollRef.value?.pauseScroll?.()
  updateStatus()
}

const resumeScroll = () => {
  console.log('resumeScroll called')
  scrollRef.value?.resumeScroll?.()
  if (scrollRef.value?.resumeScroll) {
    hasStarted.value = true // 恢复滚动时标记为已开始
  }
  updateStatus()
}

const resetScroll = () => {
  console.log('resetScroll called')
  scrollRef.value?.resetScroll?.()
  if (scrollRef.value?.resetScroll) {
    hasStarted.value = false // 重置时清除开始状态
  }
  updateStatus()
}

const stopScroll = () => {
  console.log('stopScroll called')
  scrollRef.value?.stopScroll?.()
  if (scrollRef.value?.stopScroll) {
    hasStarted.value = true // 停止滚动时标记为已开始过
  }
  updateStatus()
}

const getStatusText = () => {
  if (!scrollRef.value) return '未初始化'

  const status = scrollRef.value.getScrollStatus()

  if (status.isPaused) {
    return '已暂停'
  }
  if (status.isScrolling) {
    return '滚动中'
  }
  if (status.shouldScroll && !hasStarted.value) {
    return '未开始'
  }
  if (status.shouldScroll && hasStarted.value) {
    return '已停止'
  }
  return '无需滚动'
}

onMounted(() => {
  updateStatus()
})
</script>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
