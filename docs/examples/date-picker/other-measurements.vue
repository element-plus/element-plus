<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">Week</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="[Week] ww"
          placeholder="Pick a week"
        />
      </div>
      <div class="block">
        <span class="demonstration">Dates</span>
        <el-date-picker
          v-model="value2"
          type="dates"
          placeholder="Pick one or more dates"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">Year</span>
        <el-date-picker
          v-model="value3"
          type="year"
          placeholder="Pick a year"
        />
      </div>
      <div class="block">
        <span class="demonstration">Years</span>
        <el-date-picker
          v-model="value4"
          type="years"
          placeholder="Pick one or more years"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">Month</span>
        <el-date-picker
          v-model="value5"
          type="month"
          placeholder="Pick a month"
        />
      </div>
      <div class="block">
        <span class="demonstration">Months</span>
        <el-date-picker
          v-model="value6"
          type="months"
          placeholder="Pick one or more months"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .container {
  flex: 1;
  min-width: 300px;
  border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .block {
  padding: 1.5rem 0;
  text-align: center;
}

.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .demo-date-picker .container {
    flex: 0 0 100%;
    min-width: auto;
    border-right: none;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-date-picker .container:last-child {
    border-bottom: none;
  }

  .demo-date-picker .block {
    padding: 1rem 0;
  }

  .demo-date-picker .container .block:last-child {
    border-top: solid 1px var(--el-border-color);
  }
}
</style>
