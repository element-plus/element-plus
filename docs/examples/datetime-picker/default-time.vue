<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">Start and end date time 12:00:00</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-time="defaultTime1"
      />
    </div>
    <div class="block">
      <span class="demonstration">
        Start date time 12:00:00, end date time 08:00:00
      </span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-time="defaultTime2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
const defaultTime2: [Date, Date] = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0),
] // '12:00:00', '08:00:00'
</script>

<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
  min-width: 300px;
}

.block:last-child {
  border-right: none;
}

.block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .block {
    flex: 100%;
    border-right: none;
    border-bottom: solid 1px var(--el-border-color);
  }

  .block:last-child {
    border-bottom: none;
  }

  :deep(.el-date-editor.el-input) {
    width: 100%;
  }

  :deep(.el-date-editor.el-input__wrapper) {
    width: 100%;
    max-width: 300px;
  }
}
</style>
