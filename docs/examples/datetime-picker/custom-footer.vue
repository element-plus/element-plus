<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
      >
        <template #footer="{ confirm, changeToNow }">
          <el-button size="small" @click="changeToNow">Now</el-button>
          <el-button type="primary" size="small" :icon="Check" @click="confirm">
            Confirm
          </el-button>
        </template>
      </el-date-picker>
    </div>
    <div class="line" />
    <div class="block">
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="Start date"
        end-placeholder="End date"
      >
        <template #footer="{ confirm, clear }">
          <el-button size="small" @click="clear">Clear</el-button>
          <el-button type="primary" size="small" :icon="Check" @click="confirm">
            Confirm
          </el-button>
        </template>
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Check } from '@element-plus/icons-vue'

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
}
.line {
  width: 1px;
  background-color: var(--el-border-color);
}
</style>
