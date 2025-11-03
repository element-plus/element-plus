<template>
  <div style="max-width: 600px">
    <el-alert
      title="Primary alert that appearance after 5000 milliseconds"
      type="primary"
      :show-after="5000"
      @open="console.log('open')"
    />
    <el-alert
      title="Success alert that disappear after 5000 milliseconds"
      type="success"
      :hide-after="5000"
    />
    <el-alert
      title="Info alert that in 5000 milliseconds to be hidden"
      type="info"
      :closable="false"
      :auto-close="5000"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
