<template>
  <el-alert title="unclosable alert" type="success" :closable="false">
  </el-alert>
  <el-alert title="customized close-text" type="info" close-text="Gotcha">
  </el-alert>
  <el-alert title="alert with callback" type="warning" @close="hello">
  </el-alert>
</template>

<script lang="ts" setup>
const hello = () => {
  alert('Hello World!')
}
</script>
<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
