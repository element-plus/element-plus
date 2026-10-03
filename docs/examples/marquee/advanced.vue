<template>
  <div class="demo-marquee">
    <h3>鼠标悬停暂停</h3>
    <el-marquee :pause-on-hover="true">
      将鼠标悬停在此跑马灯上可以暂停滚动，移开鼠标后继续滚动
    </el-marquee>

    <h3>禁用鼠标悬停暂停</h3>
    <el-marquee :pause-on-hover="false">
      这个跑马灯不会因为鼠标悬停而暂停
    </el-marquee>

    <h3>循环滚动</h3>
    <el-marquee :loop="true">
      这是一个循环滚动的跑马灯，内容会无限循环播放
    </el-marquee>

    <h3>非循环滚动</h3>
    <el-marquee :loop="false">
      这是一个非循环滚动的跑马灯，播放完成后会停止
    </el-marquee>

    <h3>自动开始控制</h3>
    <div class="auto-start-controls">
      <el-button @click="autoStart = true">启用自动开始</el-button>
      <el-button @click="autoStart = false">禁用自动开始</el-button>
    </div>
    <el-marquee :key="autoStart" :auto-start="autoStart">
      当前自动开始状态：{{ autoStart ? '启用' : '禁用' }}
    </el-marquee>

    <h3>动态内容更新</h3>
    <div class="content-controls">
      <el-button @click="addContent">添加内容</el-button>
      <el-button @click="removeContent">删除内容</el-button>
      <el-button @click="clearContent">清空内容</el-button>
    </div>
    <el-marquee ref="dynamicMarquee" :key="contentKey">
      <span
        v-for="(item, index) in dynamicContent"
        :key="index"
        class="content-item"
      >
        {{ item }}
      </span>
    </el-marquee>

    <h3>响应式布局</h3>
    <div class="responsive-container">
      <el-marquee class="responsive-marquee">
        这是一个响应式的跑马灯，会根据容器宽度自动调整
      </el-marquee>
    </div>

    <h3>组合使用</h3>
    <el-marquee
      direction="vertical"
      :speed="30"
      :pause-on-hover="true"
      :loop="true"
    >
      <el-card shadow="hover" class="marquee-card">
        <template #header>
          <div class="card-header">
            <span>公告标题</span>
            <el-tag size="small" type="primary">重要</el-tag>
          </div>
        </template>
        <div class="card-content">
          这是一个组合了多种功能的跑马灯示例，包含了卡片、标签等组件
        </div>
      </el-card>
      <el-card shadow="hover" class="marquee-card">
        <template #header>
          <div class="card-header">
            <span>通知标题</span>
            <el-tag size="small" type="success">普通</el-tag>
          </div>
        </template>
        <div class="card-content">
          第二个卡片内容，展示了跑马灯可以包含复杂的组件结构
        </div>
      </el-card>
    </el-marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElCard, ElMarquee, ElTag } from 'element-plus'

const autoStart = ref(true)
const dynamicContent = ref(['内容1', '内容2', '内容3'])
const contentKey = ref(0)

const addContent = () => {
  const newIndex = dynamicContent.value.length + 1
  dynamicContent.value.push(`内容${newIndex}`)
  contentKey.value++
}

const removeContent = () => {
  if (dynamicContent.value.length > 1) {
    dynamicContent.value.pop()
    contentKey.value++
  }
}

const clearContent = () => {
  dynamicContent.value = []
  contentKey.value++
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

.auto-start-controls,
.content-controls {
  margin-bottom: 15px;
}

.auto-start-controls .el-button,
.content-controls .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.responsive-container {
  margin-bottom: 20px;
}

.responsive-marquee {
  max-width: 100%;
}

.marquee-card {
  margin-bottom: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  font-size: 14px;
  color: #666;
}

.content-item {
  margin-right: 20px;
}
</style>
