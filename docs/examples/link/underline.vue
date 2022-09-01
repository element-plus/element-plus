<template>
  <div>
    <el-link :underline="false">Without Underline</el-link>
    <el-link>With Underline</el-link>
  </div>
</template>
<style scoped>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>
