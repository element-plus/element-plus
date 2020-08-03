<template>
  <div>
    <el-button class="item" @click="onClick">Normal</el-button>
    <el-button class="item" @click="onClickSuccess">Success</el-button>
    <el-button class="item" @click="onClickWarning">Warning</el-button>
    <el-button class="item" @click="onClickInfo">Info</el-button>
    <el-button class="item" @click="onClickError">Error</el-button>
  </div>
</template>

<script lang="ts">
import Notification from '../src/standalone'
export default {
  methods: {
    onClick(): void {
      Notification({
        title: 'Normal title',
        message: 'HI',
      })
    },
    onClickSuccess(): void {
      Notification.success({
        title: 'Success',
        message: 'Success notification!',
      })
    },
    onClickWarning(): void {
      Notification.warning({
        title: 'Warning',
        message: 'Warning notification',
      })
    },
    onClickInfo(): void {
      Notification.info({
        title: 'Info',
        message: 'Info notification',
      })
    },
    onClickError(): void {
      Notification.error({
        title: 'Error',
        message: 'Error notification',
      })
    },
  },
}
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
