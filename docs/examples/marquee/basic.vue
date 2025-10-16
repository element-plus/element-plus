<template>
  <div class="demo-marquee">
    <h3>基础用法</h3>
    <el-marquee>
      这是一个基础的跑马灯组件示例，内容足够长才能触发滚动效果
    </el-marquee>

    <el-marquee direction="vertical">
      这是一个基础的跑马灯组件示例，内容足够长才能触发滚动效果
    </el-marquee>

    <h3>自定义内容</h3>
    <el-marquee>
      <el-tag type="success">成功标签</el-tag>
      <el-tag type="warning">警告标签</el-tag>
      <el-tag type="info">信息标签</el-tag>
      <el-tag type="danger">错误标签</el-tag>
      <el-tag type="primary">主要标签</el-tag>
      <el-tag type="success">成功标签</el-tag>
      <el-tag type="warning">警告标签</el-tag>
    </el-marquee>

    <h3>多个项目</h3>
    <el-marquee>
      <span>第一个项目</span>
      <span>第二个项目</span>
      <span>第三个项目</span>
      <span>第四个项目</span>
      <span>第五个项目</span>
      <span>第六个项目</span>
      <span>第七个项目</span>
      <span>第八个项目</span>
    </el-marquee>
  </div>
</template>

<script setup>
import { ElMarquee, ElTag } from 'element-plus'
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
  max-width: 100%;
}

.el-tag {
  margin-right: 10px;
}

span {
  margin-right: 20px;
}
</style>
