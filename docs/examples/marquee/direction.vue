<template>
  <div class="demo-marquee">
    <h3>横向滚动（默认）</h3>
    <el-marquee direction="horizontal">
      <el-marquee-item
        >这是横向滚动的跑马灯内容，文字会从右向左滚动</el-marquee-item
      >
    </el-marquee>

    <h3>竖向滚动</h3>
    <el-marquee direction="vertical" :speed="30">
      <el-marquee-item>这是竖向滚动的跑马灯内容</el-marquee-item>
      <el-marquee-item>第二行内容</el-marquee-item>
      <el-marquee-item>第三行内容</el-marquee-item>
      <el-marquee-item>第四行内容</el-marquee-item>
    </el-marquee>

    <h3>动态切换方向</h3>
    <div class="direction-controls">
      <el-button @click="currentDirection = 'horizontal'">横向滚动</el-button>
      <el-button @click="currentDirection = 'vertical'">竖向滚动</el-button>
    </div>
    <el-marquee :key="currentDirection" :direction="currentDirection">
      <el-marquee-item
        >当前方向：{{
          currentDirection === 'horizontal' ? '横向' : '竖向'
        }}</el-marquee-item
      >
    </el-marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElMarquee, ElMarqueeItem } from 'element-plus'

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
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 10px;
  height: 60px;
}

.direction-controls {
  margin-bottom: 15px;
}

.direction-controls .el-button {
  margin-right: 10px;
}
</style>
