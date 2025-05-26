<template>
  <div class="slider-demo-block">
    <el-slider v-model="value1" />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="value2" placement="bottom" />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="value3" placement="right" />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="value4" placement="left" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
