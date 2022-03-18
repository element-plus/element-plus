<template>
  <el-alert title="success alert" type="success" center show-icon />
  <el-alert title="info alert" type="info" center show-icon />
  <el-alert title="warning alert" type="warning" center show-icon />
  <el-alert title="error alert" type="error" center show-icon />
</template>
<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
