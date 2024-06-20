<template>
  <div class="slider-demo-block">
    <span class="demonstration">No snap</span>
    <el-slider v-model="value" range :marks="marks" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">With 2% snap</span>
    <el-slider
      v-model="value2"
      range
      :marks="marks"
      :mark-snap-percentage="2"
    />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">With 5% snap</span>
    <el-slider
      v-model="value3"
      range
      :marks="marks"
      :mark-snap-percentage="5"
    />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">No snap</span>
    <el-slider v-model="value4" :min="1000" :max="10000" :marks="marks4" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">With 2% snap</span>
    <el-slider
      v-model="value5"
      :min="1000"
      :max="10000"
      :marks="marks4"
      :mark-snap-percentage="2"
    />
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

const value = ref([30, 60])
const value2 = ref([30, 60])
const value3 = ref([30, 60])
const value4 = ref(6504)
const value5 = ref(6504)
const marks = reactive<Marks>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})
const marks4 = reactive<Marks>({
  6504: '6504K',
})
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
  margin-bottom: 20px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>
