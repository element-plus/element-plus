<template>
  <div class="slider-demo-block">
    <el-slider
      v-model="value1"
      vertical
      height="200px"
      :marks="marks1"
      placement="right"
      :format-tooltip="(v) => `${v}°C`"
      restrict-to-marks
    />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="value2" :marks="marks2" restrict-to-marks />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { CSSProperties } from 'vue'

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

const value1 = ref(37)
const marks1 = reactive<Marks>({
  0: '0°C',
  37: '37°C',
  100: '100°C',
})

const value2 = ref(0)
const marks2 = [0, 10, 25, 50, 75, 100]
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
.slider-demo-block + .slider-demo-block {
  margin-top: 20px;
}
</style>
