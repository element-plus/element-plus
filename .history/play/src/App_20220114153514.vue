<template>
<el-config-provider prefixClass="jx">
<div class="play-container">
    
  <el-select-v2
    v-model="value1"
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle"
    allow-create
    filterable
    multiple
    clearable
  />
  <el-select-v2
    v-model="value2"
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle"
    allow-create
    filterable
    clearable
  />



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
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])
const value2 = ref('')
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
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
