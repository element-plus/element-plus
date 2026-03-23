<template>
  <el-checkbox v-model="checked">
    <template #checked-icon>
      <el-icon><CloseBold /></el-icon>
    </template>
    Custom checked icon
  </el-checkbox>
  <el-checkbox v-model="checked" disabled>
    <template #checked-icon>
      <el-icon><CloseBold /></el-icon>
    </template>
    Disabled
  </el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'

const checked = ref(true)
</script>
