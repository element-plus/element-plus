<template>
  <el-button class="mb-3" @click="show = !show">Click Me</el-button>

  <el-text tag="div" class="h-200px">
    <el-collapse-transition>
      <el-text v-show="show" tag="div">
        <el-text tag="div" class="transition-box">
          el-collapse-transition
        </el-text>
        <el-text tag="div" class="transition-box">
          el-collapse-transition
        </el-text>
      </el-text>
    </el-collapse-transition>
  </el-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.transition-box {
  display: block;
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
