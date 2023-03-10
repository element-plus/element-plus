<template>
  <div
    class="demo-date-picker"
    style="display: flex; width: 100%; padding: 0; flex-wrap: wrap"
  >
    <div
      class="block"
      style="
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        flex: 1;
      "
    >
      <span
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
        >Emits Date object</span
      >
      <div
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
      >
        Value: {{ value1 }}
      </div>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
      />
    </div>
    <div
      class="block"
      style="
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        flex: 1;
      "
    >
      <span
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
        >Use value-format</span
      >
      <div
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
      >
        Value：{{ value2 }}
      </div>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
    </div>
    <div
      class="block"
      style="padding: 30px 0; text-align: center; flex: 1; border-right: none"
    >
      <span
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
        >Timestamp</span
      >
      <div
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
      >
        Value：{{ value3 }}
      </div>
      <el-date-picker
        v-model="value3"
        type="date"
        placeholder="Pick a Date"
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
