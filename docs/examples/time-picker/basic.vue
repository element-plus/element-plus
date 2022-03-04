<template>
  <div class="example-basic">
    <el-time-picker v-model="value1" placeholder="Arbitrary time">
    </el-time-picker>
    <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time">
    </el-time-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
</script>

<style>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
