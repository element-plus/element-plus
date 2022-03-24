<template>
  <div class="example-basic">
    <el-time-picker
      v-model="value1"
      :start="[9, 0, 0]"
      :end="[17, 59, 59]"
      :step="[1, 30, 5]"
      placeholder="Arbitrary time"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
</script>

<style>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
