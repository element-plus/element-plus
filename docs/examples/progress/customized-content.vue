<template>
  <el-progress :percentage="50" class="mb-3">
    <el-button text>Content</el-button>
  </el-progress>
  <el-progress
    :text-inside="true"
    :stroke-width="20"
    :percentage="50"
    status="exception"
    class="mb-3"
  >
    <el-text>Content</el-text>
  </el-progress>
  <el-progress type="circle" :percentage="100" status="success" class="mr-3">
    <el-button type="success" :icon="Check" circle />
  </el-progress>
  <el-progress type="dashboard" :percentage="80">
    <template #default="{ percentage }">
      <el-text>{{ percentage }}%Progressing</el-text>
    </template>
  </el-progress>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>
