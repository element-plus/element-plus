<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" :plain="true" @click="open">
      Show message
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openVn">VNode</el-button>
  </div>
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
