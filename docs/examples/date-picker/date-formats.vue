<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-text>Emits Date object</el-text>
      <el-text tag="time" truncated class="important-block my-2">
        Value: {{ value1 }}
      </el-text>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
      />
    </el-col>
    <el-col :span="8">
      <el-text>Use value-format</el-text>
      <el-text tag="time" truncated class="important-block my-2">
        Value：{{ value2 }}
      </el-text>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
    </el-col>
    <el-col :span="8">
      <el-text>Timestamp</el-text>
      <el-text tag="time" truncated class="important-block my-2">
        Value：{{ value3 }}
      </el-text>
      <el-date-picker
        v-model="value3"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="x"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
