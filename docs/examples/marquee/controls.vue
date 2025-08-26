<template>
  <div class="demo-marquee">
    <h3>默认控制按钮</h3>
    <el-marquee :show-controls="true">
      <el-marquee-item
        >这是带有默认控制按钮的跑马灯，可以暂停、继续和重置</el-marquee-item
      >
    </el-marquee>

    <h3>隐藏控制按钮</h3>
    <el-marquee :show-controls="false">
      <el-marquee-item
        >这是隐藏了控制按钮的跑马灯，只能通过鼠标悬停来暂停</el-marquee-item
      >
    </el-marquee>

    <h3>自定义按钮文案</h3>
    <el-marquee
      :show-controls="true"
      pause-button-text="暂停播放"
      resume-button-text="继续播放"
      reset-button-text="重新开始"
    >
      <el-marquee-item>这是带有自定义按钮文案的跑马灯</el-marquee-item>
    </el-marquee>

    <h3>程序化控制</h3>
    <div class="program-controls">
      <el-button @click="marqueeRef?.pauseScroll()">暂停</el-button>
      <el-button @click="marqueeRef?.resumeScroll()">继续</el-button>
      <el-button @click="marqueeRef?.resetScroll()">重置</el-button>
      <el-button @click="marqueeRef?.startScroll()">开始</el-button>
      <el-button @click="marqueeRef?.stopScroll()">停止</el-button>
    </div>
    <el-marquee ref="marqueeRef" :show-controls="false">
      <el-marquee-item
        >这是通过程序化控制的跑马灯，可以通过上面的按钮来控制</el-marquee-item
      >
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElMarquee, ElMarqueeItem } from 'element-plus'

const marqueeRef = ref()
const status = ref(null)

const getStatus = () => {
  if (marqueeRef.value) {
    status.value = marqueeRef.value.getScrollStatus()
  }
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
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 10px;
}

.program-controls {
  margin-bottom: 15px;
}

.program-controls .el-button {
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
