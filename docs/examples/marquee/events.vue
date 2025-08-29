<template>
  <div class="demo-marquee">
    <h3>事件监听</h3>
    <el-marquee
      @scroll-start="handleScrollStart"
      @scroll-pause="handleScrollPause"
      @scroll-resume="handleScrollResume"
      @scroll-end="handleScrollEnd"
    >
      这是一个带有事件监听的跑马灯，请查看控制台输出
    </el-marquee>

    <h3>事件状态显示</h3>
    <div class="event-status">
      <el-tag :type="eventStatus.scrollStart ? 'success' : 'info'">
        开始滚动: {{ eventStatus.scrollStart ? '已触发' : '未触发' }}
      </el-tag>
      <el-tag :type="eventStatus.scrollPause ? 'warning' : 'info'">
        暂停滚动: {{ eventStatus.scrollPause ? '已触发' : '未触发' }}
      </el-tag>
      <el-tag :type="eventStatus.scrollResume ? 'success' : 'info'">
        恢复滚动: {{ eventStatus.scrollResume ? '已触发' : '未触发' }}
      </el-tag>
      <el-tag :type="eventStatus.scrollEnd ? 'danger' : 'info'">
        滚动结束: {{ eventStatus.scrollEnd ? '已触发' : '未触发' }}
      </el-tag>
    </div>

    <h3>手动触发事件</h3>
    <div class="manual-controls">
      <el-button @click="triggerScrollStart">触发开始事件</el-button>
      <el-button @click="triggerScrollPause">触发暂停事件</el-button>
      <el-button @click="triggerScrollResume">触发恢复事件</el-button>
      <el-button @click="triggerScrollEnd">触发结束事件</el-button>
    </div>

    <h3>事件日志</h3>
    <div class="event-log">
      <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
        <span class="log-time">{{ log.time }}</span>
        <span class="log-event">{{ log.event }}</span>
        <span class="log-desc">{{ log.description }}</span>
      </div>
      <div v-if="eventLogs.length === 0" class="no-logs">暂无事件日志</div>
    </div>

    <div class="clear-logs">
      <el-button size="small" @click="clearLogs">清空日志</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElMarquee, ElTag } from 'element-plus'

const eventStatus = ref({
  scrollStart: false,
  scrollPause: false,
  scrollResume: false,
  scrollEnd: false,
})

const eventLogs = ref([])

const addLog = (event, description) => {
  const now = new Date()
  const time = now.toLocaleTimeString()
  eventLogs.value.unshift({
    time,
    event,
    description,
  })

  // 限制日志数量
  if (eventLogs.value.length > 20) {
    eventLogs.value = eventLogs.value.slice(0, 20)
  }
}

const handleScrollStart = () => {
  eventStatus.value.scrollStart = true
  addLog('scroll-start', '滚动开始')
  console.log('滚动开始事件触发')
}

const handleScrollPause = () => {
  eventStatus.value.scrollPause = true
  addLog('scroll-pause', '滚动暂停')
  console.log('滚动暂停事件触发')
}

const handleScrollResume = () => {
  eventStatus.value.scrollResume = true
  addLog('scroll-resume', '滚动恢复')
  console.log('滚动恢复事件触发')
}

const handleScrollEnd = () => {
  eventStatus.value.scrollEnd = true
  addLog('scroll-end', '滚动结束')
  console.log('滚动结束事件触发')
}

const triggerScrollStart = () => {
  addLog('manual', '手动触发开始事件')
}

const triggerScrollPause = () => {
  addLog('manual', '手动触发暂停事件')
}

const triggerScrollResume = () => {
  addLog('manual', '手动触发恢复事件')
}

const triggerScrollEnd = () => {
  addLog('manual', '手动触发结束事件')
}

const clearLogs = () => {
  eventLogs.value = []
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

.event-status {
  margin-bottom: 20px;
}

.event-status .el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}

.manual-controls {
  margin-bottom: 20px;
}

.manual-controls .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.event-log {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 10px;
  background-color: #fafafa;
  margin-bottom: 15px;
}

.log-item {
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.log-time {
  color: #909399;
  margin-right: 15px;
  min-width: 80px;
}

.log-event {
  color: #409eff;
  margin-right: 15px;
  min-width: 100px;
}

.log-desc {
  color: #606266;
}

.no-logs {
  color: #909399;
  text-align: center;
  padding: 20px;
}

.clear-logs {
  text-align: right;
}
</style>
