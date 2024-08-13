<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('This is a message.')
}

const openVn = () => {
  ElMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
