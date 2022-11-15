<template>
  <el-space wrap>
    <el-link :underline="false">Without Underline</el-link>
    <el-link>With Underline</el-link>
  </el-space>
</template>
<style scoped>
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>
