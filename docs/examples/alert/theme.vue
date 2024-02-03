<template>
  <div style="max-width: 600px">
    <el-alert title="success alert" type="success" effect="dark" />
    <el-alert title="info alert" type="info" effect="dark" />
    <el-alert title="warning alert" type="warning" effect="dark" />
    <el-alert title="error alert" type="error" effect="dark" />
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
