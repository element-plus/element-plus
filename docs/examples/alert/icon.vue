<template>
  <div style="max-width: 600px">
    <el-alert title="success alert" type="success" show-icon />
    <el-alert title="info alert" type="info" show-icon />
    <el-alert title="warning alert" type="warning" show-icon />
    <el-alert title="error alert" type="error" show-icon />
  </div>
</template>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
