<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="margin-top: 20px; height: 210px">
      <el-collapse-transition>
        <div v-show="show">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box mt-[10px]">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
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
