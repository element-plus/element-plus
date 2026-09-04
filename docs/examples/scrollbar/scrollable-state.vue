<template>
  <el-radio-group v-model="direction" style="margin-bottom: 10px">
    <el-radio-button value="vertical">Vertical</el-radio-button>
    <el-radio-button value="horizontal">Horizontal</el-radio-button>
    <el-radio-button value="both">Both</el-radio-button>
    <el-radio-button value="unscrollable">Unscrollable</el-radio-button>
  </el-radio-group>
  <el-scrollbar ref="scrollbarRef" height="200px">
    <div :style="contentStyle">
      <p v-for="item in count" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <div style="margin-top: 10px">
    scrollable: <el-tag :type="tagType">{{ scrollable }}</el-tag>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import type { ScrollbarInstance } from 'element-plus'

const scrollbarRef = ref<ScrollbarInstance>()
const direction = ref('vertical')

const scrollable = computed(() => scrollbarRef.value?.scrollable ?? false)
const tagType = computed(() => {
  if (scrollable.value === true) return 'success'
  if (scrollable.value === 'vertical' || scrollable.value === 'horizontal')
    return 'primary'
  return 'info'
})
const count = computed(() => {
  if (direction.value === 'horizontal' || direction.value === 'unscrollable')
    return 3
  return 5
})
const contentStyle = computed(() => {
  if (direction.value === 'horizontal' || direction.value === 'both') {
    return 'width: 110%'
  }
  return ''
})
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
