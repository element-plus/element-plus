<template>
  <div class="demo-progress">
    <el-progress :percentage="50">
      <el-button text>Content</el-button>
    </el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </el-progress>
    <el-progress type="circle" :percentage="100" status="success">
      <el-button type="success" :icon="Check" circle />
    </el-progress>
    <el-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </el-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
