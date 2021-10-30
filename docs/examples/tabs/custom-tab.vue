<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <span>
          <el-icon><calendar /></el-icon>Route
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons'
</script>
