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
import { ref } from 'vue'

const visible = ref(false)
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
