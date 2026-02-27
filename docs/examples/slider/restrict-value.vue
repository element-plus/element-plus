<template>
  <div class="slider-demo-block">
    <el-slider
      v-model="value1"
      vertical
      height="200px"
      :marks="marks1"
      placement="right"
      :format-tooltip="(v) => `${v}°C`"
      step="mark"
    />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="value2" :marks="marks2" step="mark" />
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowReactive } from 'vue'

import type { CSSProperties } from 'vue'

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

const value1 = ref(37)
const marks1 = shallowReactive<Marks>({
  0: '0°C',
  37: '37°C',
  100: '100°C',
})

const value2 = ref(50)
const marks2 = shallowReactive<Marks>({
  0: '0cm',
  10: '10cm',
  25: '25cm',
  50: '50cm',
  75: '75cm',
  100: '100cm',
})
const showStops = ref(true)
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
