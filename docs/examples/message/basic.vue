<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElMessage('this is a message.')
    }

    const openVn = () => {
      ElMessage({
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
      })
    }

    return {
      open,
      openVn,
    }
  },
})
</script>
