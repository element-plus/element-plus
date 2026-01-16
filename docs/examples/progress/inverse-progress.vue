<template>
  <div class="demo-progress">
    <div class="progress-row">
      <span class="label">Normal (left to right):</span>
      <el-progress :percentage="percentage" />
    </div>
    <div class="progress-row">
      <span class="label">Inverse (right to left):</span>
      <el-progress :percentage="percentage" inverse />
    </div>
    <div class="progress-row">
      <span class="label">Normal with text inside:</span>
      <el-progress :percentage="percentage" :stroke-width="20" text-inside />
    </div>
    <div class="progress-row">
      <span class="label">Inverse with text inside:</span>
      <el-progress
        :percentage="percentage"
        :stroke-width="20"
        text-inside
        inverse
      />
    </div>
    <div class="circle-row">
      <div>
        <p>Normal circle</p>
        <el-progress type="circle" :percentage="percentage" />
      </div>
      <div>
        <p>Inverse circle</p>
        <el-progress type="circle" :percentage="percentage" inverse />
      </div>
    </div>
    <div>
      <el-button-group>
        <el-button :icon="Minus" @click="decrease" />
        <el-button :icon="Plus" @click="increase" />
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(50)

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}

const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}

.progress-row {
  margin-bottom: 20px;
}

.label {
  display: inline-block;
  width: 200px;
  font-size: 14px;
  color: var(--el-text-color-regular);
}

.circle-row {
  display: flex;
  gap: 40px;
  margin: 20px 0;
}

.circle-row > div {
  text-align: center;
}

.circle-row p {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-regular);
}
</style>
