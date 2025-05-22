<template>
  <div style="max-width: 600px">
    <el-alert title="Primary alert" type="primary" show-icon />
    <el-alert title="Success alert" type="success" show-icon />
    <el-alert title="Info alert" type="info" show-icon />
    <el-alert title="Warning alert" type="warning" show-icon />
    <el-alert title="Error alert" type="error" show-icon />
    <el-alert title="Error alert with custom icon" type="error" show-icon>
      <template #icon>
        <Bell />
      </template>
    </el-alert>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
