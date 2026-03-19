<template>
  <div style="max-width: 600px">
    <el-alert
      title="Primary alert"
      type="primary"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Error alert"
      type="error"
      description="More text description"
      show-icon
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
