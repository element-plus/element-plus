<template>
  <el-input-tag
    v-model="input"
    clearable
    :clear-icon="CloseBold"
    placeholder="Custom clear icon"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'

const input = ref<string[]>(['custom', 'clear', 'icon'])
</script>
