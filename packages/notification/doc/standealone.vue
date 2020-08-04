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
import Notify from '../src/notify'
export default {
  methods: {
    onClick(): void {
      Notify({
        title: 'Normal title',
        message: 'HI',
      })
    },
    onClickSuccess(): void {
      Notify.success({
        title: 'Success',
        message: 'Success notification!',
      })
    },
    onClickWarning(): void {
      Notify.warning({
        title: 'Warning',
        message: 'Warning notification',
      })
    },
    onClickInfo(): void {
      Notify.info({
        title: 'Info',
        message: 'Info notification',
      })
    },
    onClickError(): void {
      Notify.error({
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
