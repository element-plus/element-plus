<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="quarterrange"
        range-separator="To"
        start-placeholder="Start quarter"
        end-placeholder="End quarter"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <el-date-picker
        v-model="value2"
        type="quarterrange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start quarter"
        end-placeholder="End quarter"
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
    text: 'This quarter',
    value: [new Date(), new Date()],
  },
  {
    text: 'Last 4 quarters',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 9)
      return [start, end]
    },
  },
  {
    text: 'Next 8 quarters',
    value: () => {
      const start = new Date()
      const end = new Date()
      end.setMonth(end.getMonth() + 21)
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
  padding: 1.5rem 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
  min-width: 300px;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .demo-date-picker .block {
    flex: 0 0 100%;
    padding: 1rem 0;
    min-width: auto;
    border-right: none;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-date-picker .block:last-child {
    border-bottom: none;
  }
}
</style>
