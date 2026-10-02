<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div class="fade-container">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.fade-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  min-height: 100px;
  margin-top: 20px;
}

.transition-box {
  width: 200px;
  height: 100px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-color-primary);
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
