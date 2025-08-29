<template>
  <div class="demo-marquee">
    <h3>横向滚动（默认）</h3>
    <el-marquee direction="horizontal">
      这是横向滚动的跑马灯内容，文字会从右向左滚动
    </el-marquee>

    <h3>竖向滚动</h3>
    <el-marquee direction="vertical" :speed="30">
      <div>这是竖向滚动的跑马灯内容</div>
      <div>第二行内容</div>
      <div>第三行内容</div>
      <div>第四行内容</div>
    </el-marquee>

    <h3>动态切换方向</h3>
    <div class="direction-controls">
      <el-button @click="currentDirection = 'horizontal'">横向滚动</el-button>
      <el-button @click="currentDirection = 'vertical'">竖向滚动</el-button>
    </div>
    <el-marquee :key="currentDirection" :direction="currentDirection">
      当前方向：{{ currentDirection === 'horizontal' ? '横向' : '竖向' }}
    </el-marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElMarquee } from 'element-plus'

const currentDirection = ref('horizontal')
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
  height: 60px;
}

.direction-controls {
  margin-bottom: 15px;
}

.direction-controls .el-button {
  margin-right: 10px;
}

div {
  margin-bottom: 5px;
}
</style>
