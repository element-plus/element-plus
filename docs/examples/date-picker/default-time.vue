<template>
  <div class="demo-date-picker">
    <div class="block">
      Use Date objects
      <p>value：{{ value }}</p>
      <el-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="defaultTime"
      />
    </div>
    <div class="block">
      Use Strings
      <p>value：{{ value1 }}</p>
      <el-date-picker
        v-model="value1"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="defaultTime1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
const defaultTime1 = ref<[string, string]>(['00:00:00', '23:59:59'])
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  color: var(--el-text-color-secondary);
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
</style>
