<template>
  <div style="max-width: 600px">
    <el-alert title="Success alert" type="success" show-icon />
    <el-alert title="Info alert" type="info" show-icon />
    <el-alert title="Warning alert" type="warning" show-icon />
    <el-alert title="Error alert" type="error" show-icon />
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
