<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">事件监听示例</div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持各种事件监听。"
      :auto-start="false"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :closable="true"
      @scroll-start="handleScrollStart"
      @scroll-pause="handleScrollPause"
      @scroll-resume="handleScrollResume"
      @scroll-end="handleScrollEnd"
      @close="handleClose"
    />

    <div class="mt-4">
      <div class="sub-title my-2 text-sm text-gray-600">事件日志：</div>
      <div class="bg-gray-100 p-3 rounded text-sm max-h-40 overflow-y-auto">
        <div v-for="(log, index) in eventLogs" :key="index" class="mb-1">
          <span class="text-blue-600">{{ log.time }}</span>
          <span class="text-green-600 ml-2">{{ log.event }}</span>
          <span class="text-gray-600 ml-2">{{ log.message }}</span>
        </div>
        <div v-if="eventLogs.length === 0" class="text-gray-500">
          暂无事件记录
        </div>
      </div>
    </div>

    <div class="mt-4 flex gap-2">
      <el-button @click="clearLogs">清空日志</el-button>
      <el-button @click="startScroll">开始滚动</el-button>
      <el-button @click="pauseScroll">暂停滚动</el-button>
      <el-button @click="resumeScroll">恢复滚动</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const scrollRef = ref()
const eventLogs = ref<Array<{ time: string; event: string; message: string }>>(
  []
)

const addLog = (event: string, message: string) => {
  const time = new Date().toLocaleTimeString()
  eventLogs.value.unshift({ time, event, message })
  if (eventLogs.value.length > 20) {
    eventLogs.value = eventLogs.value.slice(0, 20)
  }
}

const handleScrollStart = () => {
  addLog('scroll-start', '滚动开始')
}

const handleScrollPause = () => {
  addLog('scroll-pause', '滚动暂停')
}

const handleScrollResume = () => {
  addLog('scroll-resume', '滚动恢复')
}

const handleScrollEnd = () => {
  addLog('scroll-end', '滚动结束')
}

const handleClose = () => {
  addLog('close', '组件关闭')
}

const clearLogs = () => {
  eventLogs.value = []
}

const startScroll = () => {
  scrollRef.value?.startScroll()
}

const pauseScroll = () => {
  scrollRef.value?.pauseScroll()
}

const resumeScroll = () => {
  scrollRef.value?.resumeScroll()
}
</script>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
