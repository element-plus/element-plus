<template>
  <div style="max-width: 600px">
    <el-alert title="Unclosable alert" type="success" :closable="false" />
    <el-alert title="Customized close text" type="info" close-text="Gotcha" />
    <el-alert title="Alert with callback" type="warning" @close="hello" />
  </div>
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
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
