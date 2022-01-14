<template>
<el-config-provider prefixClass="jx">
<div class="play-container">
    
<el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>

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
import { ElMessageBox, ElMessage } from 'element-plus'
import type { Action } from 'element-plus'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
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
