<template>
<el-config-provider prefixClass="jx">
<div class="play-container">
    
 <el-button type="text" @click="open">Click to open the Message Box</el-button>

    <el-icon color="#409EFC">
      <check-icon />
    </el-icon>
    <el-icon>
      <menu-icon />
    </el-icon>
    <el-button>test</el-button>
    <div v-loading="true"></div>
  </div>
</el-config-provider>
  
</template>

<script setup lang="ts">
import { Check as CheckIcon, Menu as MenuIcon } from '@element-plus/icons-vue'
import { h } from 'vue'
import { ElMessage } from 'element-plus'

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
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  #play {
    height: 100%;
    width: 100%;
    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
