<template>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  />
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  />
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  />
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  />
</template>
<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
