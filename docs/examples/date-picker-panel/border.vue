<template>
  <div class="text-center">No border:</div>
  <el-divider />
  <div class="flex content-center justify-center gap-4">
    <div class="p-5">
      <el-date-picker-panel v-model="value" :border="false" />
    </div>
    <el-divider class="h-auto" direction="vertical" />
    <el-card>
      <el-date-picker-panel v-model="value" :border="false" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
