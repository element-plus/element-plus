<template>
  <el-row>
    <el-col :span="8">
      <el-text class="display-block">Emits Date object</el-text>
      <el-text truncated class="display-block my-2">
        Value: {{ value1 }}
      </el-text>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD HH:mm:ss"
      />
    </el-col>
    <el-col :span="8">
      <el-text class="display-block">Use value-format</el-text>
      <el-text truncated class="display-block my-2">
        Value：{{ value2 }}
      </el-text>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD h:m:s a"
      />
    </el-col>
    <el-col :span="8">
      <el-text class="display-block">Timestamp</el-text>
      <el-text truncated class="display-block my-2">
        Value：{{ value3 }}
      </el-text>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD hh:mm:ss"
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
