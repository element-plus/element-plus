<template>
  <div class="text-center">No border:</div>
  <el-divider />
  <div class="flex justify-center gap-4">
    <div class="p-5">
      <el-color-picker-panel v-model="value" :border="false" />
    </div>
    <el-divider class="h-auto" direction="vertical" />
    <el-card>
      <el-color-picker-panel v-model="value" :border="false" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string>('#ff6900')
</script>
