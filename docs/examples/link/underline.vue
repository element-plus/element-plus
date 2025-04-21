<template>
  <div>
    <el-link>default</el-link>
    <el-link type="primary" underline="always">always</el-link>
    <el-link type="success" underline="hover">hover</el-link>
    <el-link type="warning" underline="never">never</el-link>
    <el-link type="danger" :underline="false">false</el-link>
    <el-link type="info" underline>true</el-link>
  </div>
</template>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
