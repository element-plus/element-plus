<template>
  <div style="max-width: 600px">
    <el-alert title="Primary alert" type="primary" effect="dark" />
    <el-alert title="Success alert" type="success" effect="dark" />
    <el-alert title="Info alert" type="info" effect="dark" />
    <el-alert title="Warning alert" type="warning" effect="dark" />
    <el-alert title="Error alert" type="error" effect="dark" />
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
