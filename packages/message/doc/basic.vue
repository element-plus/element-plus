<template>
  <div class="wrapper">
    <el-button class="item" @click="onClick">Show Message</el-button>
    <el-button class="item" @click="onClickVNode">VNode</el-button>
    <el-button class="item" @click="onClickGlobal">Global Method</el-button>
    <el-button class="item" @click="onClickClose">Close All</el-button>
  </div>
</template>

<script lang="ts">
import Message from '../src/message'
import { createVNode } from 'vue'

export default {
  methods: {
    onClick(): void {
      Message({ message: 'This is a message' })
    },
    onClickVNode(): void {
      const h = createVNode
      const vnode = h('p', null, [
        h('span', null, 'Message can be a '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ])
      Message({ message: vnode })
    },
    onClickGlobal(): void {
      this.$message('Using global method')
    },
    onClickClose(): void {
      this.$message.closeAll()
    },
  },
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  bottom: 10px;
}
</style>
