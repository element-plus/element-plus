<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">date range</span>
      <el-date-picker v-model="value1" type="daterange" single-panel />
    </div>
    <div class="block">
      <span class="demonstration">month range</span>
      <el-date-picker v-model="value2" type="monthrange" single-panel />
    </div>
    <div class="block">
      <span class="demonstration">year range</span>
      <el-date-picker v-model="value3" type="yearrange" single-panel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()
const value3 = ref()
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
