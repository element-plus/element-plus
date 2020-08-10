<template>
  <div>
    <el-button class="item" @click="onClick">HTML tags</el-button>
    <el-button class="item" @click="onClickVNode"> VNode </el-button>
  </div>
</template>

<script lang="ts">
import { h } from 'vue'
import Notify from '../src/notify'
export default {
  methods: {
    onClick(): void {
      Notify({
        title: 'This is title',
        message: '<strong>This is <i>HTML</i> segement</strong>',
        dangerouslyUseHTMLString: true,
      })
    },
    onClickVNode(): void {
      Notify({
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
