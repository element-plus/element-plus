<template>
  <div class="demo-marquee">
    <h3>程序化控制</h3>
    <div class="program-controls">
      <el-button @click="marqueeRef?.pauseScroll()">暂停</el-button>
      <el-button @click="marqueeRef?.resumeScroll()">继续</el-button>
      <el-button @click="marqueeRef?.resetScroll()">重置</el-button>
      <el-button @click="marqueeRef?.startScroll()">开始</el-button>
      <el-button @click="marqueeRef?.stopScroll()">停止</el-button>
    </div>
    <el-marquee ref="marqueeRef">
      这是通过程序化控制的跑马灯，可以通过上面的按钮来控制滚动状态
    </el-marquee>

    <h3>获取滚动状态</h3>
    <div class="status-display">
      <el-button @click="getStatus">获取状态</el-button>
      <div v-if="status" class="status-info">
        <p>是否暂停：{{ status.isPaused }}</p>
        <p>滚动位置：{{ status.scrollPosition }}</p>
        <p>是否需要滚动：{{ status.shouldScroll }}</p>
        <p>是否正在滚动：{{ status.isScrolling }}</p>
      </div>
    </div>

    <h3>鼠标悬停暂停</h3>
    <el-marquee :pause-on-hover="true">
      将鼠标悬停在此跑马灯上可以暂停滚动，移开鼠标后继续滚动
    </el-marquee>

    <h3>自定义控制按钮</h3>
    <div class="custom-controls">
      <el-button
        :icon="isPaused ? 'VideoPlay' : 'VideoPause'"
        @click="togglePause"
      >
        {{ isPaused ? '继续' : '暂停' }}
      </el-button>
      <el-button icon="Refresh" @click="reset">重置</el-button>
    </div>
    <el-marquee
      ref="customMarqueeRef"
      @scroll-pause="onPause"
      @scroll-resume="onResume"
    >
      这是带有自定义控制按钮的跑马灯，你可以使用上面的按钮来控制
    </el-marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElMarquee } from 'element-plus'

const marqueeRef = ref()
const customMarqueeRef = ref()
const status = ref(null)
const isPaused = ref(false)

const getStatus = () => {
  if (marqueeRef.value) {
    status.value = marqueeRef.value.getScrollStatus()
  }
}

const togglePause = () => {
  if (customMarqueeRef.value) {
    customMarqueeRef.value.togglePause()
  }
}

const reset = () => {
  if (customMarqueeRef.value) {
    customMarqueeRef.value.resetScroll()
  }
}

const onPause = () => {
  isPaused.value = true
}

const onResume = () => {
  isPaused.value = false
}
</script>

<style scoped>
.demo-marquee {
  padding: 20px;
}

.demo-marquee h3 {
  margin: 20px 0 10px 0;
  font-size: 16px;
  color: #333;
}

.el-marquee {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.program-controls {
  margin-bottom: 15px;
}

.program-controls .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.custom-controls {
  margin-bottom: 15px;
}

.custom-controls .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.status-display {
  margin-bottom: 15px;
}

.status-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  border-left: 4px solid #409eff;
}

.status-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}
</style>
