<template>
  <div class="demo-marquee">
    <h3>基础用法</h3>
    <el-marquee>
      <el-marquee-item>这是一个基础的跑马灯组件示例</el-marquee-item>
    </el-marquee>

    <h3>自定义内容</h3>
    <el-marquee>
      <el-marquee-item>
        <el-tag type="success">成功标签</el-tag>
        <el-tag type="warning">警告标签</el-tag>
        <el-tag type="info">信息标签</el-tag>
        <el-tag type="danger">错误标签</el-tag>
      </el-marquee-item>
    </el-marquee>

    <h3>多个项目</h3>
    <el-marquee>
      <el-marquee-item>第一个项目</el-marquee-item>
      <el-marquee-item>第二个项目</el-marquee-item>
      <el-marquee-item>第三个项目</el-marquee-item>
    </el-marquee>
  </div>
</template>

<script setup>
import { ElMarquee, ElMarqueeItem, ElTag } from 'element-plus'
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

.el-tag {
  margin-right: 10px;
}
</style>
