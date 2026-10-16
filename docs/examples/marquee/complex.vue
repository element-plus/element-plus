<template>
  <div class="demo-marquee-complex">
    <h3>复杂元素滚动测试</h3>

    <h4>多个标签元素</h4>
    <el-marquee direction="horizontal" :speed="40" loop>
      <el-tag type="success" size="large">成功标签</el-tag>
      <el-tag type="warning" size="large">警告标签</el-tag>
      <el-tag type="info" size="large">信息标签</el-tag>
      <el-tag type="danger" size="large">错误标签</el-tag>
      <el-tag type="primary" size="large">主要标签</el-tag>
      <el-tag type="success" size="large">成功标签</el-tag>
      <el-tag type="warning" size="large">警告标签</el-tag>
      <el-tag type="info" size="large">信息标签</el-tag>
      <el-tag type="danger" size="large">错误标签</el-tag>
      <el-tag type="primary" size="large">主要标签</el-tag>
    </el-marquee>

    <h4>混合元素组合</h4>
    <el-marquee direction="horizontal" :speed="35" loop>
      <el-button type="primary" size="small">按钮1</el-button>
      <el-tag type="success">标签1</el-tag>
      <span class="text-item">文本1</span>
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-button type="warning" size="small">按钮2</el-button>
      <el-tag type="info">标签2</el-tag>
      <span class="text-item">文本2</span>
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-button type="danger" size="small">按钮3</el-button>
      <el-tag type="primary">标签3</el-tag>
      <span class="text-item">文本3</span>
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-marquee>

    <h4>垂直滚动多个卡片</h4>
    <el-marquee direction="vertical" :speed="30" loop>
      <div class="card-item">
        <el-card shadow="hover" class="mini-card">
          <div class="card-content">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span>用户信息卡片 1</span>
          </div>
        </el-card>
      </div>
      <div class="card-item">
        <el-card shadow="hover" class="mini-card">
          <div class="card-content">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span>用户信息卡片 2</span>
          </div>
        </el-card>
      </div>
      <div class="card-item">
        <el-card shadow="hover" class="mini-card">
          <div class="card-content">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span>用户信息卡片 3</span>
          </div>
        </el-card>
      </div>
      <div class="card-item">
        <el-card shadow="hover" class="mini-card">
          <div class="card-content">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span>用户信息卡片 4</span>
          </div>
        </el-card>
      </div>
      <div class="card-item">
        <el-card shadow="hover" class="mini-card">
          <div class="card-content">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span>用户信息卡片 5</span>
          </div>
        </el-card>
      </div>
    </el-marquee>

    <h4>长文本与图标混合</h4>
    <el-marquee direction="horizontal" :speed="25" loop>
      <span class="text-with-icon">
        <el-icon><Star /></el-icon>
        这是一段很长的文本内容，用来测试滚动效果
      </span>
      <span class="text-with-icon">
        <el-icon><Heart /></el-icon>
        这是另一段很长的文本内容，继续测试滚动效果
      </span>
      <span class="text-with-icon">
        <el-icon><Like /></el-icon>
        这是第三段很长的文本内容，继续测试滚动效果
      </span>
      <span class="text-with-icon">
        <el-icon><Share /></el-icon>
        这是第四段很长的文本内容，继续测试滚动效果
      </span>
    </el-marquee>
  </div>
</template>

<script setup>
import {
  ElAvatar,
  ElButton,
  ElCard,
  ElIcon,
  ElMarquee,
  ElTag,
} from 'element-plus'
import { Heart, Like, Share, Star } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-marquee-complex {
  padding: 20px;
}

.demo-marquee-complex h3 {
  margin: 20px 0 15px 0;
  font-size: 18px;
  color: #333;
  border-bottom: 2px solid #409eff;
  padding-bottom: 5px;
}

.demo-marquee-complex h4 {
  margin: 15px 0 10px 0;
  font-size: 16px;
  color: #666;
}

.el-marquee {
  margin-bottom: 25px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  max-width: 100%;
}

.el-tag {
  margin-right: 8px;
}

.text-item {
  margin-right: 15px;
  color: #606266;
  font-size: 14px;
}

.card-item {
  margin-bottom: 10px;
}

.mini-card {
  width: 200px;
  margin: 0 auto;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.text-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-right: 20px;
  color: #606266;
  font-size: 14px;
}

.el-icon {
  color: #409eff;
}
</style>
