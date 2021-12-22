<template>
  <div class="demo-time-range">
    <el-time-select
      v-model="startTime"
      placeholder="Start time"
      start="08:30"
      step="00:15"
      end="18:30"
    >
    </el-time-select>
    <el-time-select
      v-model="endTime"
      :min-time="startTime"
      placeholder="End time"
      start="08:30"
      step="00:15"
      end="18:30"
    >
    </el-time-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>

<style>
.demo-time-range .el-select {
  margin-right: 8px;
}
</style>
