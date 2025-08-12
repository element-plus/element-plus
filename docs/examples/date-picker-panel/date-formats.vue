<template>
  <div class="demo-date-picker-panel">
    <div class="block">
      <span class="demonstration">Emits Date object</span>
      <div class="demonstration">Value: {{ value1 }}</div>
      <el-date-picker-panel v-model="value1" type="date" format="YYYY/MM/DD" />
    </div>
    <div class="block">
      <span class="demonstration">Use value-format</span>
      <div class="demonstration">Value：{{ value2 }}</div>
      <el-date-picker-panel
        v-model="value2"
        type="date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
    </div>
    <div class="block">
      <span class="demonstration">Timestamp</span>
      <div class="demonstration">Value：{{ value3 }}</div>
      <el-date-picker-panel
        v-model="value3"
        type="date"
        format="YYYY/MM/DD"
        value-format="x"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<style scoped>
.demo-date-picker-panel {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  align-items: flex-end;
}
.demo-date-picker-panel .block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker-panel .block:last-child {
  border-right: none;
}
.demo-date-picker-panel .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
