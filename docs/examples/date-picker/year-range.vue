<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="yearrange"
        range-separator="To"
        start-placeholder="Start Year"
        end-placeholder="End Year"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <el-date-picker
        v-model="value2"
        type="yearrange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start Year"
        end-placeholder="End Year"
        :shortcuts="shortcuts"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()

const shortcuts = [
  {
    text: 'This Year',
    value: [new Date(), new Date()],
  },
  {
    text: 'Last 10 years',
    value: () => {
      const end = new Date()
      const start = new Date(
        new Date().setFullYear(new Date().getFullYear() - 10)
      )
      return [start, end]
    },
  },
  {
    text: 'Next 50 years',
    value: () => {
      const start = new Date()
      const end = new Date(
        new Date().setFullYear(new Date().getFullYear() + 50)
      )
      return [start, end]
    },
  },
]
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
