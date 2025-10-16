<template>
  <div class="demo-marquee">
    <h3>速度控制</h3>
    <div class="speed-controls">
      <el-button @click="currentSpeed = 20">慢速 (20px/s)</el-button>
      <el-button @click="currentSpeed = 50">中速 (50px/s)</el-button>
      <el-button @click="currentSpeed = 100">快速 (100px/s)</el-button>
      <el-button @click="currentSpeed = 200">极速 (200px/s)</el-button>
    </div>

    <el-marquee :speed="currentSpeed">
      当前速度：{{ currentSpeed }}px/s，这是一个速度可调节的跑马灯示例
    </el-marquee>

    <h3>自定义速度</h3>
    <div class="custom-speed">
      <el-input-number
        v-model="customSpeed"
        :min="10"
        :max="500"
        :step="10"
        placeholder="输入速度值"
      />
      <span class="speed-unit">px/s</span>
    </div>
    <el-marquee :speed="customSpeed">
      自定义速度：{{ customSpeed }}px/s 的跑马灯内容
    </el-marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElInputNumber, ElMarquee } from 'element-plus'

const currentSpeed = ref(50)
const customSpeed = ref(80)
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

.speed-controls {
  margin-bottom: 15px;
}

.speed-controls .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.custom-speed {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.speed-unit {
  margin-left: 10px;
  color: #666;
}
</style>
