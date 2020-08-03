<template>
  <div>
    <el-button class="item" @click="onClick">HTML tags</el-button>
    <el-button class="item" @click="onClickVNode"> VNode </el-button>
  </div>
</template>

<script lang="ts">
import { h } from 'vue'
import Notification from '../src/standalone'
export default {
  methods: {
    onClick(): void {
      Notification({
        title: 'This is title',
        message: '<strong>This is <i>HTML</i> segement</strong>',
        dangerouslyUseHTMLString: true,
      })
    },
    onClickVNode(): void {
      Notification({
        title: 'This is a vnode',
        message: h('strong', ['This is ', h('i', 'VNode'), ' segment']),
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
