<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="MMM DD, YYYY"
        time-format="HH:mm"
      />
    </div>
    <div class="line" />
    <div class="block">
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="Start date"
        end-placeholder="End date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="YYYY/MM/DD ddd"
        time-format="A hh:mm:ss"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  min-width: 300px;
  flex: 1;
}
.line {
  width: 1px;
  background-color: var(--el-border-color);
}

@media (max-width: 768px) {
  .demo-datetime-picker .block {
    flex: 100%;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-datetime-picker .block:last-child {
    border-bottom: none;
  }

  .line {
    display: none;
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
