<template>
  <el-button class="block mb-3" @click="show = !show">Click Me</el-button>

  <el-text tag="div" class="h-100px">
    <transition name="el-fade-in-linear">
      <el-text v-show="show" tag="div" class="transition-box">
        .el-fade-in-linear
      </el-text>
    </transition>
    <transition name="el-fade-in">
      <el-text v-show="show" tag="div" class="transition-box">
        .el-fade-in
      </el-text>
    </transition>
  </el-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.transition-box {
  display: inline-block;
  width: 200px;
  height: 100px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-color-primary);
  text-align: center;
  color: var(--el-color-white);
  padding: 40px 20px;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
