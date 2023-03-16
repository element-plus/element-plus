<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <el-text class="custom-tabs-label">
          <el-icon class="mr-2">
            <calendar />
          </el-icon>
          <el-text>Route</el-text>
        </el-text>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
</script>
